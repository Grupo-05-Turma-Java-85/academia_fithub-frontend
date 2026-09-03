import { ChartBar, Eye, Flame, Cpu, Lightning } from '@phosphor-icons/react';

export default function About() {
  return (
    <div className='bg-[#08060D] py-24'>
      <div className="w-full max-w-7xl  mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6 lg:gap-8 text-neutral-200">

        <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[130px]" />

        {/* Banner Principal */}
        <div className="bg-[#121316] border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-300 leading-tight">
              Redefinindo a Performance.
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              A Fit Academy nasceu de uma obsessão singular: descodificar o corpo humano através de dados.
              Preenchemos a lacuna entre a ciência atlética de elite e o bem-estar diário, proporcionando uma abordagem tática e intransigente ao fitness pessoal.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-80 rounded-xl overflow-hidden bg-neutral-900 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              alt="Fitness District"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Cards de Missão, Visão e Valores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Missão */}
          <div className="bg-[#121316] border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400">
              <ChartBar size={22} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">A Nossa Missão</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Capacitar indivíduos através de dados precisos e acionáveis para eliminar as suposições do treino e da nutrição.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-[#121316] border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-950/60 border border-teal-800/40 flex items-center justify-center text-teal-400">
              <Eye size={22} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">A Nossa Visão</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Um mundo onde o potencial humano otimizado é o padrão, impulsionado pelo rigor científico e pela inovação implacável.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-[#121316] border border-neutral-800 rounded-2xl p-6 flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-orange-950/60 border border-orange-800/40 flex items-center justify-center text-orange-400">
              <Flame size={22} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">Os Nossos Valores</h2>
            <ul className="text-neutral-400 text-sm leading-relaxed space-y-1">
              <li>• Precisão</li>
              <li>• Disciplina</li>
              <li>• Comunidade</li>
            </ul>
          </div>
        </div>

        {/* O Motor Interno */}
        <div className="bg-[#121316] border border-neutral-800 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-72 bg-neutral-900/80 border border-neutral-800 rounded-xl flex items-center justify-center shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-purple-400">
              <Cpu size={36} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-purple-200">O Motor Interno</h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Não monitorizamos apenas as repetições; analisamos os padrões de movimento, a carga biomecânica e as métricas de recuperação.
              Os nossos algoritmos proprietários processam milhares de pontos de dados para gerar protocolos de treino adaptáveis e periodizados especificamente afinados para a sua fisiologia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-center flex flex-col justify-center">
                <strong className="block text-xl font-bold text-white">99.8%</strong>
                <small className="text-[11px] text-neutral-400 tracking-wider">PRECISÃO DOS DADOS</small>
              </div>
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 text-center flex flex-col items-center justify-center">
                <Lightning size={20} className="text-purple-400 mb-1" />
                <small className="text-[11px] text-neutral-400 tracking-wider">SINCRONIZAÇÃO EM TEMPO REAL</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}