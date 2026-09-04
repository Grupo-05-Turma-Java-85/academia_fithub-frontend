import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    CaretRightIcon,
    TimerIcon,
    ArrowLeftIcon,
    BarbellIcon,
} from "@phosphor-icons/react";

import { buscar } from "../../service/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type Exercicio from "../../models/Exercicio";

export default function Exercicios() {

    const { categoriaId } = useParams<{ categoriaId: string }>();

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    const [exercicios, setExercicios] = useState<Exercicio[]>([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {

        if (!usuario?.token) {
            console.log("❌ Usuário sem token");
            setLoading(false);
            return;
        }

        const header = {
            headers: {
                Authorization: usuario.token,
            },
        };

        console.log("📤 Buscando exercícios...");

        setLoading(true);
        setErro(false);

        buscar(
            "/exercicios",
            (dados: Exercicio[]) => {

                console.log("✅ EXERCÍCIOS RECEBIDOS:", dados);

                if (categoriaId) {

                    const filtrados = dados.filter(
                        (exercicio) =>
                            String(exercicio.categoria?.id) ===
                            String(categoriaId)
                    );

                    console.log(
                        "✅ EXERCÍCIOS DA CATEGORIA:",
                        filtrados
                    );

                    setExercicios(filtrados);

                } else {

                    setExercicios(dados);
                }

                setLoading(false);
            },
            header
        )
            .catch((error) => {

                console.error(
                    "❌ ERRO AO BUSCAR EXERCÍCIOS:",
                    error
                );

                console.error(
                    "STATUS:",
                    error.response?.status
                );

                console.error(
                    "RESPOSTA:",
                    error.response?.data
                );

                setErro(true);
                setLoading(false);
            });

    }, [categoriaId, usuario?.token]);

    if (loading) {

        return (
            <div className="min-h-screen bg-[#08060D] flex items-center justify-center text-white">

                <p className="text-lg">
                    Carregando exercícios...
                </p>

            </div>
        );
    }

    if (erro) {

        return (
            <div className="min-h-screen bg-[#08060D] flex flex-col items-center justify-center text-white gap-4 px-6">

                <BarbellIcon
                    size={50}
                    className="text-purple-400"
                />

                <h1 className="text-2xl font-bold">
                    Erro ao carregar exercícios
                </h1>

                <p className="text-zinc-400 text-center">
                    Não foi possível buscar os exercícios da API.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="
                        bg-purple-600
                        hover:bg-purple-700
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                    "
                >
                    Tentar novamente
                </button>

            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#08060D] text-white px-6 py-10">

            <div className="w-full max-w-7xl mx-auto">

                <button
                    onClick={() => navigate("/categorias")}
                    className="
                        flex
                        items-center
                        gap-2
                        text-zinc-400
                        hover:text-white
                        transition
                        mb-8
                    "
                >
                    <ArrowLeftIcon size={20} />

                    Voltar para categorias
                </button>

                <div className="mb-10">

                    <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold">
                        Treino
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mt-2">
                        Exercícios
                    </h1>

                    <p className="text-zinc-400 mt-3">
                        Escolha um exercício para começar seu treino.
                    </p>

                </div>

                {exercicios.length === 0 ? (

                    <div className="
                        border
                        border-zinc-800
                        bg-[#11101A]
                        rounded-2xl
                        p-10
                        text-center
                    ">

                        <BarbellIcon
                            size={55}
                            className="mx-auto text-purple-400 mb-5"
                        />

                        <h2 className="text-xl font-bold">
                            Nenhum exercício encontrado
                        </h2>

                        <p className="text-zinc-400 mt-2">
                            Não existem exercícios cadastrados para esta categoria.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {exercicios.map((exercicio) => (

                            <div
                                key={exercicio.id}
                                className="
                                    group
                                    bg-[#11101A]
                                    border
                                    border-zinc-800
                                    hover:border-purple-500
                                    rounded-2xl
                                    p-6
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-6
                                ">

                                    <div className="
                                        w-12
                                        h-12
                                        rounded-xl
                                        bg-purple-600/20
                                        flex
                                        items-center
                                        justify-center
                                    ">

                                        <BarbellIcon
                                            size={25}
                                            className="text-purple-400"
                                        />

                                    </div>

                                    <CaretRightIcon
                                        size={22}
                                        className="
                                            text-zinc-600
                                            group-hover:text-purple-400
                                            transition
                                        "
                                    />

                                </div>

                                <h2 className="text-xl font-bold text-white">
                                    {exercicio.nome}
                                </h2>

                                {exercicio.descricao && (
                                    <p className="
                                        text-zinc-400
                                        text-sm
                                        mt-3
                                        line-clamp-3
                                    ">
                                        {exercicio.descricao}
                                    </p>
                                )}

                                <div className="mt-6 flex items-center gap-2 text-zinc-400 text-sm">

                                    <TimerIcon size={18} />

                                    <span>
                                        Exercício
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}
