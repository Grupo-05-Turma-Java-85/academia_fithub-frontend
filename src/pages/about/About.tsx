import {
  ChartBar,
  Eye,
  Flame,
  Lightning,
  ForkKnife,
  CheckCircle,
  ArrowRight,
} from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#08060D]">

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

        <section className="w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#121316]">

          <div className="grid w-full grid-cols-1 lg:grid-cols-[46%_54%]">

            {/* ===================================================
                HERO TEXTO
            =================================================== */}

            <div className="relative z-20 flex w-full min-w-0 flex-col justify-center p-6 text-center sm:p-8 md:p-10 lg:p-12 lg:text-left">


              <h1 className="mt-5 w-full text-4xl font-bold leading-[1.08] tracking-tight text-white lg:text-7xl">
                Seu treino evolui.
                <span className="mt-1 block text-purple-300">
                  Sua rotina também.
                </span>
              </h1>



            </div>

            {/* ===================================================
                HERO IMAGEM
            =================================================== */}

            <div className="relative min-h-[320px] w-full overflow-hidden bg-[#121316] sm:min-h-[380px] lg:min-h-[440px]">

              {/* IMAGEM */}

              <img
                src="https://ik.imagekit.io/bellaceccon/gato%20corda.png"
                alt="Gato treinando com corda em uma academia"
                className="absolute inset-0 h-full w-full scale-[1.20] object-cover object-[12%_center] transition-transform duration-700 hover:scale-[1.10]"
              />

              {/* SOMBRA SUAVE INFERIOR */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121316]/65 via-transparent to-transparent" />

              {/* DEGRADÊ PRINCIPAL */}

              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[34%] bg-gradient-to-r from-[#121316] via-[#121316]/65 to-transparent" />

              {/* TRANSIÇÃO ENTRE TEXTO E IMAGEM */}

              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[18%] bg-gradient-to-r from-[#121316]/70 to-transparent" />

            </div>

          </div>

        </section>

        {/* =======================================================
            MISSÃO / VISÃO / VALORES
        ======================================================= */}

        <section className="mt-6 w-full">

          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">

            {/* MISSÃO */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-neutral-800 bg-[#121316] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-800/40 bg-purple-950/60 text-purple-400">
                <ChartBar size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-purple-400">
                Nossa missão
              </span>

              <p className="mt-4 text-base leading-6 text-neutral-400">
                Usar tecnologia para simplificar a rotina de quem treina,
                conectando informação, acompanhamento e recursos que ajudam
                cada pessoa a buscar uma evolução consistente.
              </p>

            </article>

            {/* VISÃO */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-neutral-800 bg-[#121316] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-800/40 bg-teal-950/60 text-teal-400">
                <Eye size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal-400">
                Nossa visão
              </span>

              <p className="mt-4 text-base leading-6 text-neutral-400">
                Construir um ecossistema fitness conectado, onde treino,
                alimentação e tecnologia trabalhem juntos para tornar a
                jornada mais inteligente e eficiente.
              </p>

            </article>

            {/* VALORES */}

            <article className="flex min-h-[290px] w-full flex-col rounded-2xl border border-neutral-800 bg-[#121316] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">

              <div className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-orange-800/40 bg-orange-950/60 text-orange-400">
                <Flame size={23} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                Nossos valores
              </span>

              <div className="mx-auto mt-5 w-full max-w-[250px] space-y-3 text-left">

                <div className="flex items-center gap-2 text-base text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Tecnologia que simplifica
                </div>

                <div className="flex items-center gap-2 text-base text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Experiência centrada no usuário
                </div>

                <div className="flex items-center gap-2 text-base text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Consistência na evolução
                </div>

                <div className="flex items-center gap-2 text-base text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
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

        <section className="mt-6 w-full rounded-3xl border border-neutral-800 bg-[#121316] p-6 sm:p-8 lg:p-10">

          <div className="mx-auto w-full max-w-[680px] text-center">

            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Uma experiência completa!
            </h2>

          </div>

          <div className="mx-auto mt-8 grid w-full max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">

            {/* FITGYM */}

            <article className="flex w-full flex-col rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-neutral-900/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <ChartBar size={25} />
                </div>

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                  Musculação
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                FitGym
              </h3>

              <p className="mt-2 text-base leading-6 text-neutral-400">
                Uma experiência de treino organizada e conectada,
                criada para ajudar o usuário a acompanhar sua jornada,
                manter o foco e buscar melhor desempenho.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Treinos
                </span>

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Acompanhamento
                </span>

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Performance
                </span>

              </div>

            </article>

            {/* FITNUTRI */}

            <article className="flex w-full flex-col rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-950/20 to-neutral-900/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40">

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300">
                  <ForkKnife size={25} />
                </div>

                <span className="rounded-full border border-teal-500/20 bg-teal-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-300">
                  Alimentação
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                FitNutri Delivery
              </h3>

              <p className="mt-2 text-base leading-6 text-neutral-400">
                Alimentação saudável integrada à rotina. Além da entrega
                das refeições, o sistema auxilia no controle de calorias
                e no acompanhamento do consumo diário.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Delivery
                </span>

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Calorias
                </span>

                <span className="rounded-lg bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300">
                  Alimentação saudável
                </span>

              </div>

            </article>

          </div>

          {/* CONEXÃO */}

          <div className="mx-auto mt-6 flex w-full max-w-[900px] flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
              <Lightning size={20} weight="fill" />
            </div>

          </div>

        </section>

        {/* =======================================================
            CTA FINAL
        ======================================================= */}

        <section className="relative mt-6 w-full overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 via-[#121316] to-[#121316] p-7 text-center sm:p-10">

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="relative mx-auto w-full max-w-[700px]">

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              O Próximo passo{' '}
              <span className="text-purple-300">
                começa aqui.
              </span>
            </h2>

            <p className="mx-auto mt-4 w-full text-base leading-6 text-neutral-400 sm:text-base">
              Cuide da sua alimentação e tenha uma experiência
              conectada para acompanhar sua evolução.
            </p>

            <a href='https://delivery-alimentos-two.vercel.app' target="_blank">
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-900/30"
              >
                Conheça o FITNUTRI
                <ArrowRight size={18} />
              </button>
            </a>

          </div>

        </section>

      </main>

    </div>
  );
}