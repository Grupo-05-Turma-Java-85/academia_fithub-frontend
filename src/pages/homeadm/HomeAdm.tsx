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
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

function HomeAdmin() {
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
                                    12 categorias
                                </span>

                            </div>

                            <div className="mt-6 space-y-3">

                                {/* CATEGORIA 1 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Peito
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            8 exercícios
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar categoria"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir categoria"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                                {/* CATEGORIA 2 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Costas
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            10 exercícios
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar categoria"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir categoria"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                                {/* CATEGORIA 3 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Pernas
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            14 exercícios
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar categoria"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir categoria"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                            <Link
                                to="/categorias"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                            >
                                <PlusIcon size={15} weight="bold" />
                                Gerenciar categorias
                            </Link>

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
                                    84 exercícios
                                </span>

                            </div>

                            <div className="mt-6 space-y-3">

                                {/* EXERCÍCIO 1 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Supino reto
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            Categoria: Peito
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar exercício"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir exercício"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                                {/* EXERCÍCIO 2 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Puxada frontal
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            Categoria: Costas
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar exercício"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir exercício"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                                {/* EXERCÍCIO 3 */}
                                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-4">

                                    <div>

                                        <p className="text-sm font-semibold">
                                            Agachamento
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            Categoria: Pernas
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-2">

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                                            title="Editar exercício"
                                        >
                                            <PencilSimpleIcon size={15} />
                                        </button>

                                        <button
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                                            title="Excluir exercício"
                                        >
                                            <TrashIcon size={15} />
                                        </button>

                                    </div>

                                </div>

                            </div>

                            <Link
                                to="/exercicios"
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                            >
                                <PlusIcon size={15} weight="bold" />
                                Gerenciar exercícios
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================
                FOOTER
            ========================= */}
            <footer className="border-t border-white/5 bg-[#08070d]">

                <div className="flex items-center justify-between px-10 py-6">

                    <p className="text-[9px] uppercase tracking-widest text-gray-700">
                        FitGym • Painel Administrativo
                    </p>

                    <Link
                        to="/perfil"
                        className="flex items-center gap-2 text-[9px] font-semibold text-gray-600 transition hover:text-purple-400"
                    >
                        <UserCircleIcon size={15} />
                        Meu perfil
                    </Link>

                </div>

            </footer>

        </main>
    );
}

export default HomeAdmin;