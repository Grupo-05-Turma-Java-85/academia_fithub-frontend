import {
    ArrowUpRightIcon,
    UsersThreeIcon,
    BarbellIcon,
    UserCircleIcon,
    ChartLineUpIcon,
    PlusIcon,
    PencilSimpleIcon,
    TrashIcon,
    FolderIcon,
    ArrowSquareOutIcon,
} from "@phosphor-icons/react";

import { useContext, useEffect, useState } from "react";

import { buscar } from "../../service/Service";
import { AuthContext } from "../../contexts/AuthContext";

import type Categoria from "../../models/Categoria";
import type Exercicio from "../../models/Exercicio";

import DeletarExercicios from "../../components/exercicios/deletarexercicios/DeletarExercicios";
import FormExercicios from "../../components/exercicios/formexercicios/FormExercicios";

import DeletarCategoria from "../../components/categorias/deletarcategoria/DeletarCategoria";
import FormCategorias from "../../components/categorias/formcategoria/FormCategoria";


function HomeAdmin() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [exercicios, setExercicios] = useState<Exercicio[]>([]);

    // =========================
    // MODAIS EXERCÍCIOS
    // =========================

    const [modalFormulario, setModalFormulario] = useState(false);
    const [modalDeletar, setModalDeletar] = useState(false);

    const [exercicioSelecionado, setExercicioSelecionado] =
        useState<Exercicio | null>(null);


    // =========================
    // MODAIS CATEGORIAS
    // =========================

    const [modalFormularioCategoria, setModalFormularioCategoria] =
        useState(false);

    const [modalDeletarCategoria, setModalDeletarCategoria] =
        useState(false);

    const [categoriaSelecionada, setCategoriaSelecionada] =
        useState<Categoria | null>(null);


    const { usuario } = useContext(AuthContext);


    // =========================
    // CARREGAR DADOS
    // =========================

    async function carregarDados() {

        if (!usuario.token) return;

        const header = {
            headers: {
                Authorization: usuario.token
            }
        };

        buscar("/categorias", setCategorias, header);
        buscar("/exercicios", setExercicios, header);
    }


    useEffect(() => {

        carregarDados();

    }, [usuario.token]);


    // =========================
    // EXERCÍCIOS
    // =========================

    function abrirAdicionarExercicio() {

        setExercicioSelecionado(null);
        setModalFormulario(true);
    }


    function abrirEditarExercicio(exercicio: Exercicio) {

        setExercicioSelecionado(exercicio);
        setModalFormulario(true);
    }


    function abrirDeletarExercicio(exercicio: Exercicio) {

        setExercicioSelecionado(exercicio);
        setModalDeletar(true);
    }


    function fecharFormulario() {

        setModalFormulario(false);
        setExercicioSelecionado(null);
    }


    function fecharDeletar() {

        setModalDeletar(false);
        setExercicioSelecionado(null);
    }


    // =========================
    // CATEGORIAS
    // =========================

    function abrirAdicionarCategoria() {

        setCategoriaSelecionada(null);
        setModalFormularioCategoria(true);
    }


    function abrirEditarCategoria(categoria: Categoria) {

        setCategoriaSelecionada(categoria);
        setModalFormularioCategoria(true);
    }


    function abrirDeletarCategoria(categoria: Categoria) {

        setCategoriaSelecionada(categoria);
        setModalDeletarCategoria(true);
    }


    function fecharFormularioCategoria() {

        setModalFormularioCategoria(false);
        setCategoriaSelecionada(null);
    }


    function fecharDeletarCategoria() {

        setModalDeletarCategoria(false);
        setCategoriaSelecionada(null);
    }


    // =========================
    // ATUALIZAR LISTAS
    // =========================

    async function atualizarLista() {

        await carregarDados();

    }

    console.log("USUÁRIO LOGADO:", usuario);
    console.log("TIPO:", usuario.tipoUsuario);
    console.log("TOKEN:", usuario.token);

    return (

        <main className="min-h-screen w-full py-30 overflow-x-hidden bg-[#08070d] text-white">

            {/* =========================
                HEADER
            ========================= */}

            <section className="border-b border-white/5 bg-[#120c1d]">

                <div className="w-full px-10 py-10">

                    <div className="flex items-center justify-between">

                        <div>

                            <h1 className="mt-4 text-4xl font-black tracking-tight">
                                Olá, Administrador
                            </h1>

                            <p className="mt-3 text-sm text-gray-500">
                                Gerencie alunos, categorias e exercícios da
                                sua academia.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                INDICADORES
            ========================= */}

            <section className="bg-[#09080e]">

                <div className="w-full px-10 py-8">

                    <div className="grid grid-cols-4 gap-5">

                        {/* ALUNOS */}

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5 transition hover:border-purple-500/20">

                            <div className="flex items-start justify-between">

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <UsersThreeIcon size={21} />
                                </div>

                                <span className="flex items-center gap-1 text-[9px] font-bold text-green-400">
                                    <ArrowUpRightIcon size={12} />
                                    12,5%
                                </span>

                            </div>

                            <p className="mt-5 text-[10px] uppercase tracking-widest text-gray-600">
                                Total de alunos
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                1.248
                            </p>

                            <p className="mt-2 text-[9px] text-gray-600">
                                +138 este mês
                            </p>

                        </div>


                        {/* TREINOS */}

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5 transition hover:border-purple-500/20">

                            <div className="flex items-start justify-between">

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <BarbellIcon size={21} />
                                </div>

                                <span className="flex items-center gap-1 text-[9px] font-bold text-green-400">
                                    <ArrowUpRightIcon size={12} />
                                    8,4%
                                </span>

                            </div>

                            <p className="mt-5 text-[10px] uppercase tracking-widest text-gray-600">
                                Treinos realizados
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                3.842
                            </p>

                            <p className="mt-2 text-[9px] text-gray-600">
                                nesta semana
                            </p>

                        </div>


                        {/* ALUNOS ATIVOS */}

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5 transition hover:border-purple-500/20">

                            <div className="flex items-start justify-between">

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                                    <UserCircleIcon size={21} />
                                </div>

                                <span className="text-[9px] font-bold text-green-400">
                                    Online agora
                                </span>

                            </div>

                            <p className="mt-5 text-[10px] uppercase tracking-widest text-gray-600">
                                Alunos ativos
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                876
                            </p>

                            <p className="mt-2 text-[9px] text-gray-600">
                                70,2% da base
                            </p>

                        </div>


                        {/* PERFORMANCE */}

                        <div className="rounded-xl border border-purple-500/20 bg-[#120d1b] p-5">

                            <div className="flex items-start justify-between">

                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                    <ChartLineUpIcon size={21} />
                                </div>

                                <span className="text-[9px] font-bold text-green-400">
                                    Excelente
                                </span>

                            </div>

                            <p className="mt-5 text-[10px] uppercase tracking-widest text-gray-600">
                                Performance média
                            </p>

                            <p className="mt-1 text-3xl font-black">
                                87,4%
                            </p>

                            <p className="mt-2 text-[9px] text-gray-600">
                                +5,8% comparado ao mês anterior
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
    GERENCIAMENTO
