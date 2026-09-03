import {
  ChartBar,
  Eye,
  Flame,
  Cpu,
  Lightning,
  ForkKnife,
  CheckCircle,
  ArrowRight,
  Sparkle,
} from '@phosphor-icons/react';

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

          <div className="grid w-full grid-cols-1 lg:grid-cols-2">

            {/* ---------------------------------------------------
                HERO TEXTO
            --------------------------------------------------- */}

            <div className="flex w-full min-w-0 flex-col justify-center p-6 text-center sm:p-8 md:p-10 lg:p-12 lg:text-left">

              <div className="mx-auto inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 lg:mx-0">
                <Sparkle size={14} weight="fill" />
                Movimento. Tecnologia. Evolução.
              </div>

              <h1 className="mt-5 w-full text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Seu treino evolui.
                <span className="mt-1 block text-purple-300">
                  Sua rotina também.
                </span>
              </h1>

              <p
                className="mt-5 w-full text-sm leading-7 text-neutral-400 sm:text-base"
                style={{
                  maxWidth: '540px',
                }}
              >
                A FitGym conecta tecnologia, treino e alimentação para criar
                uma experiência mais inteligente, prática e completa para
                quem busca evolução e qualidade de vida.
              </p>

              <div className="mt-7 flex w-full flex-wrap justify-center gap-3 lg:justify-start">

                <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-2.5 text-xs text-neutral-300">
                  <Lightning size={17} className="text-purple-400" />
                  Treino inteligente
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-2.5 text-xs text-neutral-300">
                  <ForkKnife size={17} className="text-teal-400" />
                  Alimentação integrada
                </div>

              </div>

            </div>


            {/* ---------------------------------------------------
                HERO IMAGEM
            --------------------------------------------------- */}

            <div className="relative min-h-[300px] w-full sm:min-h-[360px] lg:min-h-[440px]">

              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop"
                alt="Pessoa treinando em uma academia"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#121316] lg:via-[#121316]/20 lg:to-transparent" />

              <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md sm:left-auto sm:right-5 sm:translate-x-0">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300">
                    <Lightning size={21} weight="fill" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      Performance em foco
                    </p>

                    <p className="mt-0.5 text-[11px] text-neutral-400">
                      Tecnologia para sua evolução
                    </p>
                  </div>

                </div>

              </div>

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

              <h2 className="mt-2 text-xl font-bold leading-tight text-white">
                Tornar a evolução mais acessível.
              </h2>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
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

              <h2 className="mt-2 text-xl font-bold leading-tight text-white">
                Conectar tudo o que importa.
              </h2>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
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

              <h2 className="mt-2 text-xl font-bold leading-tight text-white">
                Evoluir sem complicar.
              </h2>

              <div className="mx-auto mt-5 w-full max-w-[250px] space-y-3 text-left">

                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Tecnologia que simplifica
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Experiência centrada no usuário
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <CheckCircle
                    size={17}
                    className="shrink-0 text-orange-400"
                  />
                  Consistência na evolução
                </div>

                <div className="flex items-center gap-2 text-sm text-neutral-400">
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

          {/* CABEÇALHO */}

          <div className="mx-auto w-full max-w-[680px] text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
              <Cpu size={14} />
              Um ecossistema conectado
            </span>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Mais do que treino.
              <span className="text-purple-300">
                {' '}
                Uma experiência completa.
              </span>
            </h2>

            <p className="mx-auto mt-4 text-sm leading-6 text-neutral-400 sm:text-base">
              A FitGym integra treino, alimentação e tecnologia para
              acompanhar diferentes partes da jornada fitness em uma
              experiência simples e conectada.
            </p>

          </div>


          {/* PRODUTOS */}

          <div className="mx-auto mt-8 grid w-full max-w-[900px] grid-cols-1 gap-5 md:grid-cols-2">

            {/* FITGYM */}

            <article className="flex w-full flex-col rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 to-neutral-900/40 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40">

              <div className="flex items-start justify-between gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                  <ChartBar size={25} />
                </div>

                <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                  Performance
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                FitGym
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
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
                  Nutrição
                </span>

              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                FitNutri Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
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

          <div className="mx-auto mt-5 flex w-full max-w-[900px] flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5 text-center sm:flex-row sm:text-left">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-300">
              <Lightning size={20} weight="fill" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Treino + alimentação trabalhando juntos.
              </p>

              <p className="mt-1 text-xs leading-5 text-neutral-500">
                Um ecossistema pensado para tornar sua rotina mais
                equilibrada, prática e consciente.
              </p>
            </div>

          </div>

        </section>


        {/* =======================================================
            TECNOLOGIA
        ======================================================= */}

        <section className="mt-6 w-full overflow-hidden rounded-3xl border border-neutral-800 bg-[#121316]">

          <div className="grid w-full grid-cols-1 lg:grid-cols-2">

            {/* TEXTO */}

            <div className="flex w-full flex-col justify-center p-6 text-center sm:p-8 lg:p-10 lg:text-left">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-purple-800/40 bg-purple-950/60 text-purple-400 lg:mx-0">
                <Cpu size={25} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-purple-400">
                Tecnologia a favor da rotina
              </span>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Menos complicação.
                <span className="block text-purple-300">
                  Mais informação para evoluir.
                </span>
              </h2>

              <p
                className="mx-auto mt-4 w-full text-sm leading-6 text-neutral-400 sm:text-base lg:mx-0"
                style={{
                  maxWidth: '520px',
                }}
              >
                A FitGym utiliza tecnologia para organizar informações,
                facilitar o acesso aos recursos e aproximar diferentes
                partes da jornada fitness em um único ecossistema.
              </p>

              <div className="mx-auto mt-6 w-full max-w-[400px] space-y-3 text-left lg:mx-0">

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={19}
                    weight="fill"
                    className="shrink-0 text-purple-400"
                  />

                  <span className="text-sm text-neutral-300">
                    Experiência simples e intuitiva
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={19}
                    weight="fill"
                    className="shrink-0 text-purple-400"
                  />

                  <span className="text-sm text-neutral-300">
                    Informações centralizadas
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle
                    size={19}
                    weight="fill"
                    className="shrink-0 text-purple-400"
                  />

                  <span className="text-sm text-neutral-300">
                    Recursos pensados para a rotina real
                  </span>
                </div>

              </div>

            </div>


            {/* VISUAL */}

            <div className="flex min-h-[320px] w-full items-center justify-center bg-neutral-950/50 p-8">

              <div className="relative flex h-56 w-56 items-center justify-center">

                <div className="absolute inset-0 rounded-full border border-purple-500/10" />

                <div className="absolute inset-6 rounded-full border border-purple-500/15" />

                <div className="absolute inset-12 rounded-full border border-purple-500/20" />


                {/* CENTRO */}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_60px_rgba(168,85,247,0.15)]">
                  <Cpu size={38} weight="duotone" />
                </div>


                {/* PERFORMANCE */}

                <div className="absolute right-2 top-8 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-[#121316] text-purple-300">
                  <ChartBar size={20} />
                </div>


                {/* NUTRIÇÃO */}

                <div className="absolute bottom-5 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-500/20 bg-[#121316] text-teal-300">
                  <ForkKnife size={20} />
                </div>


                {/* ENERGIA */}

                <div className="absolute bottom-1 right-8 flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/20 bg-[#121316] text-orange-300">
                  <Flame size={17} />
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =======================================================
            CTA FINAL
        ======================================================= */}

        <section className="relative mt-6 w-full overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 via-[#121316] to-[#121316] p-7 text-center sm:p-10">

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="relative mx-auto w-full max-w-[700px]">

            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              O próximo passo começa aqui
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Uma rotina mais inteligente começa com{' '}
              <span className="text-purple-300">
                boas escolhas.
              </span>
            </h2>

            <p className="mx-auto mt-4 w-full text-sm leading-6 text-neutral-400 sm:text-base">
              Treine melhor, cuide da sua alimentação e tenha uma experiência
              conectada para acompanhar sua evolução.
            </p>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-900/30"
            >
              Conheça o ecossistema
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

      </main>
    </div>
  );
}