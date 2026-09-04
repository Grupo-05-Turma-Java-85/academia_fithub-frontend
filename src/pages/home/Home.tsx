import {
    ArrowRightIcon,
    CheckIcon,
    BarbellIcon,
    ChartLineUpIcon,
    GaugeIcon,
    UsersThreeIcon,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import { useContext, useRef } from "react";

import VideoHero from "../../components/videohero/VideoHero";

import { CartContext } from "../../contexts/CartContext";
import Cart from "../../components/carrinho/cart/Cart";

function Home() {
    const { adicionarPlano } = useContext(CartContext);

    const meuAlvoRef = useRef<HTMLElement | null>(null);

    const executarRolagem = () => {
        meuAlvoRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const plans = [
        {
            id: 1,
            name: "Fit",
            description: "Para quem quer começar a treinar.",
            price: 59.9,
            features: [
                "Acesso aos treinos",
                "Histórico de treinos",
                "Acompanhamento de evolução",
            ],
        },
        {
            id: 2,
            name: "Performance",
            description: "Para quem quer acelerar seus resultados.",
            price: 89.9,
            popular: true,
            features: [
                "Todos os treinos",
                "Treinos personalizados",
                "Métricas de desempenho",
                "Acompanhamento de evolução",
            ],
        },
        {
            id: 3,
            name: "Black",
            description: "Para quem busca máxima performance.",
            price: 129.9,
            features: [
                "Tudo do Performance",
                "Acompanhamento avançado",
                "Análises detalhadas",
                "Suporte prioritário",
            ],
        },
    ];

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

    return (
        <div className="min-h-screen bg-purple-50 text-white">

            {/* HERO */}
            <section className="relative h-[calc(100vh-80px)] min-h-[600px] max-h-[900px] overflow-hidden sm:min-h-[650px]">

                {/* VÍDEO */}
                <div className="absolute inset-0">
                    <VideoHero />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/55" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#08060D] via-transparent to-black/30" />

                {/* GLOW ROXO */}
                <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-700/20 blur-[100px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] lg:blur-[130px]" />

                {/* CONTEÚDO */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center px-5 sm:px-8 lg:px-10 xl:px-16">

                    <div className="max-w-[760px]">

                        {/* TÍTULO */}
                        <h1 className="max-w-[780px] text-4xl font-black leading-[1] tracking-[-0.035em] sm:text-5xl md:text-6xl xl:text-[76px]">

                            Treine.
                            <br />

                            Supere seus
                            <br />

                            <span className="text-purple-500">
                                limites.
                            </span>

                        </h1>

                        {/* DESCRIÇÃO */}
                        <p className="mt-5 max-w-[650px] text-base leading-7 text-zinc-200 sm:mt-6 sm:text-lg sm:leading-8 xl:mt-7 xl:text-xl">

                            Uma experiência completa para você treinar,
                            acompanhar sua evolução e transformar seus
                            objetivos em resultados.

                        </p>

                        {/* BOTÕES */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">

                            <button
                                onClick={executarRolagem}
                                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-purple-600 px-6 py-4 font-bold shadow-xl shadow-purple-950/30 transition duration-300 hover:-translate-y-1 hover:bg-purple-500 sm:px-8"
                            >

                              Ver planos

                                <ArrowRightIcon
                                    size={21}
                                    weight="bold"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />                              
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* BENEFÍCIOS */}
            <section
                id="beneficios"
                className="border-t border-zinc-900 bg-[#0B0911] py-16 sm:py-20 lg:py-28"
            >

                <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-16">

                    <div className="flex items-end justify-between gap-12">

                        <div className="max-w-[700px]">

                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 sm:text-sm">
                                Por que Fit Gym?
                            </span>

                            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
                                Muito mais que um treino.
                            </h2>

                        </div>

                    </div>

                    {/* CARDS */}
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    className="group min-h-[250px] rounded-3xl border border-zinc-800 bg-[#100D17] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-950/10 sm:min-h-[270px] sm:p-7 lg:min-h-[290px] lg:p-8"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-500 transition duration-300 group-hover:bg-purple-600 group-hover:text-white sm:h-16 sm:w-16">

                                        <Icon
                                            size={32}
                                            weight="duotone"
                                        />

                                    </div>

                                    <h3 className="mt-6 text-lg font-bold sm:mt-8 sm:text-xl">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-3 max-w-[300px] text-sm leading-7 text-zinc-500 sm:mt-4">
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
                ref={meuAlvoRef}
                id="planos"
                className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
            >

                {/* GLOW */}
                <div className="pointer-events-none absolute -left-72 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-700/10 blur-[100px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px] lg:blur-[130px]" />

                <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10 xl:px-16">

                    {/* CABEÇALHO */}
                    <div className="mx-auto max-w-[750px] text-center">

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 sm:text-sm">
                            Planos
                        </span>

                        <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-4xl md:text-5xl xl:text-6xl">
                            Escolha como você quer evoluir.
                        </h2>

                    </div>

                    {/* PLANOS */}
                    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">

                        {plans.map((plan) => (

                            <div
                                key={plan.name}
                                className={`relative flex min-h-[500px] flex-col rounded-3xl border p-6 sm:min-h-[520px] sm:p-8 lg:p-10 ${
                                    plan.popular
                                        ? "border-purple-500 bg-purple-900/[0.08] text-black shadow-2xl shadow-purple-950/20"
                                        : "border-zinc-800 bg-[#100D17]"
                                }`}
                            >

                                {/* MAIS ESCOLHIDO */}
                                {plan.popular && (
                                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-purple-600 px-4 py-2 text-[10px] font-black uppercase tracking-wider text-white sm:px-6 sm:text-xs">
                                        Mais escolhido
                                    </div>
                                )}

                                <h3 className="text-2xl font-black sm:text-3xl">
                                    {plan.name}
                                </h3>

                                <p className="mt-3 max-w-[350px] text-sm leading-6 text-zinc-500">
                                    {plan.description}
                                </p>

                                {/* PREÇO */}
                                <div className="mt-7 flex items-end sm:mt-9">

                                    <span className="mb-2 text-sm text-zinc-500">
                                        R$
                                    </span>

                                    <span className="ml-2 text-5xl font-black tracking-tight sm:text-6xl">
                                        {plan.price.toLocaleString("pt-BR", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </span>

                                    <span className="mb-2 ml-2 text-sm text-zinc-500">
                                        /mês
                                    </span>

                                </div>

                                <div className="my-6 h-px bg-zinc-800 sm:my-8" />

                                {/* BENEFÍCIOS DO PLANO */}
                                <ul className="flex flex-1 flex-col gap-4 sm:gap-5">

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
                                <button
                                    onClick={() => adicionarPlano(plan)}
                                    className={`mt-8 flex items-center justify-center rounded-xl px-6 py-4 font-bold transition duration-300 sm:mt-10 ${
                                        plan.popular
                                            ? "bg-purple-600 text-white hover:bg-purple-500"
                                            : "border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/5 hover:text-purple-400"
                                    }`}
                                >
                                    Escolher plano
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section className="relative overflow-hidden bg-purple-50 py-10 sm:py-12">

                {/* GLOW */}
                <div className="pointer-events-none mt-40 absolute left-1/2 top-1/2 h-[350px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[130px]" />

                <div className="relative z-10 mx-auto max-w-[900px] px-10 mb-10 text-center">

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 sm:text-sm">
                        Sua jornada começa aqui
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-black sm:text-4xl md:text-5xl xl:text-6xl">
                        Pronto para alcançar seu próximo nível?
                    </h2>

                    <Link
                        to="/treinos"
                        className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-7 py-4 font-bold shadow-xl shadow-purple-950/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-500 sm:mt-10 sm:w-auto sm:px-9"
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

            <Cart />

        </div>
    );
}

export default Home;