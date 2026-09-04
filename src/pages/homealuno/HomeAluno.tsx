import { useContext, useEffect, useMemo, useState } from "react";
import {
    ArrowRight,
    Barbell,
    CaretLeft,
    CaretRight,
    CheckCircle,
    Clock,
    Download,
    Fire,
    PencilSimple,
} from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import type Categoria from "../../models/Categoria";
import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, buscar } from "../../service/Service";

type Nivel = "INICIANTE" | "INTERMEDIARIO" | "AVANÇADO";

interface Treino {
    letra: string;
    titulo: string;
    categorias: string[];
}

type Objetivo = "Hipertrofia" | "Emagrecimento" | "Condicionamento";

const OBJETIVOS: {
    id: Objetivo;
    titulo: string;
    subtitulo: string;
}[] = [
    {
        id: "Hipertrofia",
        titulo: "Hipertrofia",
        subtitulo: "Ganho de massa",
    },
    {
        id: "Emagrecimento",
        titulo: "Emagrecimento",
        subtitulo: "Definição corporal",
    },
    {
        id: "Condicionamento",
        titulo: "Condicionamento",
        subtitulo: "Resistência e saúde",
    },
];

const TREINOS_POR_NIVEL: Record<Nivel, Treino[]> = {
    INICIANTE: [
        {
            letra: "A",
            titulo: "Pernas",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
            ],
        },
        {
            letra: "B",
            titulo: "Superior",
            categorias: [
                "Peito",
                "Costas",
                "Ombros",
                "Bíceps",
                "Tríceps",
            ],
        },
    ],

    INTERMEDIARIO: [
        {
            letra: "A",
            titulo: "Peito & Tríceps",
            categorias: ["Peito", "Tríceps"],
        },
        {
            letra: "B",
            titulo: "Costas & Bíceps",
            categorias: ["Costas", "Bíceps"],
        },
        {
            letra: "C",
            titulo: "Pernas & Abdômen",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
                "Abdômen",
            ],
        },
    ],

    "AVANÇADO": [
        {
            letra: "A",
            titulo: "Peito & Tríceps",
            categorias: ["Peito", "Tríceps"],
        },
        {
            letra: "B",
            titulo: "Costas & Bíceps",
            categorias: ["Costas", "Bíceps"],
        },
        {
            letra: "C",
            titulo: "Pernas",
            categorias: [
                "Quadríceps",
                "Posterior de Coxa",
                "Glúteos",
                "Panturrilhas",
            ],
        },
        {
            letra: "D",
            titulo: "Ombros & Abdômen",
            categorias: ["Ombros", "Abdômen"],
        },
    ],
};