========================= */}

            <section className="bg-[#09080e]">

                <div className="w-full px-10 pb-10">

                    <div className="mb-6">

                        <p className="text-[9px] uppercase tracking-widest text-gray-600">
                            Administração
                        </p>

                        <h2 className="mt-1 text-2xl font-black">
                            Gerenciamento
                        </h2>

                        <p className="mt-2 text-sm text-gray-500">
                            Crie, edite e remova categorias e exercícios.
                        </p>

                    </div>


                    <div className="grid grid-cols-2 gap-5">

                        {/* =========================
                CATEGORIAS
            ========================= */}

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-6">

                            <div className="flex items-start justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                        <FolderIcon size={24} />
                                    </div>

                                    <div>

                                        <h3 className="text-lg font-bold">
                                            Categorias
                                        </h3>

                                        <p className="mt-1 text-[10px] text-gray-600">
                                            Organize os exercícios por categoria
                                        </p>

                                    </div>

                                </div>

                                <span className="rounded-md bg-purple-500/10 px-2 py-1 text-[9px] font-bold text-purple-400">
                                    {categorias.length} categorias
                                </span>

                            </div>


                            <div className="mt-6 space-y-3">

                                {categorias.slice(0, 3).map((categoria) => {

                                    const quantidadeExercicios =
                                        exercicios.filter(
                                            (exercicio) =>
                                                exercicio.categoria?.id === categoria.id
                                        ).length;

                                    return (

                                        <div
                                            key={categoria.id}
                                            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4"
                                        >

                                            <div>

                                                <p className="text-sm font-semibold">
                                                    {categoria.nome}
                                                </p>

                                                <p className="mt-1 text-[9px] text-gray-600">
                                                    {quantidadeExercicios} exercícios
                                                </p>

                                            </div>


                                            <div className="flex items-center gap-2">

                                                <button
                                                    onClick={() =>
                                                        abrirEditarCategoria(categoria)
                                                    }
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                                    title="Editar categoria"
                                                >
                                                    <PencilSimpleIcon size={15} />
                                                </button>


                                                <button
                                                    onClick={() =>
                                                        abrirDeletarCategoria(categoria)
                                                    }
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                                    title="Excluir categoria"
                                                >
                                                    <TrashIcon size={15} />
                                                </button>

                                            </div>

                                        </div>

                                    );

                                })}

                            </div>


                            <button
                                onClick={abrirAdicionarCategoria}
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                            >
                                <PlusIcon size={15} weight="bold" />
                                Adicionar categoria
                            </button>

                        </div>


                        {/* =========================
                EXERCÍCIOS
            ========================= */}

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-6">

                            <div className="flex items-start justify-between">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                        <BarbellIcon size={24} />
                                    </div>

                                    <div>

                                        <h3 className="text-lg font-bold">
                                            Exercícios
                                        </h3>

                                        <p className="mt-1 text-[10px] text-gray-600">
                                            Gerencie os exercícios disponíveis
                                        </p>

                                    </div>

                                </div>

                                <span className="rounded-md bg-purple-500/10 px-2 py-1 text-[9px] font-bold text-purple-400">
                                    {exercicios.length} exercícios
                                </span>

                            </div>


                            <div className="mt-6 space-y-3">

                                {exercicios.slice(0, 3).map((exercicio) => (

                                    <div
                                        key={exercicio.id}
                                        className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4"
                                    >

                                        <div>

                                            <p className="text-sm font-semibold">
                                                {exercicio.nome}
                                            </p>

                                            <p className="mt-1 text-[9px] text-gray-600">
                                                Categoria:{" "}
                                                {exercicio.categoria?.nome || "Sem categoria"}
                                            </p>

                                        </div>


                                        <div className="flex items-center gap-2">

                                            <button
                                                onClick={() =>
                                                    abrirEditarExercicio(exercicio)
                                                }
                                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                                title="Editar exercício"
                                            >
                                                <PencilSimpleIcon size={15} />
                                            </button>


                                            <button
                                                onClick={() =>
                                                    abrirDeletarExercicio(exercicio)
                                                }
                                                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                                title="Excluir exercício"
                                            >
                                                <TrashIcon size={15} />
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>


                            <button
                                onClick={abrirAdicionarExercicio}
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                            >
                                <PlusIcon size={15} weight="bold" />
                                Adicionar exercício
                            </button>

                        </div>

                    </div>


                    {/* =========================
            INTEGRAÇÃO FITRH
        ========================= */}

                    <div className="mt-5 rounded-xl border border-white/5 bg-[#100d16] p-6">

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-4">

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                    <UsersThreeIcon size={24} />
                                </div>

                                <div>

                                    <h3 className="text-lg font-bold">
                                        Gestão de Colaboradores
                                    </h3>

                                    <p className="mt-1 text-[10px] text-gray-600">
                                        Acesse o FitRH para gerenciar sua equipe.
                                    </p>

                                </div>

                            </div>


                            <a
                                href="LINK_DO_FITRH"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                            >
                                Acessar FitRH
                                <ArrowSquareOutIcon size={15} />
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                MODAL EXERCÍCIO
            ========================= */}

            <FormExercicios
                aberto={modalFormulario}
                exercicio={exercicioSelecionado}
                categorias={categorias}
                token={usuario.token}
                onFechar={fecharFormulario}
                onSucesso={atualizarLista}
            />


            <DeletarExercicios
                aberto={modalDeletar}
                exercicio={exercicioSelecionado}
                token={usuario.token}
                onFechar={fecharDeletar}
                onSucesso={atualizarLista}
            />


            {/* =========================
                MODAL CATEGORIA
            ========================= */}

            <FormCategorias
                aberto={modalFormularioCategoria}
                categoria={categoriaSelecionada}
                token={usuario.token}
                onFechar={fecharFormularioCategoria}
                onSucesso={atualizarLista}
            />


            <DeletarCategoria
                aberto={modalDeletarCategoria}
                categoria={categoriaSelecionada}
                token={usuario.token}
                onFechar={fecharDeletarCategoria}
                onSucesso={atualizarLista}
            />

        </main>
    );
}

export default HomeAdmin;
