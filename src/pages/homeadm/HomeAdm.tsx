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

        <main className="relative min-h-screen w-full overflow-x-hidden bg-background py-24 sm:py-28 lg:py-30 text-white">

            {/* =========================
                GLOWS DE FUNDO
            ========================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

                <div className="absolute right-[-150px] top-[35%] h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[140px]" />

                <div className="absolute left-[35%] top-[55%] h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

                <div className="absolute bottom-[-150px] right-[20%] h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />

            </div>


            {/* =========================
                CONTEÚDO
            ========================= */}

            <div className="relative z-10">

                {/* =========================
                    HEADER
                ========================= */}

                <section className="border-b border-white/5 bg-[#120c1d]">

                    <div className="w-full px-4 py-8 sm:px-6 sm:py-9 lg:px-10 lg:py-10">

                        <div className="flex items-center justify-between">

                            <div>

                                <h1 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                                    Olá, Administrador
                                </h1>

                                <p className="mt-3 max-w-2xl text-xs leading-relaxed text-gray-500 sm:text-sm">
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

                    <div className="w-full px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-8">

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

                            {/* ALUNOS */}

                            <div className="rounded-xl border border-white/5 bg-[#100d16] p-4 transition hover:border-purple-500/20 sm:p-5">

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

                                <p className="mt-1 text-2xl font-black sm:text-3xl">
                                    1.248
                                </p>

                                <p className="mt-2 text-[9px] text-gray-600">
                                    +138 este mês
                                </p>

                            </div>


                            {/* TREINOS */}

                            <div className="rounded-xl border border-white/5 bg-[#100d16] p-4 transition hover:border-purple-500/20 sm:p-5">

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

                                <p className="mt-1 text-2xl font-black sm:text-3xl">
                                    3.842
                                </p>

                                <p className="mt-2 text-[9px] text-gray-600">
                                    nesta semana
                                </p>

                            </div>


                            {/* ALUNOS ATIVOS */}

                            <div className="rounded-xl border border-white/5 bg-[#100d16] p-4 transition hover:border-purple-500/20 sm:p-5">

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

                                <p className="mt-1 text-2xl font-black sm:text-3xl">
                                    876
                                </p>

                                <p className="mt-2 text-[9px] text-gray-600">
                                    70,2% da base
                                </p>

                            </div>


                            {/* PERFORMANCE */}

                            <div className="rounded-xl border border-purple-500/20 bg-[#120d1b] p-4 sm:p-5">

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

                                <p className="mt-1 text-2xl font-black sm:text-3xl">
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

                    <div className="w-full px-4 pb-8 sm:px-6 sm:pb-9 lg:px-10 lg:pb-10">

                        <div className="mb-6">

                            <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                Administração
                            </p>

                            <h2 className="mt-1 text-xl font-black sm:text-2xl">
                                Gerenciamento
                            </h2>

                            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                                Crie, edite e remova categorias e exercícios.
                            </p>

                        </div>


                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                            {/* =========================
                                CATEGORIAS
                            ========================= */}

                            <div className="rounded-xl border border-purple-500/30 bg-[#100d16] p-4 shadow-lg shadow-purple-950/10 transition hover:border-purple-500/50 sm:p-6">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                            <FolderIcon size={24} />
                                        </div>

                                        <div className="min-w-0">

                                            <h3 className="text-base font-bold sm:text-lg">
                                                Categorias
                                            </h3>

                                            <p className="mt-1 text-[10px] text-gray-600">
                                                Organize os exercícios por categoria
                                            </p>

                                        </div>

                                    </div>

                                    <span className="w-fit shrink-0 rounded-md bg-purple-500/10 px-2 py-1 text-[9px] font-bold text-purple-400">
                                        {categorias.length} categorias
                                    </span>

                                </div>


                                {/* Container com scroll interno */}

                                <div className="mt-5 max-h-72 space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-500/20 hover:scrollbar-thumb-purple-500/40 sm:mt-6">

                                    {categorias.map((categoria) => {

                                        const quantidadeExercicios =
                                            exercicios.filter(
                                                (exercicio) =>
                                                    exercicio.categoria?.id === categoria.id
                                            ).length;

                                        return (

                                            <div
                                                key={categoria.id}
                                                className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/20 sm:p-4"
                                            >

                                                <div className="min-w-0">

                                                    <p className="break-words text-sm font-semibold">
                                                        {categoria.nome}
                                                    </p>

                                                    <p className="mt-1 break-words text-[9px] text-gray-600">
                                                        {quantidadeExercicios} exercícios
                                                    </p>

                                                </div>


                                                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

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
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500 sm:text-xs"
                                >
                                    <PlusIcon size={15} weight="bold" />
                                    Adicionar categoria
                                </button>

                            </div>


                            {/* =========================
                                EXERCÍCIOS
                            ========================= */}

                            <div className="rounded-xl border border-purple-500/30 bg-[#100d16] p-4 shadow-lg shadow-purple-950/10 transition hover:border-purple-500/50 sm:p-6">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                            <BarbellIcon size={24} />
                                        </div>

                                        <div className="min-w-0">

                                            <h3 className="text-base font-bold sm:text-lg">
                                                Exercícios
                                            </h3>

                                            <p className="mt-1 text-[10px] text-gray-600">
                                                Gerencie os exercícios disponíveis
                                            </p>

                                        </div>

                                    </div>

                                    <span className="w-fit shrink-0 rounded-md bg-purple-500/10 px-2 py-1 text-[9px] font-bold text-purple-400">
                                        {exercicios.length} exercícios
                                    </span>

                                </div>


                                {/* Container com scroll interno */}

                                <div className="mt-5 max-h-72 space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-purple-500/20 hover:scrollbar-thumb-purple-500/40 sm:mt-6">

                                    {exercicios.map((exercicio) => (

                                        <div
                                            key={exercicio.id}
                                            className="flex items-center justify-between gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/20 sm:p-4"
                                        >

                                            <div className="min-w-0">

                                                <p className="break-words text-sm font-semibold">
                                                    {exercicio.nome}
                                                </p>

                                                <p className="mt-1 break-words text-[9px] text-gray-600">
                                                    Categoria:{" "}
                                                    {exercicio.categoria?.nome || "Sem categoria"}
                                                </p>

                                            </div>


                                            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">

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
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500 sm:text-xs"
                                >
                                    <PlusIcon size={15} weight="bold" />
                                    Adicionar exercício
                                </button>

                            </div>

                        </div>


                        {/* =========================
                            INTEGRAÇÃO FITRH
                        ========================= */}

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-[#100d16] p-4 transition hover:border-purple-500/50 sm:p-6">

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                                        <UsersThreeIcon size={24} />
                                    </div>

                                    <div className="min-w-0">

                                        <h3 className="text-base font-bold sm:text-lg">
                                            Gestão de Colaboradores
                                        </h3>

                                        <p className="mt-1 text-[10px] leading-relaxed text-gray-600 sm:text-xs">
                                            Acesse o FitRH para gerenciar sua equipe.
                                        </p>

                                    </div>

                                </div>


                                <a
                                    href="https://rh-frontend-five.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-[10px] font-bold transition hover:bg-purple-500 sm:w-auto sm:text-xs"
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

            </div>

        </main>
    );
}

export default HomeAdmin;