export default function HomeAluno() {
    const { usuario } = useContext(AuthContext);

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [nivelSelecionado, setNivelSelecionado] = useState<
        Nivel | ""
    >("");

    const [nivelEscolhido, setNivelEscolhido] = useState<
        Nivel | ""
    >("");

    const [modalNivelAberto, setModalNivelAberto] = useState(false);

    const [objetivo, setObjetivo] =
        useState<Objetivo>("Hipertrofia");

    const [diasPorSemana, setDiasPorSemana] = useState(4);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 6000,
                stopOnInteraction: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slidesCount, setSlidesCount] = useState(0);

    // Busca as categorias da API
    useEffect(() => {
        buscar("/categorias", setCategorias, {});
    }, []);

    // Pega o nível do usuário
    useEffect(() => {
        const nivel = usuario.nivel?.toUpperCase();

        if (
            nivel === "INICIANTE" ||
            nivel === "INTERMEDIARIO" ||
            nivel === "AVANÇADO"
        ) {
            setNivelSelecionado(nivel);
        } else {
            setNivelSelecionado("");
        }
    }, [usuario.nivel]);

    // Monta os treinos de acordo com o nível
    const treinos = useMemo(() => {
        if (!nivelSelecionado) {
            return [];
        }

        return TREINOS_POR_NIVEL[nivelSelecionado];
    }, [nivelSelecionado]);

    // Configuração do Embla
    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        const updateIndex = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        setSlidesCount(emblaApi.scrollSnapList().length);

        emblaApi.on("select", updateIndex);

        updateIndex();

        return () => {
            emblaApi.off("select", updateIndex);
        };
    }, [emblaApi, treinos.length]);

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    function scrollTo(index: number) {
        emblaApi?.scrollTo(index);
    }

    // Procura uma categoria pelo nome
    function encontrarCategoria(nome: string) {
        return categorias.find(
            (categoria) =>
                categoria.nome?.trim().toLowerCase() ===
                nome.trim().toLowerCase()
        );
    }

    // Conta quantos exercícios existem naquele treino
    function quantidadeExerciciosDoTreino(treino: Treino) {
        return treino.categorias.reduce(
            (quantidade, nomeCategoria) => {
                const categoria =
                    encontrarCategoria(nomeCategoria);

                return (
                    quantidade +
                    (categoria?.exercicio?.length ?? 0)
                );
            },
            0
        );
    }

    // Salva o nível na API
    async function salvarNivel() {
        if (!nivelEscolhido) {
            return;
        }

        try {
            await atualizar(
                "/usuarios/atualizar",
                {
                    id: usuario.id,
                    foto: usuario.foto,
                    nome: usuario.nome,
                    peso: usuario.peso,
                    altura: usuario.altura,
                    dataNascimento: usuario.dataNascimento,
                    nivel: nivelEscolhido,
                    frequenciaSemanal:
                        usuario.frequenciaSemanal,
                    usuario: usuario.usuario,
                    senha: usuario.senha,
                    treinoGerado: usuario.treinoGerado,
                    tipoUsuario: usuario.tipoUsuario,
                },
                () => {},
                {
                    headers: {
                        Authorization: usuario.token,
                    },
                }
            );

            setNivelSelecionado(nivelEscolhido);

            setModalNivelAberto(false);

            setNivelEscolhido("");
        } catch (error) {
            console.error(
                "Erro ao atualizar nível:",
                error
            );
        }
    }

    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="bg-[#0B0A14] px-6 py-20 md:py-28">

                <div className="grid w-full gap-14 md:grid-cols-2 md:items-center">

                    <div>

                        <span className="inline-block rounded-full border border-violet-500/40 px-3 py-1 text-xs font-medium text-violet-300">
                            Simples. Focado. Eficiente.
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">

                            Treine certo.
                            <br />

                            Coma bem.
                            <br />

                            <span className="text-violet-500">
                                Evolua.
                            </span>

                        </h1>

                        <p className="mt-6 text-base leading-relaxed text-slate-400">
                            Organize seus treinos, acompanhe sua
                            rotina e evolua de acordo com o seu nível.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">

                            <button
                                onClick={() =>
                                    document
                                        .getElementById(
                                            "cronograma"
                                        )
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                                className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
                            >
                                Ver meu cronograma

                                <ArrowRight
                                    size={18}
                                    weight="bold"
                                />
                            </button>

                        </div>

                    </div>

                    <div className="rounded-2xl w-3xl border border-white/10 bg-white/[0.03] p-6">

                        <div className="flex items-center justify-between">

                            <span className="text-xs font-semibold tracking-wide text-violet-400">
                                SEU PERFIL
                            </span>

                            <CheckCircle
                                size={22}
                                weight="fill"
                                className="text-emerald-400"
                            />

                        </div>

                        <h3 className="mt-4 text-2xl font-bold text-white">
                            Olá, {usuario.nome || "Aluno"}!
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                            Seu cronograma é baseado nas informações
                            do seu perfil e no seu nível de treinamento.
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">

                            <div>

                                <p className="text-xs text-slate-500">
                                    Nível
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    {nivelSelecionado ||
                                        "Não definido"}
                                </p>

                            </div>

                            <div>

                                <p className="text-xs text-slate-500">
                                    Frequência
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    {usuario.frequenciaSemanal || 0}{" "}
                                    dias
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CRONOGRAMA */}
            <section
                id="cronograma"
                className="bg-[#F5F3FC] px-6 py-20"
            >

                <div className="w-full">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

                        <div>

                            <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-600">
                                Seu treinamento
                            </span>

                            <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
                                Seu Cronograma
                            </h2>

                            <p className="mt-2 text-base text-slate-500">
                                Seu treino é organizado automaticamente
                                de acordo com seu nível.
                            </p>

                        </div>

                        {nivelSelecionado && (
                            <span className="inline-block w-fit rounded-full border border-violet-200 bg-white px-4 py-1.5 text-sm font-medium text-violet-600">
                                Nível: {nivelSelecionado}
                            </span>
                        )}

                    </div>

                    {!nivelSelecionado ? (

                        <div className="mt-10 rounded-2xl border border-violet-200 bg-white p-10 text-center">

                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">

                                <Barbell
                                    size={32}
                                    weight="fill"
                                    className="text-violet-600"
                                />

                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                Seu cronograma ainda não está disponível
                            </h3>

                            <p className="mx-auto mt-3 text-sm leading-relaxed text-slate-500">
                                Deseja ter um cronograma personalizado?
                                Preencha seu nível de treinamento para
                                começarmos a montar sua rotina.
                            </p>

                            <button
                                onClick={() => {
                                    setNivelEscolhido("");
                                    setModalNivelAberto(true);
                                }}
                                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
                            >

                                <PencilSimple
                                    size={18}
                                    weight="bold"
                                />

                                Definir meu nível

                            </button>

                        </div>

                    ) : (

                        <div className="mt-8">

                            {/* EMBLA */}
                            <div className="relative">

                                <div
                                    ref={emblaRef}
                                    className="overflow-hidden"
                                >

                                    <div className="flex">

                                        {treinos.map((treino) => {

                                            const exercicios =
                                                quantidadeExerciciosDoTreino(
                                                    treino
                                                );

                                            return (

                                                <div
                                                    key={treino.letra}
                                                    className="min-w-0 flex-[0_0_100%] px-1"
                                                >

                                                    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">

                                                        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

                                                            <div className="flex items-start gap-4">

                                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-xl font-extrabold text-white">
                                                                    {
                                                                        treino.letra
                                                                    }
                                                                </div>

                                                                <div>

                                                                    <p className="text-xs font-semibold tracking-wide text-violet-600">
                                                                        TREINO{" "}
                                                                        {
                                                                            treino.letra
                                                                        }
                                                                    </p>

                                                                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                                                                        {
                                                                            treino.titulo
                                                                        }
                                                                    </h3>

                                                                    <p className="mt-1 text-sm text-slate-500">
                                                                        Foco em{" "}
                                                                        {
                                                                            treino.categorias.join(
                                                                                ", "
                                                                            )
                                                                        }
                                                                    </p>

                                                                </div>

                                                            </div>

                                                            <span className="w-fit rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
                                                                {exercicios > 0
                                                                    ? `${exercicios} exercícios`
                                                                    : "Exercícios a definir"}
                                                            </span>

                                                        </div>

                                                        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                                            {treino.categorias.map(
                                                                (
                                                                    categoriaNome
                                                                ) => {

                                                                    const categoria =
                                                                        encontrarCategoria(
                                                                            categoriaNome
                                                                        );

                                                                    return (

                                                                        <div
                                                                            key={
                                                                                categoriaNome
                                                                            }
                                                                            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                                                                        >

                                                                            <div className="flex items-center gap-3">

                                                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100">

                                                                                    <Barbell
                                                                                        size={
                                                                                            20
                                                                                        }
                                                                                        weight="bold"
                                                                                        className="text-violet-600"
                                                                                    />

                                                                                </div>

                                                                                <div>

                                                                                    <p className="text-sm font-semibold text-slate-900">
                                                                                        {
                                                                                            categoriaNome
                                                                                        }
                                                                                    </p>

                                                                                    <p className="text-xs text-slate-500">
                                                                                        {
                                                                                            categoria
                                                                                                ?.exercicio
                                                                                                ?.length ??
                                                                                            0
                                                                                        }{" "}
                                                                                        exercícios
                                                                                    </p>

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    );
                                                                }
                                                            )}

                                                        </div>

                                                        <div className="mt-8 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">

                                                            <div className="flex items-center gap-3">

                                                                <Clock
                                                                    size={20}
                                                                    className="text-violet-600"
                                                                    weight="bold"
                                                                />

                                                                <div>

                                                                    <p className="text-xs text-slate-500">
                                                                        Duração
                                                                    </p>

                                                                    <p className="text-sm font-semibold text-slate-900">
                                                                        45–60
                                                                        min
                                                                    </p>

                                                                </div>

                                                            </div>

                                                            <div className="flex items-center gap-3">

                                                                <Fire
                                                                    size={20}
                                                                    className="text-orange-500"
                                                                    weight="bold"
                                                                />

                                                                <div>

                                                                    <p className="text-xs text-slate-500">
                                                                        Intensidade
                                                                    </p>

                                                                    <p className="text-sm font-semibold text-slate-900">
                                                                        Moderada
                                                                    </p>

                                                                </div>

                                                            </div>

                                                            <div className="flex items-center gap-3">

                                                                <CheckCircle
                                                                    size={20}
                                                                    className="text-emerald-500"
                                                                    weight="bold"
                                                                />

                                                                <div>

                                                                    <p className="text-xs text-slate-500">
                                                                        Status
                                                                    </p>

                                                                    <p className="text-sm font-semibold text-slate-900">
                                                                        Planejado
                                                                    </p>

                                                                </div>

                                                            </div>

                                                        </div>

                                                        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500">

                                                            Ver exercícios

                                                            <ArrowRight
                                                                size={18}
                                                                weight="bold"
                                                            />

                                                        </button>

                                                    </div>

                                                </div>

                                            );
                                        })}

                                    </div>

                                </div>

                                {treinos.length > 1 && (
                                    <>

                                        <button
                                            onClick={scrollPrev}
                                            className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50"
                                            aria-label="Treino anterior"
                                        >

                                            <CaretLeft
                                                size={22}
                                                weight="bold"
                                            />

                                        </button>

                                        <button
                                            onClick={scrollNext}
                                            className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:bg-slate-50"
                                            aria-label="Próximo treino"
                                        >

                                            <CaretRight
                                                size={22}
                                                weight="bold"
                                            />

                                        </button>

                                    </>
                                )}

                            </div>

                            {/* BOLINHAS */}
                            {slidesCount > 1 && (
                                <div className="mt-6 flex justify-center gap-2">

                                    {Array.from({
                                        length: slidesCount,
                                    }).map((_, index) => (

                                        <button
                                            key={`carousel-dot-${index}`}
                                            onClick={() =>
                                                scrollTo(index)
                                            }
                                            aria-label={`Ir para treino ${
                                                index + 1
                                            }`}
                                            className={`h-2.5 rounded-full transition-all ${
                                                selectedIndex === index
                                                    ? "w-7 bg-violet-600"
                                                    : "w-2.5 bg-slate-300"
                                            }`}
                                        />

                                    ))}

                                </div>
                            )}

                        </div>

                    )}

                </div>

            </section>

            {/* META */}
            <section className="bg-[#0B0A14] px-6 py-20">

                <div className="w-full">

                    <h2 className="text-3xl font-extrabold text-white">
                        Sua Meta
                    </h2>

                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                        Defina sua rotina atual, escolha o destino e
                        acompanhe sua evolução.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">

                        <MetaCard
                            numero="01"
                            eyebrow="Onde você está"
                            titulo="Nível Atual e Rotina"
                            texto={`Seu nível atual é ${
                                nivelSelecionado || "não definido"
                            }. Continue mantendo consistência nos seus treinos.`}
                        />

                        <MetaCard
                            numero="02"
                            eyebrow="O que você quer"
                            titulo="Sua Evolução"
                            texto="Mantenha uma rotina de treinos consistente e acompanhe seu desenvolvimento ao longo das semanas."
                        />

                        <MetaCard
                            numero="03"
                            eyebrow="Resultado Estimado"
                            titulo="Meta em 8 Semanas"
                            texto="Acompanhe sua evolução, aumente sua consistência e mantenha seus objetivos sempre em foco."
                            destaque
                        />

                    </div>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

                        <div className="flex items-center justify-between text-sm">

                            <span className="text-slate-400">
                                Progresso da Meta Atual
                            </span>

                            <span className="font-semibold text-violet-400">
                                62% Concluído
                            </span>

                        </div>

                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">

                            <div
                                className="h-full rounded-full bg-violet-500"
                                style={{
                                    width: "62%",
                                }}
                            />

                        </div>

                        <div className="mt-2 flex justify-between text-xs text-slate-500">

                            <span>
                                Início (Semana 1)
                            </span>

                            <span>
                                Meta Prevista (Semana 8)
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            {/* FICHA */}
            <section className="bg-[#F5F3FC] px-6 py-20">

                <div className="w-full text-center">

                    <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-600">
                        Personalização Rápida
                    </span>

                    <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
                        Sua Ficha de Treino
                    </h2>

                    <p className="mt-2 text-base text-slate-500">
                        Personalize sua rotina de acordo com seus objetivos.
                    </p>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-left">

                        <p className="text-xs font-semibold tracking-wide text-slate-500">
                            1. ESCOLHA SEU OBJETIVO
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-3">

                            {OBJETIVOS.map((op) => (

                                <button
                                    key={op.id}
                                    onClick={() =>
                                        setObjetivo(op.id)
                                    }
                                    className={`rounded-xl border p-4 text-left transition-colors ${
                                        objetivo === op.id
                                            ? "border-violet-400 bg-violet-50"
                                            : "border-slate-200 hover:border-slate-300"
                                    }`}
                                >

                                    <p className="font-semibold text-slate-900">
                                        {op.titulo}
                                    </p>

                                    <p
                                        className={`mt-0.5 text-xs ${
                                            objetivo === op.id
                                                ? "text-violet-600"
                                                : "text-slate-500"
                                        }`}
                                    >
                                        {op.subtitulo}
                                    </p>

                                </button>

                            ))}

                        </div>

                        <p className="mt-6 text-xs font-semibold tracking-wide text-slate-500">
                            2. DIAS DISPONÍVEIS POR SEMANA
                        </p>

                        <div className="mt-3 grid gap-3 sm:grid-cols-3">

                            {[3, 4, 5].map((dias) => (

                                <button
                                    key={dias}
                                    onClick={() =>
                                        setDiasPorSemana(dias)
                                    }
                                    className={`rounded-xl border py-3 text-center text-sm font-semibold transition-colors ${
                                        diasPorSemana === dias
                                            ? "border-violet-400 bg-violet-50 text-violet-600"
                                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                                    }`}
                                >
                                    {dias} Dias / sem
                                </button>

                            ))}

                        </div>

                        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">

                            <p className="text-xs text-slate-500">
                                PDF completo com séries, repetições e
                                descansos.
                            </p>

                            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500">

                                <Download
                                    size={16}
                                    weight="bold"
                                />

                                Baixar Ficha em PDF

                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* MODAL NÍVEL */}
            {modalNivelAberto && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">

                    <div className="w-[80h] rounded-2xl bg-white p-6 shadow-2xl">

                        <div className="flex items-start justify-between gap-4">

                            <div>

                                <p className="text-xs font-semibold tracking-wide text-violet-600">
                                    PERSONALIZAÇÃO
                                </p>

                                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                                    Qual é seu nível?
                                </h3>

                                <p className="mt-2 text-sm text-slate-500">
                                    Escolha seu nível para montarmos
                                    seu cronograma.
                                </p>

                            </div>

                            <button
                                onClick={() => {
                                    setModalNivelAberto(false);
                                    setNivelEscolhido("");
                                }}
                                className="text-2xl text-slate-400 hover:text-slate-700"
                            >
                                ×
                            </button>

                        </div>

                        <div className="mt-6 space-y-3">

                            {(
                                [
                                    "INICIANTE",
                                    "INTERMEDIARIO",
                                    "AVANÇADO",
                                ] as Nivel[]
                            ).map((nivel) => (

                                <button
                                    key={nivel}
                                    onClick={() =>
                                        setNivelEscolhido(nivel)
                                    }
                                    className={`w-full rounded-xl border p-4 text-left transition ${
                                        nivelEscolhido === nivel
                                            ? "border-violet-500 bg-violet-50 ring-1 ring-violet-500"
                                            : "border-slate-200 hover:border-violet-300 hover:bg-violet-50"
                                    }`}
                                >

                                    <div className="flex items-center justify-between">

                                        <div>

                                            <p className="font-semibold text-slate-900">
                                                {nivel}
                                            </p>

                                            <p className="mt-1 text-xs text-slate-500">

                                                {nivel === "INICIANTE" &&
                                                    "Treino A + B"}

                                                {nivel === "INTERMEDIARIO" &&
                                                    "Treino A + B + C"}

                                                {nivel === "AVANÇADO" &&
                                                    "Treino A + B + C + D"}

                                            </p>

                                        </div>

                                        {nivelEscolhido === nivel && (

                                            <CheckCircle
                                                size={24}
                                                weight="fill"
                                                className="text-violet-600"
                                            />

                                        )}

                                    </div>

                                </button>

                            ))}

                        </div>

                        {/* CONFIRMAR */}
                        <button
                            onClick={salvarNivel}
                            disabled={!nivelEscolhido}
                            className={`mt-6 w-full rounded-lg py-3 text-sm font-semibold text-white transition ${
                                nivelEscolhido
                                    ? "bg-violet-600 hover:bg-violet-500"
                                    : "cursor-not-allowed bg-slate-300"
                            }`}
                        >
                            Confirmar nível
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
}

function MetaCard({
    numero,
    eyebrow,
    titulo,
    texto,
    destaque = false,
}: {
    numero: string;
    eyebrow: string;
    titulo: string;
    texto: string;
    destaque?: boolean;
}) {
    return (
        <div
            className={`rounded-2xl border p-6 ${
                destaque
                    ? "border-violet-400 bg-violet-500/10"
                    : "border-white/10 bg-white/[0.03]"
            }`}
        >

            <span className="text-xs font-semibold tracking-wide text-violet-400">
                {numero}. {eyebrow}
            </span>

            <h3 className="mt-3 text-lg font-bold text-white">
                {titulo}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {texto}
            </p>

        </div>
    );
}
