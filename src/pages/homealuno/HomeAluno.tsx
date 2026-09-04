
import { useContext, useEffect, useMemo, useState } from "react";
import {
    ArrowRight,
    Barbell,
    CaretLeft,
    CaretRight,
    CheckCircle,
    Clock,
    Download,
    Fire,
    PencilSimple,
} from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import type Categoria from "../../models/Categoria";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, buscar } from "../../service/Service";
import { pdf } from "@react-pdf/renderer";
import FichaTreinoPDF from "../../components/pdf/FichaTreinoPDF";
import { toast } from "react-toastify";

type Nivel = "INICIANTE" | "INTERMEDIARIO" | "AVANÇADO";

interface Treino {
    letra: string;
    titulo: string;
    categorias: string[];
}

type Objetivo = "Emagrecimento" | "Manter peso" | "Ganho de massa";

const OBJETIVOS: {
    id: Objetivo;
    titulo: string;
    subtitulo: string;
}[] = [
        {
            id: "Emagrecimento",
            titulo: "Emagrecimento",
            subtitulo: "Definição corporal",
        },
        {
            id: "Manter peso",
            titulo: "Manter peso",
            subtitulo: "Resistência e saúde",
        },
        {
            id: "Ganho de massa",
            titulo: "Ganho de massa",
            subtitulo: "Construção de músculos",
        },
    ];

const TREINOS_POR_NIVEL: Record<Nivel, Treino[]> = {
    INICIANTE: [
        {
            letra: "A",
            titulo: "Pernas",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
            ],
        },
        {
            letra: "B",
            titulo: "Superior",
            categorias: [
                "Peito",
                "Costas",
                "Ombros",
                "Bíceps",
                "Tríceps",
            ],
        },
    ],

    INTERMEDIARIO: [
        {
            letra: "A",
            titulo: "Peito & Tríceps",
            categorias: ["Peito", "Tríceps"],
        },
        {
            letra: "B",
            titulo: "Costas & Bíceps",
            categorias: ["Costas", "Bíceps"],
        },
        {
            letra: "C",
            titulo: "Pernas & Abdômen",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
                "Abdômen",
            ],
        },
    ],

    AVANÇADO: [
        {
            letra: "A",
            titulo: "Peito & Tríceps",
            categorias: ["Peito", "Tríceps"],
        },
        {
            letra: "B",
            titulo: "Costas & Bíceps",
            categorias: ["Costas", "Bíceps"],
        },
        {
            letra: "C",
            titulo: "Pernas",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
            ],
        },
        {
            letra: "D",
            titulo: "Ombros & Abdômen",
            categorias: ["Ombros", "Abdômen"],
        },
    ],
};

