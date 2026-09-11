import {
  ChartBar,
  Eye,
  Flame,
  Lightning,
  ForkKnife,
  CheckCircle,
  ArrowRight,
} from '@phosphor-icons/react';
import { useTheme } from '../../contexts/ThemeContext';


export default function About() {
  const { tema } = useTheme();

  const heroImage =
    tema === 'claro'
      ? 'https://ik.imagekit.io/iibl43pgxp/temaclaro.png'
      : 'https://ik.imagekit.io/bellaceccon/gato%20corda.png';

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-purple-700/15 blur-[140px]" />

      {/* =========================================================
          CONTAINER PRINCIPAL
      ========================================================= */}

      <main
        className="relative mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
        }}
      >

        {/* =======================================================
            HERO
        ======================================================= */}

        <section className="w-full overflow-hidden rounded-3xl border border-outline-variant bg-surface-container">

          <div className="grid w-full grid-cols-1 lg:grid-cols-[46%_54%]">

            {/* ===================================================
                HERO TEXTO
            =================================================== */}

            <div className="relative z-20 flex w-full min-w-0 flex-col justify-center p-6 text-center sm:p-8 md:p-10 lg:p-12 lg:text-left">

              <h1 className="mt-5 w-full text-3xl font-bold leading-[1.08] tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                Seu treino evolui.
                <span className="mt-1 block text-primary">
                  Sua rotina também.
                </span>
              </h1>

              <p
                className="mt-5 w-full text-sm leading-7 text-on-surface-variant sm:text-base"
                style={{
                  maxWidth: '540px',
                }}
              >
                A FitGym conecta tecnologia, treino e alimentação para criar
                uma experiência mais inteligente, prática e completa para
                quem busca evolução e qualidade de vida.
              </p>

            </div>

            {/* ===================================================
                HERO IMAGEM
            =================================================== */}

            <div className="relative min-h-[320px] w-full overflow-hidden bg-surface-container sm:min-h-[380px] lg:min-h-[440px]">

              {/* IMAGEM DO HERO CONFORME O TEMA */}

              <img
                src={heroImage}
                alt="Gato treinando com corda em uma academia"
                className="absolute inset-0 h-full w-full scale-[1.20] object-cover object-[12%_center] transition-transform duration-700 hover:scale-[1.10]"
              />

              {/* SOMBRA SUAVE INFERIOR */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container/65 via-transparent to-transparent" />

              {/* DEGRADÊ PRINCIPAL */}

              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[34%] bg-gradient-to-r from-surface-container via-surface-container/65 to-transparent" />

              {/* TRANSIÇÃO ENTRE TEXTO E IMAGEM */}

              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[18%] bg-gradient-to-r from-surface-container/70 to-transparent" />

            </div>

          </div>

        </section>

        {/* =======================================================
            MISSÃO / VISÃO / VALORES
        ======================================================= */}

        <section className="mt-6 w-full">

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">

            {/* MISSÃO */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-outline-variant bg-surface-container p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-300 bg-purple-950/60 text-purple-800">
                <ChartBar size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                Nossa missão
              </span>

              <p className="mt-4 text-base leading-6 text-on-surface-variant">
                Usar tecnologia para simplificar a rotina de quem treina,
                conectando informação, acompanhamento e recursos que ajudam
                cada pessoa a buscar uma evolução consistente.
              </p>

            </article>

            {/* VISÃO */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-outline-variant bg-surface-container p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-300 bg-teal-950/60 text-teal-800">
                <Eye size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-700">
                Nossa visão
              </span>

              <p className="mt-4 text-base leading-6 text-on-surface-variant">
                Construir um ecossistema fitness conectado, onde treino,
                alimentação e tecnologia trabalhem juntos para tornar a
                jornada mais inteligente e eficiente.
              </p>

            </article>

            {/* VALORES */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-outline-variant bg-surface-container p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-300 bg-orange-950/60 text-orange-800">
                <Flame size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-tertiary">
                Nossos valores
              </span>

              <div className="mx-auto mt-5 w-full max-w-[250px] space-y-3 text-left">

                <div className="flex items-center gap-2 text-base text-on-surface-variant">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-700"
                  />
                  Tecnologia que simplifica
                </div>

                <div className="flex items-center gap-2 text-base text-on-surface-variant">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-700"
                  />
                  Experiência centrada no usuário
                </div>

                <div className="flex items-center gap-2 text-base text-on-surface-variant">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-700"
                  />
                  Consistência na evolução
                </div>

                <div className="flex items-center gap-2 text-base text-on-surface-variant">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-700"
                  />
                  Saúde e performance
                </div>

              </div>

            </article>

          </div>

        </section>

        {/* =======================================================
            ECOSSISTEMA FITGYM + FITNUTRI
        ======================================================= */}

        <section className="mt-6 w-full rounded-3xl border border-outline-variant bg-surface-container p-6 sm:p-8 lg:p-10">

          <div className="mx-auto w-full max-w-[680px] text-center">

            <h2 className="mt-4 text-2xl font-bold leading-tight text-on-surface sm:text-3xl">
              Uma experiência completa!
            </h2>

          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">

            {/* FITGYM */}

            <article className="flex w-full flex-col rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-surface-container-high p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-800">
                  <ChartBar size={25} />
                </div>

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Musculação
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-on-surface">
                FitGym
              </h3>

              <p className="mt-2 text-base leading-6 text-on-surface-variant">
                Uma experiência de treino organizada e conectada,
                criada para ajudar o usuário a acompanhar sua jornada,
                manter o foco e buscar melhor desempenho.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Treinos
                </span>

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Acompanhamento
                </span>

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Performance
                </span>

              </div>

            </article>

            {/* FITNUTRI */}

            <article className="flex w-full flex-col rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-surface-container-high p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                  <ForkKnife size={25} />
                </div>

                <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700">
                  Alimentação
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-on-surface">
                FitNutri Delivery
              </h3>

              <p className="mt-2 text-base leading-6 text-on-surface-variant">
                Alimentação saudável integrada à rotina. Além da entrega
                das refeições, o sistema auxilia no controle de calorias
                e no acompanhamento do consumo diário.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Delivery
                </span>

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Calorias
                </span>

                <span className="rounded-lg bg-surface-container-high px-3 py-1.5 text-xs text-on-surface">
                  Alimentação saudável
                </span>

              </div>

            </article>

          </div>

          {/* CONEXÃO */}

          <div className="mx-auto mt-6 flex w-full max-w-[900px] flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-800">
              <Lightning size={20} weight="fill" />
            </div>
          </div>

        </section>

        {/* =======================================================
            CTA FINAL
        ======================================================= */}

        <section className="relative mt-6 w-full overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/15 via-surface-container to-surface-container p-7 text-center sm:p-10">

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="relative mx-auto w-full max-w-[700px]">

            <h2 className="mt-3 text-2xl font-bold leading-tight text-on-surface sm:text-3xl">
              O Próximo passo{' '}
              <span className="text-primary">
                começa aqui.
              </span>
            </h2>

            <p className="mx-auto mt-4 w-full text-base leading-6 text-on-surface-variant sm:text-base">
              Cuide da sua alimentação e tenha uma experiência
              conectada para acompanhar sua evolução.
            </p>

            <a href='https://delivery-alimentos-two.vercel.app' target='_blank'>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-container px-5 py-3 text-sm font-semibold text-on-primary-container transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Conheça o ecossistema
                <ArrowRight size={18} />
              </button>
            </a>
          </div>

        </section>

      </main>

    </div>
  );
}