import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowRightIcon,
    BarbellIcon,
    PlayIcon,
} from "@phosphor-icons/react";

import { buscar } from "../../service/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type Categoria from "../../models/Categoria";

export default function Categorias() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaDestaque, setCategoriaDestaque] = useState<Categoria | null>(null);

    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        if (!usuario?.token) {
            setLoading(false);
            return;
        }

        const header = {
            headers: { Authorization: usuario.token },
        };

        buscar(
            "/categorias",
            (dados: Categoria[]) => {
                console.log("CATEGORIAS RECEBIDAS:", dados);
                setCategorias(dados);
                setCategoriaDestaque(dados.length > 0 ? dados[0] : null);
                setLoading(false);
            },
            header
        ).catch((error) => {
            console.error("Erro ao buscar categorias:", error);
            setErro(true);
            setLoading(false);
        });
    }, [usuario?.token]);

    function entrarNaCategoria(id: number) {
        navigate(`/exercicios/${id}`);
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#08060D] text-white">
                <p className="text-gray-400">Carregando categorias...</p>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#08060D] text-white px-6">
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Não foi possível carregar as categorias</h2>
                    <p className="text-gray-500 mb-5">Verifique se o backend está funcionando.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold transition cursor-pointer"
                    >
                        Tentar novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#08060D] text-white px-6 py-24">
            <div className="w-full mx-auto">
                {/* CABEÇALHO */}
                <div className="mb-10">
                    <p className="text-purple-400 uppercase tracking-widest text-sm font-semibold mb-2">
                        Seus treinos
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Categorias
                    </h1>
                    <p className="text-gray-400 mt-3">
                        Escolha uma categoria para visualizar os exercícios disponíveis e começar seu treino.
                    </p>
                </div>

                {/* DESTAQUE */}
                {categoriaDestaque && (
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/50 to-[#120c1d] border border-purple-500/20 p-8 md:p-10 mb-10">
                        <div className="absolute -right-20 -top-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center">
                                        <BarbellIcon size={25} weight="bold" className="text-purple-400" />
                                    </div>
                                    <span className="text-purple-300 font-semibold">
                                        Categoria em destaque
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
                                    {categoriaDestaque.nome}
                                </h2>
                                <p className="text-gray-400 max-w-xl">
                                    {categoriaDestaque.descricao ||
                                        "Confira os exercícios disponíveis nesta categoria."}
                                </p>
                            </div>

                            <button
                                onClick={() => entrarNaCategoria(categoriaDestaque.id)}
                                className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-500 px-6 py-3.5 rounded-xl font-bold transition cursor-pointer shadow-lg shadow-purple-600/20"
                            >
                                <PlayIcon size={20} weight="fill" />
                                Começar treino
                            </button>
                        </div>
                    </div>
                )}

                {/* TODAS AS CATEGORIAS */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-2xl font-bold">Todas as categorias</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Selecione uma categoria para ver os exercícios
                        </p>
                    </div>
                </div>

                {categorias.length === 0 ? (
                    <div className="bg-[#100d16] border border-white/5 rounded-2xl p-10 text-center">
                        <BarbellIcon size={40} className="mx-auto text-gray-600 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Nenhuma categoria encontrada</h3>
                        <p className="text-gray-500">Ainda não existem categorias cadastradas.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {categorias.map((categoria) => (
                            <button
                                key={categoria.id}
                                onClick={() => entrarNaCategoria(categoria.id)}
                                className="group text-left bg-[#100d16] border border-white/5 hover:border-purple-500/40 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#15111c] cursor-pointer"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition">
                                        <BarbellIcon size={24} weight="bold" />
                                    </div>
                                    <ArrowRightIcon
                                        size={21}
                                        className="text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition"
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition">
                                    {categoria.nome}
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                                    {categoria.descricao || "Confira os exercícios desta categoria."}
                                </p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}