export default function HomeAluno() {
    const { usuario } = useContext(AuthContext);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [nivelSelecionado, setNivelSelecionado] = useState<
        Nivel | ""
    >("");

    const [nivelEscolhido, setNivelEscolhido] = useState<
        Nivel | ""
    >("");

    const [modalNivelAberto, setModalNivelAberto] = useState(false);

    const [objetivo, setObjetivo] =
        useState<Objetivo>("Emagrecimento");

    const [diasPorSemana, setDiasPorSemana] = useState(4);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 6000,
                stopOnInteraction: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    useEffect(() => {
    if (!usuario?.token) {
        return;
    }

    buscar(
        "/categorias",
        setCategorias,
        {
            headers: {
                Authorization: usuario.token,
            },
        }
    );
}, [usuario?.token]);

    useEffect(() => {
        const nivel = usuario.nivel?.toUpperCase();

        if (
            nivel === "INICIANTE" ||
            nivel === "INTERMEDIARIO" ||
            nivel === "AVANÇADO"
        ) {
            setNivelSelecionado(nivel);
        } else {
            setNivelSelecionado("");
        }
    }, [usuario.nivel]);

    const treinos = useMemo(() => {
        if (!nivelSelecionado) {
            return [];
        }

        return TREINOS_POR_NIVEL[nivelSelecionado];
    }, [nivelSelecionado]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        const updateIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        setSlidesCount(emblaApi.scrollSnapList().length);

        emblaApi.on("select", updateIndex);

        updateIndex();

        return () => {
            emblaApi.off("select", updateIndex);
        };
    }, [emblaApi, treinos.length]);

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    function scrollTo(index: number) {
        emblaApi?.scrollTo(index);
    }

    function encontrarCategoria(nome: string) {
        return categorias.find(
            (categoria) =>
                categoria.nome?.trim().toLowerCase() ===
                nome.trim().toLowerCase()
        );
    }

    function quantidadeExerciciosDoTreino(treino: Treino) {
        return treino.categorias.reduce(
            (quantidade, nomeCategoria) => {
                const categoria =
                    encontrarCategoria(nomeCategoria);

                return (
                    quantidade +
                    (categoria?.exercicio?.length ?? 0)
                );
            },
            0
        );
    }

    async function salvarNivel() {
        if (!nivelEscolhido) {
            return;
        }

        try {
            await atualizar(
                "/usuarios/atualizar",
                {
                    id: usuario.id,
                    foto: usuario.foto,
                    nome: usuario.nome,
                    peso: usuario.peso,
                    altura: usuario.altura,
                    dataNascimento: usuario.dataNascimento,
                    nivel: nivelEscolhido,
                    frequenciaSemanal:
                        usuario.frequenciaSemanal,
                    usuario: usuario.usuario,
                    senha: usuario.senha,
                    treinoGerado: usuario.treinoGerado,
                    tipoUsuario: usuario.tipoUsuario,
                },
                () => { },
                {
                    headers: {
                        Authorization: usuario.token,
                    },
                }
            );

            setNivelSelecionado(nivelEscolhido);
            setModalNivelAberto(false);
            setNivelEscolhido("");
        } catch (error) {
            console.error(
                "Erro ao atualizar nível:",
                error
            );
        }
    }

    // PDF
    const gerarPDF = async () => {
    try {
        if (!usuario) {
            toast.error("Usuário não encontrado.");
            return;
        }

        if (categorias.length === 0) {
            toast.error("As categorias ainda não foram carregadas.");
            return;
        }

        console.log("USUARIO PDF:", usuario);
        console.log("CATEGORIAS PDF:", categorias);
        console.log("TREINOS PDF:", treinos);

        const documento = (
            <FichaTreinoPDF
                usuario={usuario}
                treinos={treinos}
                categorias={categorias}
            />
        );

        const blob = await pdf(documento).toBlob();

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `ficha-treino-${usuario.nome}.pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

        toast.success("Ficha de treino baixada com sucesso!");
    } catch (error) {
        console.error("Erro ao gerar PDF:", error);
        toast.error("Erro ao gerar a ficha de treino.");
    }
};

    return (
        <div className="min-h-screen bg-[#08060D] text-white">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#08060D] px-6 py-20 md:py-28">

                {/* GLOWS */}
                <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-700/20 blur-[130px]" />
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[110px]" />

                <div className="relative grid w-full gap-14 md:grid-cols-2 md:items-center">

                    <div>

                        <span className="inline-block rounded-full border border-violet-500/40 bg-violet-500/5 px-3 py-1 text-xs font-medium text-violet-300">
                            Simples. Focado. Eficiente.
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">

                            Treine certo.
                            <br />

                            Coma bem.
                            <br />

                            <span className="text-violet-500">
                                Evolua.
                            </span>

                        </h1>

                        <p className="mt-6 text-base leading-relaxed text-slate-400">
                            Organize seus treinos, acompanhe sua
                            rotina e evolua de acordo com o seu nível.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("cronograma")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                                className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-all hover:bg-violet-500 hover:shadow-violet-600/20"
                            >
                                Ver meu cronograma

                                <ArrowRight
                                    size={18}
                                    weight="bold"
                                />
                            </button>

                        </div>

                    </div>

                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-violet-950/10 backdrop-blur-sm">

                        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-600/20 blur-[70px]" />

                        <div className="relative">

                            <div className="flex items-center justify-between">

                                <span className="text-xs font-semibold tracking-wide text-violet-400">
                                    SEU PERFIL
                                </span>

                                <CheckCircle
                                    size={22}
                                    weight="fill"
                                    className="text-emerald-400"
                                />

                            </div>

                            <h3 className="mt-4 text-2xl font-bold text-white">
                                Olá, {usuario.nome || "Aluno"}!
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                Seu cronograma é baseado nas informações
                                do seu perfil e no seu nível de treinamento.
                            </p>

                            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Nível
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        {nivelSelecionado ||
                                            "Não definido"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Frequência
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-white">
                                        {usuario.frequenciaSemanal || 0}{" "}
                                        dias
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CRONOGRAMA */}
            <section
                id="cronograma"
                className="relative overflow-hidden bg-[#0B0912] px-6 py-20"
            >

                <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-700/10 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

                <div className="relative w-full">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

                        <div>

                            <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                                Seu treinamento
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold text-white">
                                Seu Cronograma
                            </h2>

                            <p className="mt-2 text-base text-slate-400">
                                Seu treino é organizado automaticamente
                                de acordo com seu nível.
                            </p>

                        </div>

                        {nivelSelecionado && (
                            <span className="inline-block w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
                                Nível: {nivelSelecionado}
                            </span>
                        )}

                    </div>

                    {!nivelSelecionado ? (

                        <div className="mt-10 rounded-2xl border border-violet-500/20 bg-white/[0.03] p-10 text-center shadow-xl shadow-black/10">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">

                                <Barbell
                                    size={32}
                                    weight="fill"
                                    className="text-violet-500"
                                />

                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-white">
                                Seu cronograma ainda não está disponível
                            </h3>

                            <p className="mx-auto mt-3 text-sm leading-relaxed text-slate-400">
                                Deseja ter um cronograma personalizado?
                                Preencha seu nível de treinamento para
                                começarmos a montar sua rotina.
                            </p>

                            <button
                                onClick={() => {
                                    setNivelEscolhido("");
                                    setModalNivelAberto(true);
                                }}
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-all hover:bg-violet-500"
                            >

                                <PencilSimple
                                    size={18}
                                    weight="bold"
                                />

                                Definir meu nível

                            </button>

                        </div>

                    ) : (

                        <div className="mt-8">

                            {/* EMBLA */}
                            <div className="relative">

                                <div
                                    ref={emblaRef}
                                    className="overflow-hidden"
                                >

                                    <div className="flex">

                                        {treinos.map((treino) => {

                                            const exercicios =
                                                quantidadeExerciciosDoTreino(
                                                    treino
                                                );

                                            return (

                                                <div
                                                    key={treino.letra}
                                                    className="min-w-0 flex-[0_0_100%] px-1"
                                                >

                                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl shadow-black/20 md:p-8">

                                                        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/10 blur-[80px]" />

                                                        <div className="relative">

                                                            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                                                                <div className="flex items-start gap-4">

                                                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-xl font-extrabold text-white shadow-lg shadow-violet-900/20">
                                                                        {treino.letra}
                                                                    </div>

                                                                    <div>

                                                                        <p className="text-xs font-semibold tracking-wide text-violet-400">
                                                                            TREINO{" "}
                                                                            {treino.letra}
                                                                        </p>

                                                                        <h3 className="mt-1 text-2xl font-bold text-white">
                                                                            {treino.titulo}
                                                                        </h3>

                                                                        <p className="mt-1 text-sm text-slate-400">
                                                                            Foco em{" "}
                                                                            {treino.categorias.join(
                                                                                ", "
                                                                            )}
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                                                {treino.categorias.map(
                                                                    (
                                                                        categoriaNome
                                                                    ) => {

                                                                        const categoria =
                                                                            encontrarCategoria(
                                                                                categoriaNome
                                                                            );

                                                                        return (

                                                                            <div
                                                                                key={
                                                                                    categoriaNome
                                                                                }
                                                                                className="rounded-xl border border-white/5 bg-black/20 p-4 transition-colors hover:border-violet-500/20 hover:bg-violet-500/5"
                                                                            >

                                                                                <div className="flex items-center gap-3">

                                                                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">

                                                                                        <Barbell
                                                                                            size={20}
                                                                                            weight="bold"
                                                                                            className="text-violet-400"
                                                                                        />

                                                                                    </div>

                                                                                    <div>

                                                                                        <p className="text-sm font-semibold text-white">
                                                                                            {categoriaNome}
                                                                                        </p>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        );
                                                                    }
                                                                )}

                                                            </div>

                                                            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">

                                                                <div className="flex items-center gap-3">

                                                                    <Clock
                                                                        size={20}
                                                                        className="text-violet-400"
                                                                        weight="bold"
                                                                    />

                                                                    <div>

                                                                        <p className="text-xs text-slate-500">
                                                                            Duração
                                                                        </p>

                                                                        <p className="text-sm font-semibold text-white">
                                                                            45–60 min
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                                <div className="flex items-center gap-3">

                                                                    <Fire
                                                                        size={20}
                                                                        className="text-orange-500"
                                                                        weight="bold"
                                                                    />

                                                                    <div>

                                                                        <p className="text-xs text-slate-500">
                                                                            Intensidade
                                                                        </p>

                                                                        <p className="text-sm font-semibold text-white">
                                                                            Moderada
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                                <div className="flex items-center gap-3">

                                                                    <CheckCircle
                                                                        size={20}
                                                                        className="text-emerald-500"
                                                                        weight="bold"
                                                                    />

                                                                    <div>

                                                                        <p className="text-xs text-slate-500">
                                                                            Status
                                                                        </p>

                                                                        <p className="text-sm font-semibold text-white">
                                                                            Planejado
                                                                        </p>

                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            );
                                        })}

                                    </div>

                                </div>

                                {treinos.length > 1 && (
                                    <>

                                        <button
                                            onClick={scrollPrev}
                                            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#15121F] text-slate-300 shadow-lg transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                                            aria-label="Treino anterior"
                                        >
                                            <CaretLeft
                                                size={22}
                                                weight="bold"
                                            />
                                        </button>

                                        <button
                                            onClick={scrollNext}
                                            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#15121F] text-slate-300 shadow-lg transition hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
                                            aria-label="Próximo treino"
                                        >
                                            <CaretRight
                                                size={22}
                                                weight="bold"
                                            />
                                        </button>

                                    </>
                                )}

                            </div>

                            {/* BOLINHAS */}
                            {slidesCount > 1 && (
                                <div className="mt-6 flex justify-center gap-2">

                                    {Array.from({
                                        length: slidesCount,
                                    }).map((_, index) => (

                                        <button
                                            key={`carousel-dot-${index}`}
                                            onClick={() =>
                                                scrollTo(index)
                                            }
                                            aria-label={`Ir para treino ${index + 1
                                                }`}
                                            className={`h-2.5 rounded-full transition-all ${selectedIndex === index
                                                ? "w-7 bg-violet-500 shadow-lg shadow-violet-500/30"
                                                : "w-2.5 bg-white/20 hover:bg-white/30"
                                                }`}
                                        />

                                    ))}

                                </div>
                            )}

                        </div>

                    )}

                </div>

            </section>

            {/* FICHA */}
            <section className="relative overflow-hidden bg-[#08060D] mb-20 px-6 py-10">

                <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-700/10 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[110px]" />

                <div className="relative w-full text-center">

                    <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                        Baixe seu treino
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold text-white">
                        Sua Ficha de Treino
                    </h2>

                    <p className="mt-2 text-base text-slate-400">
                        Baixe sua ficha e leve seu treino para onde quiser.
                    </p>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left shadow-xl shadow-black/20">

                        <p className="text-xs font-semibold tracking-wide text-slate-400">
                            1. ESCOLHA SEU OBJETIVO
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-3">

                            {OBJETIVOS.map((op) => (

                                <button
                                    key={op.id}
                                    onClick={() =>
                                        setObjetivo(op.id)
                                    }
                                    className={`rounded-xl border p-4 text-left transition-all ${objetivo === op.id
                                        ? "border-violet-500/50 bg-violet-500/10 shadow-lg shadow-violet-950/10"
                                        : "border-white/10 bg-black/10 hover:border-white/20 hover:bg-white/[0.04]"
                                        }`}
                                >

                                    <p className="font-semibold text-white">
                                        {op.titulo}
                                    </p>

                                    <p
                                        className={`mt-0.5 text-xs ${objetivo === op.id
                                            ? "text-violet-400"
                                            : "text-slate-500"
                                            }`}
                                    >
                                        {op.subtitulo}
                                    </p>

                                </button>

                            ))}

                        </div>

                        <p className="mt-6 text-xs font-semibold tracking-wide text-slate-400">
                            2. DIAS DISPONÍVEIS POR SEMANA
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-3">

                            {[3, 4, 5].map((dias) => (

                                <button
                                    key={dias}
                                    onClick={() =>
                                        setDiasPorSemana(dias)
                                    }
                                    className={`rounded-xl border py-3 text-center text-sm font-semibold transition-all ${diasPorSemana === dias
                                        ? "border-violet-500/50 bg-violet-500/10 text-violet-400"
                                        : "border-white/10 bg-black/10 text-slate-400 hover:border-white/20 hover:text-white"
                                        }`}
                                >
                                    {dias} Dias / sem
                                </button>

                            ))}

                        </div>

                        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

                            <button
                                onClick={gerarPDF}
                                className="flex items-center gap-2 ..."
                            >
                                <Download size={20} />
                                Baixar ficha em PDF
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* MODAL NÍVEL */}
            {modalNivelAberto && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">

                    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#110E19] p-6 shadow-2xl shadow-black/50">

                        <div className="flex items-start justify-between gap-4">

                            <div>

                                <p className="text-xs font-semibold tracking-wide text-violet-400">
                                    PERSONALIZAÇÃO
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-white">
                                    Qual é seu nível?
                                </h3>

                                <p className="mt-2 text-sm text-slate-400">
                                    Escolha seu nível para montarmos
                                    seu cronograma.
                                </p>

                            </div>

                            <button
                                onClick={() => {
                                    setModalNivelAberto(false);
                                    setNivelEscolhido("");
                                }}
                                className="text-2xl text-slate-500 transition hover:text-white"
                            >
                                ×
                            </button>

                        </div>

                        <div className="mt-6 space-y-3">

                            {(
                                [
                                    "INICIANTE",
                                    "INTERMEDIARIO",
                                    "AVANÇADO",
                                ] as Nivel[]
                            ).map((nivel) => (

                                <button
                                    key={nivel}
                                    onClick={() =>
                                        setNivelEscolhido(nivel)
                                    }
                                    className={`w-full rounded-xl border p-4 text-left transition ${nivelEscolhido === nivel
                                        ? "border-violet-500 bg-violet-500/10 ring-1 ring-violet-500/40"
                                        : "border-white/10 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5"
                                        }`}
                                >

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="font-semibold text-white">
                                                {nivel}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-500">

                                                {nivel === "INICIANTE" &&
                                                    "Treino A + B"}

                                                {nivel === "INTERMEDIARIO" &&
                                                    "Treino A + B + C"}

                                                {nivel === "AVANÇADO" &&
                                                    "Treino A + B + C + D"}

                                            </p>

                                        </div>

                                        {nivelEscolhido === nivel && (

                                            <CheckCircle
                                                size={24}
                                                weight="fill"
                                                className="text-violet-500"
                                            />

                                        )}

                                    </div>

                                </button>

                            ))}

                        </div>

                        <button
                            onClick={salvarNivel}
                            disabled={!nivelEscolhido}
                            className={`mt-6 w-full rounded-lg py-3 text-sm font-semibold text-white transition ${nivelEscolhido
                                ? "bg-violet-600 shadow-lg shadow-violet-900/20 hover:bg-violet-500"
                                : "cursor-not-allowed bg-white/10 text-slate-500"
                                }`}
                        >
                            Confirmar nível
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

function MetaCard({
    numero,
    eyebrow,
    titulo,
    texto,
    destaque = false,
}: {
    numero: string;
    eyebrow: string;
    titulo: string;
    texto: string;
    destaque?: boolean;
}) {
    return (
        <div
            className={`rounded-2xl border p-6 ${destaque
                ? "border-violet-400 bg-violet-500/10"
                : "border-white/10 bg-white/[0.03]"
                }`}
        >

            <span className="text-xs font-semibold tracking-wide text-violet-400">
                {numero}. {eyebrow}
            </span>

            <h3 className="mt-3 text-lg font-bold text-white">
                {titulo}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {texto}
            </p>

        </div>
    );
}
