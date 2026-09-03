import { useState } from "react";
import {
  ArrowRight,
  ClipboardText,
  Barbell,
  Clock,
  Flame,
  CheckCircle,
  Download,
} from "@phosphor-icons/react";

type StatusTreino = "Hoje" | "Próximo" | "Planejado";

interface TreinoDia {
  dia: string;
  status: StatusTreino;
  titulo: string;
  duracao: string;
  exercicios: number;
  destaque: string;
  series: string;
}

type Objetivo = "Hipertrofia" | "Emagrecimento" | "Condicionamento";

const DIAS_SEMANA = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

const CRONOGRAMA: TreinoDia[] = [
  {
    dia: "Segunda",
    status: "Hoje",
    titulo: "Costas & Bíceps",
    duracao: "45 min",
    exercicios: 4,
    destaque: "Puxadas, Remadas e Roscas",
    series: "4 Séries",
  },
  {
    dia: "Quarta",
    status: "Próximo",
    titulo: "Pernas & Core",
    duracao: "50 min",
    exercicios: 5,
    destaque: "Agachamento, Leg e Prancha",
    series: "4 Séries",
  },
  {
    dia: "Sexta",
    status: "Planejado",
    titulo: "Peito & Tríceps",
    duracao: "45 min",
    exercicios: 4,
    destaque: "Supino, Crucifixo e Paralelas",
    series: "4 Séries",
  },
];

const OBJETIVOS: { id: Objetivo; titulo: string; subtitulo: string }[] = [
  { id: "Hipertrofia", titulo: "Hipertrofia", subtitulo: "Ganho de massa" },
  { id: "Emagrecimento", titulo: "Emagrecimento", subtitulo: "Definição corporal" },
  { id: "Condicionamento", titulo: "Condicionamento", subtitulo: "Resistência e saúde" },
];

export default function HomeAluno() {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda");
  const [objetivo, setObjetivo] = useState<Objetivo>("Hipertrofia");
  const [diasPorSemana, setDiasPorSemana] = useState(4);

  const treinoHoje = CRONOGRAMA.find((t) => t.status === "Hoje");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0B0A14] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full border border-violet-500/40 px-3 py-1 text-xs font-medium text-violet-300">
              Simples. Focado. Eficiente.
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              Treine certo.
              <br />
              Coma bem.
              <br />
              <span className="text-violet-500">Evolua.</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500">
                Ver Treino de Hoje
              </button>
              <button className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Montar Ficha
              </button>
            </div>
          </div>

          {treinoHoje && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide text-violet-400">
                  HOJE • TREINO ATIVO
                </span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                  Planejado
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {treinoHoje.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {treinoHoje.exercicios} exercícios com foco em execução e
                sobrecarga progressiva.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs text-slate-500">Duração Estimada</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {treinoHoje.duracao}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Gasto Médio</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    ~ 480 kcal
                  </p>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-white/5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Concluir Treino
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#F5F3FC] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
                Seu Cronograma
              </h2>
              <p className="mt-2 text-base text-slate-500">
                Visualização limpa e objetiva da sua rotina de treinamento.
              </p>
            </div>
            <span className="inline-block w-fit rounded-full border border-violet-200 bg-white px-4 py-1.5 text-sm font-medium text-violet-600">
              Semana 3 • Ciclo Ativo
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {DIAS_SEMANA.map((dia) => (
              <button
                key={dia}
                onClick={() => setDiaSelecionado(dia)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  diaSelecionado === dia
                    ? "bg-violet-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {dia}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {CRONOGRAMA.map((treino) => (
              <div
                key={treino.dia}
                className={`rounded-2xl border bg-white p-5 ${
                  treino.status === "Hoje"
                    ? "border-violet-400 ring-1 ring-violet-400"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide text-slate-400">
                    {treino.dia.toUpperCase()}
                  </span>
                  <StatusBadge status={treino.status} />
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {treino.titulo}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {treino.duracao} • {treino.exercicios} exercícios
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-600">{treino.destaque}</p>
                  <span className="whitespace-nowrap rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                    {treino.series}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0A14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-white">Sua Meta</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-400">
            Defina sua rotina atual, escolha o destino e acompanhe a
            projeção com clareza.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MetaCard
              numero="01"
              eyebrow="Onde você está"
              titulo="Nível Atual e Rotina"
              texto="Treina 2 a 3 vezes por semana, com rotina moderada e busca maior consistência nos hábitos."
            />
            <MetaCard
              numero="02"
              eyebrow="O que você quer"
              titulo="Hipertrofia Limpa"
              texto="Foco no ganho de massa magra sem ganho excessivo de gordura corporal, com refeições balanceadas."
            />
            <MetaCard
              numero="03"
              eyebrow="Resultado Estimado"
              titulo="Meta em 8 Semanas"
              texto="+3kg de massa magra e 15% mais disposição ao manter a rotina proposta."
              destaque
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-400">Progresso da Meta Atual</span>
              <span className="font-semibold text-violet-400">62% Concluído</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: "62%" }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-slate-500">
              <span>Início (Semana 1)</span>
              <span>Meta Prevista (Semana 8)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3FC] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-600">
            Personalização Rápida
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
            Sua Ficha de Treino
          </h2>
          <p className="mt-2 text-base text-slate-500">
            Apenas 3 escolhas simples para gerar sua ficha personalizada.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-left">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              1. ESCOLHA SEU OBJETIVO
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {OBJETIVOS.map((op) => (
                <button
                  key={op.id}
                  onClick={() => setObjetivo(op.id)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    objetivo === op.id
                      ? "border-violet-400 bg-violet-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <p className="font-semibold text-slate-900">{op.titulo}</p>

                  <p
                    className={`mt-0.5 text-xs ${
                      objetivo === op.id ? "text-violet-600" : "text-slate-500"
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
                  onClick={() => setDiasPorSemana(dias)}
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
                PDF completo com séries, repetições e descansos.
              </p>
              <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500">
                <Download size={16} weight="bold" />
                Baixar Ficha em PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusBadge({ status }: { status: StatusTreino }) {
  const estilos: Record<StatusTreino, string> = {
    Hoje: "bg-emerald-50 text-emerald-600",
    Próximo: "bg-amber-50 text-amber-600",
    Planejado: "bg-slate-100 text-slate-500",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${estilos[status]}`}>
      {status}
    </span>
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
      <h3 className="mt-3 text-lg font-bold text-white">{titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{texto}</p>
    </div>
  );
}