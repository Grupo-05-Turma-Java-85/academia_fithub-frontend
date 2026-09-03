import {
    ArrowRightIcon,
    CheckIcon,
    BarbellIcon,
    ChartLineUpIcon,
    GaugeIcon,
    UsersThreeIcon,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";

import VideoHero from "../../components/videohero/VideoHero";

function Home() {
    const benefits = [
        {
            icon: BarbellIcon,
            title: "Treinos completos",
            description:
                "Treinos para diferentes objetivos, níveis e estilos de treino.",
        },
        {
            icon: ChartLineUpIcon,
            title: "Acompanhe sua evolução",
            description:
                "Visualize seu desempenho e acompanhe cada etapa da sua evolução.",
        },
        {
            icon: GaugeIcon,
            title: "Mais performance",
            description:
                "Tenha mais foco, consistência e estratégias para alcançar seus objetivos.",
        },
        {
            icon: UsersThreeIcon,
            title: "Para todos os níveis",
            description:
                "Do iniciante ao avançado, encontre o treino ideal para você.",
        },
    ];

    const plans = [
        {
            name: "Fit",
            description: "Para quem quer começar a treinar.",
            price: "59,90",
            features: [
                "Acesso aos treinos",
                "Histórico de treinos",
                "Acompanhamento de evolução",
            ],
        },
        {
            name: "Performance",
            description: "Para quem quer acelerar seus resultados.",
            price: "89,90",
            popular: true,
            features: [
                "Todos os treinos",
                "Treinos personalizados",
                "Métricas de desempenho",
                "Acompanhamento de evolução",
            ],
        },
        {
            name: "Black",
            description: "Para quem busca máxima performance.",
            price: "129,90",
            features: [
                "Tudo do Performance",
                "Acompanhamento avançado",
                "Análises detalhadas",
                "Suporte prioritário",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-purple-50 text-white">

            {/* HERO */}
            <section className="relative h-[calc(100vh-80px)] min-h-[680px] max-h-[900px] overflow-hidden">

                {/* VÍDEO */}
                <div className="absolute inset-0">
                    <VideoHero />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08060D] via-transparent to-black/30" />

                {/* GLOW ROXO */}
                <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-700/20 blur-[130px]" />

                {/* CONTEÚDO */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center px-10 xl:px-16">

                    <div className="max-w-[760px]">

                        {/* TÍTULO */}
                        <h1 className="max-w-[780px] text-6xl font-black leading-[0.98] tracking-[-0.035em] xl:text-[76px]">

                            Treine.
                            <br />

                            Supere seus
                            <br />

                            <span className="text-purple-500">
                                limites.
                            </span>

                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="mt-7 max-w-[650px] text-lg leading-8 text-zinc-200 xl:text-xl">

                            Uma experiência completa para você treinar,
                            acompanhar sua evolução e transformar seus
                            objetivos em resultados.

                        </p>

                        {/* BOTÕES */}
                        <div className="mt-9 flex items-center gap-4">

                            <Link
                                to="/treinos"
                                className="group inline-flex items-center gap-3 rounded-xl bg-purple-600 px-8 py-4 font-bold shadow-xl shadow-purple-950/30 transition duration-300 hover:-translate-y-1 hover:bg-purple-500"
                            >

                                Começar agora

                                <ArrowRightIcon
                                    size={21}
                                    weight="bold"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />

                            </Link>

                            <a
                                href="#planos"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-8 py-4 font-bold backdrop-blur-md transition duration-300 hover:border-purple-400 hover:text-purple-400"
                            >
                                Ver planos
                            </a>

                        </div>

                    </div>

                </div>


            </section>

            {/* BENEFÍCIOS */}
            <section
                id="beneficios"
                className="border-t border-zinc-900 bg-[#0B0911] py-28"
            >

                <div className="mx-auto max-w-[1600px] px-10 xl:px-16">

                    <div className="flex items-end justify-between gap-12">

                        <div className="max-w-[700px]">

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-500">
                                Por que Fit Gym?
                            </span>

                            <h2 className="mt-4 text-5xl font-black leading-tight tracking-tight xl:text-6xl">
                                Muito mais que um treino.
                            </h2>

                        </div>

                    </div>

                    {/* CARDS */}
                    <div className="mt-16 grid grid-cols-4 gap-6">

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    className="group min-h-[290px] rounded-3xl border border-zinc-800 bg-[#100D17] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/10"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">

                                        <Icon
                                            size={32}
                                            weight="duotone"
                                        />

                                    </div>

                                    <h3 className="mt-8 text-xl font-bold">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-4 max-w-[300px] text-sm leading-7 text-zinc-500">
                                        {benefit.description}
                                    </p>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>

            {/* PLANOS */}
            <section
                id="planos"
                className="relative overflow-hidden py-28"
            >

                {/* GLOW */}
                <div className="pointer-events-none absolute -left-72 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-purple-700/10 blur-[130px]" />

                <div className="relative z-10 mx-auto max-w-[1600px] px-10 xl:px-16">

                    {/* CABEÇALHO */}
                    <div className="mx-auto max-w-[750px] text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-500">
                            Planos
                        </span>

                        <h2 className="mt-4 text-5xl font-black tracking-tight text-black xl:text-6xl">
                            Escolha como você quer evoluir.
                        </h2>

                    </div>

                    {/* PLANOS */}
                    <div className="mt-16 grid grid-cols-3 gap-7">

                        {plans.map((plan) => (

                            <div
                                key={plan.name}
                                className={`relative flex min-h-[520px] flex-col rounded-3xl border p-10 ${
                                    plan.popular
                                        ? "border-purple-500 bg-purple-900/[0.08] text-black shadow-2xl shadow-purple-950/20"
                                        : "border-zinc-800 bg-[#100D17]"
                                }`}
                            >

                                {/* MAIS ESCOLHIDO */}
                                {plan.popular && (
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-purple-600  text-white px-6 py-2 text-xs font-black uppercase tracking-wider">
                                        Mais escolhido
                                    </div>
                                )}

                                <h3 className="text-3xl font-black">
                                    {plan.name}
                                </h3>

                                <p className={"mt-3 max-w-[350px] text-sm leading-6 text-zinc-500"}>
                                    
                                    {plan.description}
                                </p>

                                {/* PREÇO */}
                                <div className="mt-9 flex items-end">

                                    <span className="mb-2 text-sm text-zinc-500">
                                        R$
                                    </span>

                                    <span className="ml-2 text-6xl font-black tracking-tight">
                                        {plan.price}
                                    </span>

                                    <span className="mb-2 ml-2 text-sm text-zinc-500">
                                        /mês
                                    </span>

                                </div>

                                <div className="my-8 h-px bg-zinc-800" />

                                {/* BENEFÍCIOS DO PLANO */}
                                <ul className="flex flex-1 flex-col gap-5">

                                    {plan.features.map((feature) => (

                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-purple-700"
                                        >

                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-500">

                                                <CheckIcon
                                                    size={14}
                                                    weight="bold"
                                                />

                                            </span>

                                            {feature}

                                        </li>

                                    ))}

                                </ul>

                                {/* BOTÃO */}
                                <Link
                                    to="/login"
                                    className={`mt-10 flex items-center justify-center rounded-xl px-6 py-4 font-bold transition duration-300 ${
                                        plan.popular
                                            ? "bg-purple-600 text-white hover:bg-purple-500"
                                            : "border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/5 hover:text-purple-400"
                                    }`}
                                >
                                    Escolher plano
                                </Link>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section className="relative overflow-hidden bg-purple-50 py-10">

                {/* GLOW */}
                <div className="pointer-events-none mt-40 absolute left-1/2 top-1/2 h-[350px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[130px]" />

                <div className="relative z-10 mx-auto max-w-[900px] px-10 mb-10 text-center">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-500">
                        Sua jornada começa aqui
                    </span>

                    <h2 className="mt-5 text-5xl font-black leading-tight text-black tracking-tight xl:text-6xl">
                        Pronto para alcançar seu próximo nível?
                    </h2>

                    <Link
                        to="/treinos"
                        className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-purple-600 px-9 py-4 font-bold shadow-xl shadow-purple-950/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-500"
                    >

                        Começar minha jornada

                        <ArrowRightIcon
                            size={21}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                    </Link>

                </div>

            </section>

        </div>
    );
}

export default Home;