import {
    CalendarBlankIcon,
    CheckCircleIcon,
    ClockIcon,
    FireIcon,
    PlayCircleIcon,
    TrendUpIcon,
    TrophyIcon,

} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

function HomeAluno() {
    return (
        <main className="min-h-screen w-full py-20 overflow-x-hidden bg-[#08070d] text-white">

            {/* ================= CRONOGRAMA ================= */}
            <section className="bg-[#09080e]">

                <div className="mx-auto w-full max-w-7xl px-8 py-14">

                    <div className="flex items-end justify-between">

                        <div>

                            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
                                Sua rotina
                            </span>

                            <h2 className="mt-2 text-2xl font-black">
                                Cronograma Semanal
                                <span className="text-gray-500">
                                    {" "} & Rotina de Treino
                                </span>
                            </h2>

                            <p className="mt-2 text-xs text-gray-500">
                                Organize seus treinos e mantenha sua consistência.
                            </p>

                        </div>

                        <button className="flex items-center gap-2 rounded-lg border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-[10px] font-bold text-purple-300">
                            <CalendarBlankIcon size={14} />
                            Visualizar calendário
                        </button>

                    </div>

                    {/* DIAS */}
                    <div className="mt-7 flex items-center gap-2 border-b border-white/5 pb-3">

                        {[
                            "SEG",
                            "TER",
                            "QUA",
                            "QUI",
                            "SEX",
                            "SÁB",
                            "DOM",
                        ].map((dia, index) => (

                            <button
                                key={dia}
                                className={`rounded-md px-5 py-2 text-[10px] font-bold ${index === 0
                                        ? "bg-purple-600 text-white"
                                        : "bg-white/[0.03] text-gray-500 hover:bg-purple-500/10 hover:text-white"
                                    }`}
                            >
                                {dia}
                            </button>

                        ))}

                    </div>

                    {/* TREINOS */}
                    <div className="mt-6 grid grid-cols-3 gap-5">

                        {/* TREINO 1 */}
                        <div className="rounded-xl border border-purple-500/20 bg-[#100d16] p-5">

                            <div className="flex items-start justify-between">

                                <div>

                                    <span className="rounded-md bg-purple-500/10 px-2 py-1 text-[8px] font-bold text-purple-400">
                                        HOJE
                                    </span>

                                    <h3 className="mt-4 text-sm font-bold">
                                        Costas & Bíceps
                                    </h3>

                                    <p className="mt-1 text-[10px] text-gray-600">
                                        Hipertrofia
                                    </p>

                                </div>

                                <span className="rounded-full bg-green-500/10 px-2 py-1 text-[8px] font-bold text-green-400">
                                    Concluído
                                </span>

                            </div>

                            <div className="mt-6 flex gap-5">

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <ClockIcon size={13} />
                                    58 min
                                </div>

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <FireIcon size={13} />
                                    420 kcal
                                </div>

                            </div>

                            <div className="mt-5 border-t border-white/5 pt-4">

                                <div className="flex items-center justify-between">

                                    <span className="text-[9px] text-gray-600">
                                        8 exercícios
                                    </span>

                                    <CheckCircleIcon
                                        size={18}
                                        weight="fill"
                                        className="text-green-500"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* TREINO 2 */}
                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5">

                            <div className="flex items-start justify-between">

                                <div>

                                    <span className="rounded-md bg-white/5 px-2 py-1 text-[8px] font-bold text-gray-500">
                                        AMANHÃ
                                    </span>

                                    <h3 className="mt-4 text-sm font-bold">
                                        Pernas Completo
                                    </h3>

                                    <p className="mt-1 text-[10px] text-gray-600">
                                        Força
                                    </p>

                                </div>

                                <span className="rounded-full bg-white/5 px-2 py-1 text-[8px] font-bold text-gray-600">
                                    Pendente
                                </span>

                            </div>

                            <div className="mt-6 flex gap-5">

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <ClockIcon size={13} />
                                    65 min
                                </div>

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <FireIcon size={13} />
                                    510 kcal
                                </div>

                            </div>

                            <div className="mt-5 border-t border-white/5 pt-4">

                                <div className="flex items-center justify-between">

                                    <span className="text-[9px] text-gray-600">
                                        10 exercícios
                                    </span>

                                    <PlayCircleIcon
                                        size={18}
                                        className="text-purple-500"
                                    />

                                </div>

                            </div>

                        </div>

                        {/* TREINO 3 */}
                        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5">

                            <div className="flex items-start justify-between">

                                <div>

                                    <span className="rounded-md bg-white/5 px-2 py-1 text-[8px] font-bold text-gray-500">
                                        QUARTA
                                    </span>

                                    <h3 className="mt-4 text-sm font-bold">
                                        Mobilidade & Cardio
                                    </h3>

                                    <p className="mt-1 text-[10px] text-gray-600">
                                        Condicionamento
                                    </p>

                                </div>

                                <span className="rounded-full bg-white/5 px-2 py-1 text-[8px] font-bold text-gray-600">
                                    Pendente
                                </span>

                            </div>

                            <div className="mt-6 flex gap-5">

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <ClockIcon size={13} />
                                    42 min
                                </div>

                                <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
                                    <FireIcon size={13} />
                                    320 kcal
                                </div>

                            </div>

                            <div className="mt-5 border-t border-white/5 pt-4">

                                <div className="flex items-center justify-between">

                                    <span className="text-[9px] text-gray-600">
                                        6 exercícios
                                    </span>

                                    <PlayCircleIcon
                                        size={18}
                                        className="text-purple-500"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= PROGRESSO ================= */}
            <section className="bg-[#0d0a12]">

                <div className="mx-auto w-full max-w-7xl px-8 py-16">

                    <div className="mx-auto text-center">

                        <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
                            Sua evolução
                        </span>

                        <h2 className="mt-3 text-3xl font-black">
                            Realidade vs. Expectativa:
                            <br />
                            <span className="text-purple-500">
                                Onde Você Está e Aonde Vai
                            </span>
                        </h2>

                        <p className="mt-3 text-xs leading-5 text-gray-600">
                            Compare seus resultados atuais com suas metas e
                            acompanhe visualmente sua evolução.
                        </p>

                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">

                        {/* REALIDADE */}
                        <div className="rounded-xl border border-white/5 bg-[#120e19] p-6">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-[9px] uppercase tracking-wider text-gray-600">
                                        Sua realidade atual
                                    </p>

                                    <h3 className="mt-1 text-base font-bold">
                                        Parâmetros de Entrada
                                    </h3>

                                </div>

                                <TrendUpIcon
                                    size={22}
                                    className="text-purple-500"
                                />

                            </div>

                            <div className="mt-7 space-y-6">

                                <div>

                                    <div className="flex justify-between text-[10px]">

                                        <span className="text-gray-500">
                                            Peso atual
                                        </span>

                                        <strong>
                                            56 kg
                                        </strong>

                                    </div>

                                    <div className="mt-2 h-1.5 rounded-full bg-white/5">
                                        <div className="h-full w-[65%] rounded-full bg-purple-500" />
                                    </div>

                                </div>

                                <div>

                                    <div className="flex justify-between text-[10px]">

                                        <span className="text-gray-500">
                                            Força média
                                        </span>

                                        <strong>
                                            72%
                                        </strong>

                                    </div>

                                    <div className="mt-2 h-1.5 rounded-full bg-white/5">
                                        <div className="h-full w-[72%] rounded-full bg-purple-500" />
                                    </div>

                                </div>

                                <div>

                                    <div className="flex justify-between text-[10px]">

                                        <span className="text-gray-500">
                                            Consistência
                                        </span>

                                        <strong className="text-green-400">
                                            84%
                                        </strong>

                                    </div>

                                    <div className="mt-2 h-1.5 rounded-full bg-white/5">
                                        <div className="h-full w-[84%] rounded-full bg-green-500" />
                                    </div>

                                </div>

                            </div>

                            <div className="mt-8 flex gap-2">

                                <button className="flex-1 rounded-md border border-white/5 bg-white/[0.02] py-2 text-[9px] text-gray-600">
                                    30 dias atrás
                                </button>

                                <button className="flex-1 rounded-md bg-purple-600 py-2 text-[9px] font-bold">
                                    Agora
                                </button>

                                <button className="flex-1 rounded-md border border-white/5 bg-white/[0.02] py-2 text-[9px] text-gray-600">
                                    Meta
                                </button>

                            </div>

                        </div>

                        {/* EVOLUÇÃO */}
                        <div className="rounded-xl border border-purple-500/20 bg-[#120e19] p-6">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-[9px] uppercase tracking-wider text-gray-600">
                                        Sua linha de evolução
                                    </p>

                                    <h3 className="mt-1 text-base font-bold">
                                        Próximos objetivos
                                    </h3>

                                </div>

                                <span className="rounded-full bg-green-500/10 px-2 py-1 text-[8px] font-bold text-green-400">
                                    No caminho
                                </span>

                            </div>

                            <div className="relative mt-7 space-y-5">

                                <div className="absolute left-[6px] top-2 h-[calc(100%-15px)] w-px bg-purple-500/20" />

                                <div className="relative flex gap-4">

                                    <div className="z-10 h-3.5 w-3.5 rounded-full bg-purple-600 ring-4 ring-purple-600/10" />

                                    <div>
                                        <p className="text-[10px] font-bold">
                                            Avaliação inicial
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            Seu ponto de partida
                                        </p>
                                    </div>

                                </div>

                                <div className="relative flex gap-4">

                                    <div className="z-10 h-3.5 w-3.5 rounded-full bg-purple-600 ring-4 ring-purple-600/10" />

                                    <div>
                                        <p className="text-[10px] font-bold">
                                            1º mês completo
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            +12% de evolução
                                        </p>
                                    </div>

                                </div>

                                <div className="relative flex gap-4">

                                    <div className="z-10 h-3.5 w-3.5 rounded-full bg-purple-600 ring-4 ring-purple-600/10" />

                                    <div>
                                        <p className="text-[10px] font-bold">
                                            Momento atual
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            87% da meta alcançada
                                        </p>
                                    </div>

                                </div>

                                <div className="relative flex gap-4">

                                    <div className="z-10 h-3.5 w-3.5 rounded-full border border-purple-500/50 bg-[#120e19]" />

                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400">
                                            Próxima meta
                                        </p>

                                        <p className="mt-1 text-[9px] text-gray-600">
                                            Continue treinando
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="mt-7 flex items-center justify-between rounded-lg border border-purple-500/10 bg-purple-500/5 p-3">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                                        <TrophyIcon
                                            size={16}
                                            weight="fill"
                                        />
                                    </div>

                                    <div>

                                        <p className="text-[10px] font-bold">
                                            87% Evoluído
                                        </p>

                                        <p className="text-[8px] text-gray-600">
                                            Você está indo muito bem!
                                        </p>

                                    </div>

                                </div>

                                <Link
                                    to="/perfil"
                                    className="rounded-md bg-purple-600 px-3 py-2 text-[8px] font-bold"
                                >
                                    Acompanhar
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default HomeAluno;