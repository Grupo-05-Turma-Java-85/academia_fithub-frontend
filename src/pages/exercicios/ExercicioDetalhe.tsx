import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    Play,
    Check,
    Pause,
    Warning,
    Barbell,
} from "@phosphor-icons/react";
import { buscar } from "../../service/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type Exercicio from "../../models/Exercicio";

export default function ExercicioDetalhe() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    const [exercicio, setExercicio] = useState<Exercicio | null>(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    // Estados do Cronômetro de Descanso
    const [tempoRestante, setTempoRestante] = useState(60);
    const [ativo, setAtivo] = useState(false);

    // Controle de Séries Concluídas (exemplo visual interativo)
    const [seriesConcluidas, setSeriesConcluidas] = useState<boolean[]>([
        true,
        true,
        false,
        false,
    ]);

    useEffect(() => {
        if (!usuario?.token) {
            setLoading(false);
            return;
        }

        const header = {
            headers: {
                Authorization: usuario.token,
            },
        };

        setLoading(true);
        setErro(false);

        // Busca o exercício específico pelo ID na API
        buscar(
            `/exercicios/${id}`,
            (dados: Exercicio) => {
                setExercicio(dados);
                setLoading(false);
            },
            header
        ).catch((error) => {
            console.error("❌ ERRO AO BUSCAR DETALHES DO EXERCÍCIO:", error);
            setErro(true);
            setLoading(false);
        });
    }, [id, usuario?.token]);

    // Lógica do Timer de Descanso (Tipagem de navegador corrigida)
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;

        if (ativo && tempoRestante > 0) {
            interval = setInterval(() => {
                setTempoRestante((prev) => prev - 1);
            }, 1000);
        } else if (tempoRestante === 0) {
            setAtivo(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [ativo, tempoRestante]);

    const toggleTimer = () => setAtivo(!ativo);
    const ajustarTempo = (segundos: number) => {
        setTempoRestante((prev) => Math.max(0, prev + segundos));
    };

    const toggleSerie = (index: number) => {
        const novasSeries = [...seriesConcluidas];
        novasSeries[index] = !novasSeries[index];
        setSeriesConcluidas(novasSeries);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#08060D] flex items-center justify-center text-white">
                <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4" />
            </div>
        );
    }

    if (erro || !exercicio) {
        return (
            <div className="min-h-screen bg-[#08060D] flex flex-col items-center justify-center text-white gap-4 px-6">
                <Barbell size={50} className="text-purple-400" />
                <h1 className="text-2xl font-bold">Exercício não encontrado</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold transition"
                >
                    Voltar aos Exercícios
                </button>
            </div>
        );
    }

    // Separa as frases da execução técnica para formar a lista numerada
    const passosExecucao = exercicio.execucaoTecnica
        ? exercicio.execucaoTecnica.split("\n").filter((p) => p.trim() !== "")
        : [];

    return (
        <main className="min-h-screen bg-[#08060D] text-white px-6 pt-10 pb-24">
            <div className="w-full max-w-6xl mt-16 mx-auto">
                {/* Botão Voltar */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-6"
                >
                    <ArrowLeft size={20} />
                    Voltar
                </button>

                {/* Tags & Título */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#181622] text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-800">
                        {exercicio.categoria?.nome || "Geral"}
                    </span>
                    <span className="bg-[#181622] text-zinc-300 text-xs font-semibold px-3 py-1 rounded-full border border-zinc-800">
                        {exercicio.equipamento || "Livre"}
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-8">
                    {exercicio.nome}
                </h1>

                {/* Grid Superior: Mídia + Cartões Laterais */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                    {/* Imagem / Vídeo do Exercício */}
                    <div className="lg:col-span-7 bg-[#11101A] border mt-30 border-zinc-800/80 rounded-2xl overflow-hidden relative group aspect-video lg:aspect-auto flex items-center justify-center max-h-110">
                        <video
                            src={
                                exercicio.foto ||
                                "https://www.pexels.com/pt-br/download/video/36785554/"
                            }
                            controls autoPlay
                        />
                    </div>

                    {/* Lado Direito: Séries e Cronômetro */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Cartão de Séries e Repetições */}
                        <div className="bg-[#11101A] border border-zinc-800/80 rounded-2xl p-6">
                            <h2 className="text-lg font-bold mb-4">Séries e Repetições</h2>
                            <div className="flex gap-8 mb-6">
                                <div>
                                    <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                                        Séries
                                    </p>
                                    <p className="text-2xl font-extrabold text-purple-400">4</p>
                                </div>
                                <span className="text-zinc-600 text-2xl self-end mb-1">×</span>
                                <div>
                                    <p className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                                        Repetições
                                    </p>
                                    <p className="text-2xl font-extrabold text-purple-400">
                                        10 - 12
                                    </p>
                                </div>
                            </div>

                            {/* Lista de Séries */}
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((serie, index) => (
                                    <div
                                        key={serie}
                                        onClick={() => toggleSerie(index)}
                                        className={`flex items-center justify-between p-3.5 rounded-xl border transition cursor-pointer ${seriesConcluidas[index]
                                                ? "border-purple-500/50 bg-purple-950/10"
                                                : "border-zinc-800/60 bg-[#161422]/50 hover:border-zinc-700"
                                            }`}
                                    >
                                        <span className="font-semibold text-sm text-zinc-300">
                                            Série {serie}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs text-zinc-400 font-medium">
                                                {seriesConcluidas[index] ? "Concluída" : "-"}
                                            </span>
                                            <div
                                                className={`w-6 h-6 rounded-full border flex items-center justify-center transition ${seriesConcluidas[index]
                                                        ? "bg-purple-600 border-purple-500 text-white"
                                                        : "border-zinc-700 bg-transparent"
                                                    }`}
                                            >
                                                {seriesConcluidas[index] && (
                                                    <Check size={14} weight="bold" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cartão de Tempo de Descanso */}
                        <div className="bg-[#11101A] border border-zinc-800/80 rounded-2xl p-6 text-center">
                            <p className="text-xs uppercase text-zinc-400 font-bold tracking-wider mb-4">
                                Tempo de Descanso
                            </p>

                            {/* Timer Circular */}
                            <div className="relative w-28 h-28 mx-auto flex items-center justify-center my-2">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="56"
                                        cy="56"
                                        r="48"
                                        className="stroke-zinc-800"
                                        strokeWidth="6"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="56"
                                        cy="56"
                                        r="48"
                                        className="stroke-purple-500 transition-all duration-300"
                                        strokeWidth="6"
                                        strokeDasharray={301.59}
                                        strokeDashoffset={301.59 - (301.59 * tempoRestante) / 60}
                                        strokeLinecap="round"
                                        fill="transparent"
                                    />
                                </svg>
                                <span className="absolute text-2xl font-bold">
                                    {tempoRestante}s
                                </span>
                            </div>

                            {/* Controles do Timer */}
                            <div className="flex items-center justify-center gap-3 mt-4">
                                <button
                                    onClick={() => ajustarTempo(-15)}
                                    className="px-3 py-1.5 text-xs bg-[#1A1827] border border-zinc-800 rounded-lg hover:bg-zinc-800 transition font-medium"
                                >
                                    -15s
                                </button>
                                <button
                                    onClick={toggleTimer}
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-semibold text-sm flex items-center gap-2"
                                >
                                    {ativo ? <Pause size={16} /> : <Play size={16} />}
                                    {ativo ? "Pausar" : "Iniciar"}
                                </button>
                                <button
                                    onClick={() => ajustarTempo(15)}
                                    className="px-3 py-1.5 text-xs bg-[#1A1827] border border-zinc-800 rounded-lg hover:bg-zinc-800 transition font-medium"
                                >
                                    +15s
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seção Inferior: Execução Técnica */}
                <div className="bg-[#11101A] border border-zinc-800/80 rounded-2xl p-6 md:p-8 mb-6">
                    <h2 className="text-xl font-bold mb-6">Execução Técnica</h2>
                    <div className="space-y-4 text-zinc-300 text-sm md:text-base leading-relaxed">
                        {passosExecucao.length > 0 ? (
                            passosExecucao.map((passo, index) => (
                                <p key={index} className="flex gap-3">
                                    <span className="font-semibold text-purple-400 select-none">
                                        {index + 1}.
                                    </span>
                                    <span>{passo.replace(/^\d+\.\s*/, "")}</span>
                                </p>
                            ))
                        ) : (
                            <p className="text-zinc-500">
                                Nenhuma instrução técnica fornecida para este exercício.
                            </p>
                        )}
                    </div>
                </div>

                {/* Aviso de Segurança */}
                <div className="bg-[#11101A] border border-orange-500/20 rounded-2xl p-5 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
                        <Warning size={24} weight="bold" />
                    </div>
                    <div>
                        <h3 className="text-orange-400 font-bold text-sm mb-1">
                            Aviso de Segurança
                        </h3>
                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                            Se estiver levantando cargas pesadas (perto do seu limite máximo),
                            sempre utilize um ajudante (spotter) para garantir a segurança
                            durante a execução.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}