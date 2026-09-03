import {
    ArrowUpRightIcon,
    CalendarBlankIcon,
    ChartLineUpIcon,
    CheckCircleIcon,
    ClockIcon,
    UserCircleIcon,
    UsersThreeIcon,
    TrendUpIcon,
    WarningCircleIcon,
    PlusIcon,
    EyeIcon,
    TrophyIcon,
    StarIcon,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

function HomeAdmin() {
    return (
        <main className="min-h-screen w-full overflow-x-hidden bg-[#08070d] text-white">

            {/* =========================
                HEADER DO DASHBOARD
            ========================= */}
            <section className="border-b border-white/5 bg-[#120c1d]">

                <div className="w-full px-10 py-10">

                    <div className="flex items-center justify-between">

                        <div>

                            <div className="flex items-center gap-2">

                                <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-purple-400">
                                    Painel Administrativo
                                </span>

                                <span className="h-1 w-1 rounded-full bg-gray-600" />

                                <span className="text-[9px] uppercase tracking-wider text-gray-600">
                                    FitGym
                                </span>

                            </div>

                            <h1 className="mt-4 text-4xl font-black tracking-tight">
                                Olá, Admin.
                                <span className="text-purple-500">
                                    {" "}Vamos acompanhar tudo?
                                </span>
                            </h1>

                            <p className="mt-3 text-sm text-gray-500">
                                Tenha uma visão geral dos alunos, treinos e
                                desempenho da sua academia.
                            </p>

                        </div>

                        <div className="flex items-center gap-3">

                            <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-gray-400 transition hover:border-purple-500/30 hover:text-white">
                                <CalendarBlankIcon size={16} />
                                Hoje
                            </button>

                            <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-xs font-bold transition hover:bg-purple-500">
                                <PlusIcon size={16} weight="bold" />
                                Nova atividade
                            </button>

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
                                    <StarIcon size={21} />
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

                        {/* ATIVOS */}
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

                                <span className="flex items-center gap-1 text-[9px] font-bold text-green-400">
                                    <TrendUpIcon size={12} />
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
                GRÁFICO + ATIVIDADES
            ========================= */}
            <section className="bg-[#09080e]">

                <div className="w-full px-10 pb-8">

                    <div className="grid grid-cols-3 gap-5">

                        {/* GRÁFICO */}
                        <div className="col-span-2 rounded-xl border border-white/5 bg-[#100d16] p-6">

                            <div className="flex items-start justify-between">

                                <div>

                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Visão geral
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold">
                                        Atividade dos alunos
                                    </h2>

                                    <p className="mt-1 text-[10px] text-gray-600">
                                        Treinos concluídos nos últimos 7 dias
                                    </p>

                                </div>

                                <button className="rounded-md border border-white/5 bg-white/[0.03] px-3 py-2 text-[9px] text-gray-500">
                                    Últimos 7 dias
                                </button>

                            </div>

                            {/* GRÁFICO */}
                            <div className="mt-8 flex h-56 items-end gap-5 border-b border-white/5 px-4">

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[42%] rounded-t-md bg-purple-500/40" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        SEG
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[63%] rounded-t-md bg-purple-500/50" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        TER
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[78%] rounded-t-md bg-purple-500/60" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        QUA
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[54%] rounded-t-md bg-purple-500/50" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        QUI
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[91%] rounded-t-md bg-purple-500" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        SEX
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[68%] rounded-t-md bg-purple-500/60" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        SÁB
                                    </span>
                                </div>

                                <div className="flex h-full flex-1 flex-col justify-end gap-2">
                                    <div className="h-[35%] rounded-t-md bg-purple-500/30" />
                                    <span className="text-center text-[8px] text-gray-600">
                                        DOM
                                    </span>
                                </div>

                            </div>

                            <div className="mt-5 flex items-center justify-between">

                                <div>
                                    <p className="text-[9px] text-gray-600">
                                        Total da semana
                                    </p>

                                    <p className="mt-1 text-xl font-black">
                                        3.842 treinos
                                    </p>
                                </div>

                                <div className="text-right">

                                    <p className="text-[9px] text-gray-600">
                                        Média diária
                                    </p>

                                    <p className="mt-1 text-xl font-black text-purple-400">
                                        548
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* ATIVIDADES */}
                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-6">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Em tempo real
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold">
                                        Atividades recentes
                                    </h2>
                                </div>

                                <ClockIcon
                                    size={19}
                                    className="text-purple-500"
                                />

                            </div>

                            <div className="mt-6 space-y-5">

                                <div className="flex gap-3">

                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                                        <CheckCircleIcon
                                            size={16}
                                            weight="fill"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] font-semibold">
                                            Treino concluído
                                        </p>

                                        <p className="mt-1 truncate text-[9px] text-gray-600">
                                            Ana completou Costas & Bíceps
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-700">
                                            há 5 minutos
                                        </p>
                                    </div>

                                </div>

                                <div className="flex gap-3">

                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                        <UserCircleIcon size={16} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] font-semibold">
                                            Novo aluno
                                        </p>

                                        <p className="mt-1 truncate text-[9px] text-gray-600">
                                            Carlos entrou para a academia
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-700">
                                            há 18 minutos
                                        </p>
                                    </div>

                                </div>

                                <div className="flex gap-3">

                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
                                        <WarningCircleIcon size={16} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] font-semibold">
                                            Meta não atingida
                                        </p>

                                        <p className="mt-1 truncate text-[9px] text-gray-600">
                                            João está há 8 dias sem treinar
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-700">
                                            há 32 minutos
                                        </p>
                                    </div>

                                </div>

                                <div className="flex gap-3">

                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                        <StarIcon size={16} />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] font-semibold">
                                            Novo treino criado
                                        </p>

                                        <p className="mt-1 truncate text-[9px] text-gray-600">
                                            Treino de hipertrofia cadastrado
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-700">
                                            há 1 hora
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <button className="mt-6 w-full rounded-lg border border-white/5 bg-white/[0.02] py-2.5 text-[9px] font-semibold text-gray-500 transition hover:bg-purple-500/10 hover:text-purple-300">
                                Ver todas as atividades
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================
                ALUNOS + ACESSOS
            ========================= */}
            <section className="bg-[#0d0a12]">

                <div className="w-full px-10 py-10">

                    <div className="grid grid-cols-4 gap-5">

                        {/* ALUNOS RECENTES */}
                        <div className="col-span-3 rounded-xl border border-white/5 bg-[#100d16] p-6">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Base de alunos
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold">
                                        Alunos recentes
                                    </h2>

                                </div>

                                <Link
                                    to="/alunos"
                                    className="flex items-center gap-1.5 text-[9px] font-bold text-purple-400 transition hover:text-purple-300"
                                >
                                    Ver todos
                                    <ArrowUpRightIcon size={13} />
                                </Link>

                            </div>

                            <div className="mt-6">

                                {/* Cabeçalho */}
                                <div className="grid grid-cols-5 border-b border-white/5 px-4 pb-3">

                                    <span className="col-span-2 text-[8px] uppercase tracking-wider text-gray-700">
                                        Aluno
                                    </span>

                                    <span className="text-[8px] uppercase tracking-wider text-gray-700">
                                        Plano
                                    </span>

                                    <span className="text-[8px] uppercase tracking-wider text-gray-700">
                                        Status
                                    </span>

                                    <span className="text-right text-[8px] uppercase tracking-wider text-gray-700">
                                        Último treino
                                    </span>

                                </div>

                                {/* ALUNO 1 */}
                                <div className="grid grid-cols-5 items-center border-b border-white/5 px-4 py-4">

                                    <div className="col-span-2 flex items-center gap-3">

                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-[10px] font-bold text-purple-400">
                                            AM
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-bold">
                                                Ana Martins
                                            </p>

                                            <p className="mt-1 text-[8px] text-gray-600">
                                                ana@email.com
                                            </p>
                                        </div>

                                    </div>

                                    <span className="text-[9px] text-gray-500">
                                        Premium
                                    </span>

                                    <span className="flex items-center gap-1 text-[9px] text-green-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        Ativo
                                    </span>

                                    <span className="text-right text-[9px] text-gray-600">
                                        Hoje, 14:32
                                    </span>

                                </div>

                                {/* ALUNO 2 */}
                                <div className="grid grid-cols-5 items-center border-b border-white/5 px-4 py-4">

                                    <div className="col-span-2 flex items-center gap-3">

                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-[10px] font-bold text-purple-400">
                                            CS
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-bold">
                                                Carlos Souza
                                            </p>

                                            <p className="mt-1 text-[8px] text-gray-600">
                                                carlos@email.com
                                            </p>
                                        </div>

                                    </div>

                                    <span className="text-[9px] text-gray-500">
                                        Basic
                                    </span>

                                    <span className="flex items-center gap-1 text-[9px] text-green-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        Ativo
                                    </span>

                                    <span className="text-right text-[9px] text-gray-600">
                                        Hoje, 13:18
                                    </span>

                                </div>

                                {/* ALUNO 3 */}
                                <div className="grid grid-cols-5 items-center border-b border-white/5 px-4 py-4">

                                    <div className="col-span-2 flex items-center gap-3">

                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-[10px] font-bold text-purple-400">
                                            JO
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-bold">
                                                João Oliveira
                                            </p>

                                            <p className="mt-1 text-[8px] text-gray-600">
                                                joao@email.com
                                            </p>
                                        </div>

                                    </div>

                                    <span className="text-[9px] text-gray-500">
                                        Premium
                                    </span>

                                    <span className="flex items-center gap-1 text-[9px] text-yellow-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                        Atenção
                                    </span>

                                    <span className="text-right text-[9px] text-gray-600">
                                        8 dias atrás
                                    </span>

                                </div>

                                {/* ALUNO 4 */}
                                <div className="grid grid-cols-5 items-center px-4 py-4">

                                    <div className="col-span-2 flex items-center gap-3">

                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10 text-[10px] font-bold text-purple-400">
                                            LS
                                        </div>

                                        <div>
                                            <p className="text-[10px] font-bold">
                                                Larissa Silva
                                            </p>

                                            <p className="mt-1 text-[8px] text-gray-600">
                                                larissa@email.com
                                            </p>
                                        </div>

                                    </div>

                                    <span className="text-[9px] text-gray-500">
                                        Premium
                                    </span>

                                    <span className="flex items-center gap-1 text-[9px] text-green-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        Ativo
                                    </span>

                                    <span className="text-right text-[9px] text-gray-600">
                                        Ontem, 19:42
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* ACESSOS RÁPIDOS */}
                        <div className="rounded-xl border border-purple-500/20 bg-[#120d1b] p-6">

                            <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                Administração
                            </p>

                            <h2 className="mt-1 text-lg font-bold">
                                Acessos rápidos
                            </h2>

                            <div className="mt-6 space-y-3">

                                <Link
                                    to="/alunos"
                                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/30 hover:bg-purple-500/5"
                                >

                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                        <UsersThreeIcon size={16} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold">
                                            Gerenciar alunos
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-600">
                                            1.248 cadastrados
                                        </p>
                                    </div>

                                    <ArrowUpRightIcon
                                        size={14}
                                        className="text-gray-700 transition group-hover:text-purple-400"
                                    />

                                </Link>

                                <Link
                                    to="/treinos"
                                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/30 hover:bg-purple-500/5"
                                >

                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                        <StarIcon size={16} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold">
                                            Gerenciar treinos
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-600">
                                            84 treinos ativos
                                        </p>
                                    </div>

                                    <ArrowUpRightIcon
                                        size={14}
                                        className="text-gray-700 transition group-hover:text-purple-400"
                                    />

                                </Link>

                                <Link
                                    to="/relatorios"
                                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/30 hover:bg-purple-500/5"
                                >

                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                        <ChartLineUpIcon size={16} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold">
                                            Relatórios
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-600">
                                            Ver desempenho
                                        </p>
                                    </div>

                                    <ArrowUpRightIcon
                                        size={14}
                                        className="text-gray-700 transition group-hover:text-purple-400"
                                    />

                                </Link>

                                <Link
                                    to="/perfil"
                                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition hover:border-purple-500/30 hover:bg-purple-500/5"
                                >

                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                        <UserCircleIcon size={16} />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold">
                                            Meu perfil
                                        </p>

                                        <p className="mt-1 text-[8px] text-gray-600">
                                            Configurações
                                        </p>
                                    </div>

                                    <EyeIcon
                                        size={14}
                                        className="text-gray-700 transition group-hover:text-purple-400"
                                    />

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================
                RESUMO FINAL
            ========================= */}
            <section className="border-t border-white/5 bg-[#09070d]">

                <div className="w-full px-10 py-8">

                    <div className="grid grid-cols-3 gap-5">

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Taxa de retenção
                                    </p>

                                    <p className="mt-2 text-2xl font-black">
                                        92,8%
                                    </p>
                                </div>

                                <TrendUpIcon
                                    size={24}
                                    className="text-green-400"
                                />

                            </div>

                            <div className="mt-4 h-1.5 rounded-full bg-white/5">
                                <div className="h-full w-[93%] rounded-full bg-green-500" />
                            </div>

                        </div>

                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Metas alcançadas
                                    </p>

                                    <p className="mt-2 text-2xl font-black">
                                        76,4%
                                    </p>
                                </div>

                                <TrophyIcon
                                    size={24}
                                    weight="fill"
                                    className="text-purple-500"
                                />

                            </div>

                            <div className="mt-4 h-1.5 rounded-full bg-white/5">
                                <div className="h-full w-[76%] rounded-full bg-purple-500" />
                            </div>

                        </div>

                        <div className="rounded-xl border border-purple-500/20 bg-[#120d1b] p-5">

                            <div className="flex items-center justify-between">

                                <div>
                                    <p className="text-[9px] uppercase tracking-widest text-gray-600">
                                        Satisfação dos alunos
                                    </p>

                                    <p className="mt-2 text-2xl font-black">
                                        94,8%
                                    </p>
                                </div>

                                <CheckCircleIcon
                                    size={24}
                                    weight="fill"
                                    className="text-purple-500"
                                />

                            </div>

                            <div className="mt-4 h-1.5 rounded-full bg-white/5">
                                <div className="h-full w-[95%] rounded-full bg-purple-500" />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default HomeAdmin;