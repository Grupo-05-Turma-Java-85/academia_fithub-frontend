
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    BarbellIcon,
    ArrowUpRightIcon,
    WarningCircleIcon,
    ArrowClockwiseIcon,
} from "@phosphor-icons/react";

import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../service/Service";
import type Categoria from "../../models/Categoria";

export default function Categorias() {

    const navigate = useNavigate();

    const { usuario } = useContext(AuthContext);

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {

        if (!usuario?.token) {
            setCarregando(false);
            return;
        }

        const header = {
            headers: {
                Authorization: usuario.token,
            },
        };

        buscar(
            "/categorias",
            (dados: Categoria[]) => {
                setCategorias(dados);
                setCarregando(false);
            },
            header
        )
            .catch((error) => {

                console.error("Erro ao buscar categorias:", error);
                console.error("Status:", error.response?.status);
                console.error("Resposta:", error.response?.data);

                setErro(true);
                setCarregando(false);
            });

    }, [usuario?.token]);


    function abrirCategoria(id: number) {
        navigate(`/exercicios/${id}`);
    }


    function tentarNovamente() {
        window.location.reload();
    }


    // =========================
    // LOADING
    // =========================

    if (carregando) {
        return (
            <main className="min-h-screen bg-[#08060D] text-white flex items-center justify-center">

                <div className="text-center">

                    <div className="w-14 h-14 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-5" />

                    <h1 className="text-xl font-semibold">
                        Carregando categorias...
                    </h1>

                    <p className="text-zinc-500 mt-2">
                        Buscando os grupos musculares disponíveis.
                    </p>

                </div>

            </main>
        );
    }


    // =========================
    // ERRO
    // =========================

    if (erro) {
        return (
            <main className="min-h-screen bg-[#08060D] text-white flex items-center justify-center px-6">

                <div className="text-center max-w-md">

                    <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">

                        <WarningCircleIcon
                            size={42}
                            weight="duotone"
                            className="text-red-400"
                        />

                    </div>

                    <h1 className="text-2xl font-bold mb-3">
                        Não foi possível carregar
                    </h1>

                    <p className="text-zinc-500 mb-7">
                        Ocorreu um erro ao buscar as categorias.
                        Verifique sua conexão e tente novamente.
                    </p>

                    <button
                        onClick={tentarNovamente}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold"
                    >
                        <ArrowClockwiseIcon size={20} />
                        Tentar novamente
                    </button>

                </div>

            </main>
        );
    }


    // =========================
    // PÁGINA
    // =========================

    return (
        <main className="min-h-screen bg-[#08060D] py-20 text-white">

            <section className="w-full px-6 py-12">

                <div className="max-w-6xl mx-auto">

                    {/* CABEÇALHO */}

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                        <div>

                            <div className="flex items-center gap-3 mb-4">

                                <div className="w-11 h-11 rounded-xl bg-purple-600/15 flex items-center justify-center">

                                    <BarbellIcon
                                        size={25}
                                        weight="duotone"
                                        className="text-purple-400"
                                    />

                                </div>

                                <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
                                    Treinos
                                </span>

                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                                Grupos musculares
                            </h1>

                            <p className="text-zinc-500 mt-4 text-base md:text-lg">
                                Escolha uma categoria para encontrar os exercícios.
                            </p>

                        </div>

                        <div className="text-sm text-zinc-600">
                            {categorias.length}{" "}
                            {categorias.length === 1
                                ? "categoria disponível"
                                : "categorias disponíveis"}
                        </div>

                    </div>


                    {/* NENHUMA CATEGORIA */}

                    {categorias.length === 0 ? (

                        <div className="border border-zinc-800 rounded-3xl bg-[#101018] p-12 text-center">

                            <BarbellIcon
                                size={55}
                                weight="duotone"
                                className="text-zinc-600 mx-auto mb-5"
                            />

                            <h2 className="text-xl font-bold">
                                Nenhuma categoria cadastrada
                            </h2>

                            <p className="text-zinc-500 mt-2">
                                Ainda não existem categorias disponíveis para os exercícios.
                            </p>

                        </div>

                    ) : (

                        /* CATEGORIAS */

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            {categorias.map((categoria) => (

                                <button
                                    key={categoria.id}
                                    onClick={() => abrirCategoria(categoria.id)}
                                    className="group text-left bg-[#101018] border border-zinc-800 rounded-3xl p-6 hover:border-purple-500/60 hover:bg-[#14121f] transition-all duration-300"
                                >

                                    {/* ÍCONE */}

                                    <div className="flex items-start justify-between mb-8">

                                        <div className="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">

                                            <BarbellIcon
                                                size={29}
                                                weight="duotone"
                                                className="text-purple-400 group-hover:text-white transition"
                                            />

                                        </div>

                                        <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-600 transition-all duration-300">

                                            <ArrowUpRightIcon
                                                size={20}
                                                className="text-zinc-500 group-hover:text-white transition"
                                            />

                                        </div>

                                    </div>


                                    {/* NOME */}

                                    <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition">

                                        {categoria.nome}

                                    </h2>


                                    {/* DESCRIÇÃO */}

                                    <p className="text-zinc-500 mt-3 text-sm leading-relaxed line-clamp-2">

                                        {categoria.descricao ||
                                            "Confira os exercícios disponíveis para este grupo muscular."}

                                    </p>


                                    {/* LINK VISUAL */}

                                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-purple-400">

                                        Ver exercícios

                                        <ArrowUpRightIcon
                                            size={17}
                                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                        />

                                    </div>

                                </button>

                            ))}

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}
