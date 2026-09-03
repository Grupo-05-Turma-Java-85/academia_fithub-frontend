import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  User, 
  FileText, 
  ForkKnife, 
  Clock, 
  Fire,
  List,
  X
} from '@phosphor-icons/react';

export const HomeAluno: React.FC = () => {
  // Estado para controlar menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estados da Ficha de Treino
  const [objetivo, setObjetivo] = useState<'hipertrofia' | 'emagrecimento' | 'condicionamento'>('hipertrofia');
  const [dias, setDias] = useState<number>(4);
  const [diaSemana, setDiaSemana] = useState<string>('Segunda');

  const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  return (
    <div className="min-h-screen bg-[#0B0C10] text-gray-200 font-sans antialiased overflow-x-hidden">
      
      {/* HEADER / NAVBAR RESPONSIVO */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-[#0B0C10]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-lg shadow-purple-600/30">
              F
            </div>
            <div className="flex flex-col">
              <strong className="text-sm sm:text-base font-extrabold tracking-wide text-white leading-none">
                FIT<strong className="text-purple-400 font-extrabold">ACADEMY</strong>
              </strong>
              <span className="text-[8px] sm:text-[9px] text-gray-400 font-mono tracking-wider uppercase mt-0.5">Smart Fitness</span>
            </div>
          </Link>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            <a href="#treinos" className="text-gray-300 hover:text-white transition-colors">Treinos</a>
            <a href="#evolucao" className="text-gray-300 hover:text-white transition-colors">Evolução</a>
            <a href="#ficha" className="text-gray-300 hover:text-white transition-colors">Minha Ficha</a>
            <a href="#fitnutri" className="text-gray-300 hover:text-purple-300 transition-colors flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              FitNutri
            </a>
          </nav>

          {/* Profile Button (Desktop) & Menu Toggle (Mobile) */}
          <div className="flex items-center gap-3">
            <Link 
              to="/perfil" 
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#12131A] border border-[#20222E] hover:border-purple-500/50 text-xs font-semibold text-gray-200 transition-colors"
            >
              <User size={14} className="text-purple-400" />
              <span>Meu Perfil</span>
            </Link>

            {/* Hambúrguer Mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#12131A] border border-[#20222E] text-gray-300 hover:text-white"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Retrátil Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B0C10] border-b border-[#20222E] px-4 py-4 space-y-3 text-sm">
            <a 
              href="#treinos" 
              onClick={() => setIsMenuOpen(false)} 
              className="block py-2 text-gray-300 hover:text-white border-b border-[#12131A]"
            >
              Treinos
            </a>
            <a 
              href="#evolucao" 
              onClick={() => setIsMenuOpen(false)} 
              className="block py-2 text-gray-300 hover:text-white border-b border-[#12131A]"
            >
              Evolução
            </a>
            <a 
              href="#ficha" 
              onClick={() => setIsMenuOpen(false)} 
              className="block py-2 text-gray-300 hover:text-white border-b border-[#12131A]"
            >
              Minha Ficha
            </a>
            <a 
              href="#fitnutri" 
              onClick={() => setIsMenuOpen(false)} 
              className="block py-2 text-gray-300 hover:text-purple-300 border-b border-[#12131A]"
            >
              FitNutri Delivery
            </a>
            <Link 
              to="/perfil" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-2 py-2 text-purple-400 font-semibold"
            >
              <User size={16} />
              Meu Perfil
            </Link>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section 
          className="py-12 sm:py-16 md:py-24 border-b border-purple-500/10" 
          style={{ background: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, #0b0c10 70%)' }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
                <div className="inline-block px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                  Simples. Focado. Eficiente.
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  Treine certo.<br />
                  Coma bem.<br />
                  <strong className="text-purple-400 font-black">Evolua.</strong>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                  Acompanhe seus treinos diários e receba refeições saudáveis calculadas para o seu objetivo.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                  <a 
                    href="#treinos" 
                    className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 text-center"
                  >
                    Ver Treino de Hoje
                  </a>
                  <a 
                    href="#ficha" 
                    className="px-6 py-3.5 rounded-xl bg-[#12131A] hover:bg-[#1A1C24] border border-[#20222E] text-gray-200 font-semibold text-sm transition-all text-center"
                  >
                    Montar Ficha
                  </a>
                </div>
              </div>

              {/* Card Treino Ativo */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-[#12131A] border border-[#20222E] rounded-2xl p-5 sm:p-7 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-[#20222E]">
                    <span className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">HOJE • TREINO ATIVO</span>
                    <span className="text-[10px] sm:text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                      Planejado
                    </span>
                  </div>
                  <div className="mt-4 sm:mt-5">
                    <h3 className="text-xl sm:text-2xl font-black text-white">Costas & Bíceps</h3>
                    <p className="text-xs text-gray-400 mt-1">4 exercícios com foco em execução e sobrecarga progressiva.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5 p-3.5 sm:p-4 rounded-xl bg-[#0B0C10] border border-[#20222E] text-xs">
                    <div>
                      <span className="text-gray-500 flex items-center gap-1 text-[11px]">
                        <Clock size={12} /> Duração Estimada
                      </span>
                      <strong className="text-white font-bold text-xs sm:text-sm mt-0.5 block">45 minutos</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 flex items-center gap-1 text-[11px]">
                        <Fire size={12} /> Gasto Médio
                      </span>
                      <strong className="text-purple-300 font-bold text-xs sm:text-sm mt-0.5 block">~ 480 kcal</strong>
                    </div>
                  </div>
                  <button className="w-full mt-5 py-3.5 rounded-xl bg-[#1A1C24] hover:bg-purple-600 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer">
                    Concluir Treino
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CRONOGRAMA SEMANAL */}
        <section id="treinos" className="py-12 sm:py-16 md:py-24 border-b border-purple-200/60 bg-[#F8F5FE]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md inline-block mb-2">
                  PLANEJAMENTO SEMANAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#110D1D] tracking-tight">Seu Cronograma</h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Visualização limpa e objetiva da sua rotina de treinamento.</p>
              </div>
              <span className="self-start md:self-auto text-xs font-bold text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full">
                Semana 3 • Ciclo Ativo
              </span>
            </div>

            {/* Abas Dias da Semana */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 text-xs font-bold -mx-4 px-4 sm:mx-0 sm:px-0">
              {diasSemana.map((d) => (
                <button
                  key={d}
                  onClick={() => setDiaSemana(d)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all shrink-0 cursor-pointer ${
                    diaSemana === d
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                      : 'bg-white border border-purple-200/80 text-gray-600 hover:text-purple-700'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Grid de Cards Limpos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white border-2 border-purple-500 rounded-2xl p-5 sm:p-6 shadow-lg shadow-purple-500/5">
                <div className="flex items-center justify-between text-xs mb-3">
                  <strong className="font-bold text-purple-600 uppercase">SEGUNDA</strong>
                  <span className="text-emerald-700 bg-emerald-100 font-bold border border-emerald-300 px-2 py-0.5 rounded text-[10px]">Hoje</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#110D1D]">Costas & Bíceps</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">45 min • 4 exercícios</p>
                <div className="mt-5 pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-gray-600">
                  <p className="truncate mr-2">Puxadas, Remadas e Roscas</p>
                  <strong className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-100 shrink-0">4 Séries</strong>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-purple-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-purple-300 transition-all">
                <div className="flex items-center justify-between text-xs mb-3">
                  <strong className="font-bold text-gray-500 uppercase">QUARTA</strong>
                  <span className="text-gray-500 bg-gray-100 font-medium px-2 py-0.5 rounded text-[10px]">Próximo</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#110D1D]">Pernas & Core</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">50 min • 5 exercícios</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <p className="truncate mr-2">Agachamento, Leg e Prancha</p>
                  <strong className="text-[#110D1D] font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-200 shrink-0">4 Séries</strong>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-purple-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-purple-300 transition-all sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between text-xs mb-3">
                  <strong className="font-bold text-gray-500 uppercase">SEXTA</strong>
                  <span className="text-gray-500 bg-gray-100 font-medium px-2 py-0.5 rounded text-[10px]">Planejado</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#110D1D]">Peito & Tríceps</h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">45 min • 4 exercícios</p>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <p className="truncate mr-2">Supino, Crucifixo e Paralelas</p>
                  <strong className="text-[#110D1D] font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-200 shrink-0">4 Séries</strong>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SUA META */}
        <section id="evolucao" className="py-12 sm:py-16 md:py-20 border-b border-[#20222E] bg-[#0B0C10]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-xl mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Sua Meta</h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Defina sua rotina atual, escolha o destino e acompanhe a projeção com clareza.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-[#12131A] border border-[#20222E] rounded-xl p-5 sm:p-6">
                <span className="text-xs font-bold text-purple-400 block mb-1.5">01. Onde você está</span>
                <h3 className="text-base font-bold text-white">Nível Atual e Rotina</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Treina 2 a 3 vezes por semana, com rotina moderada e busca maior consistência nos hábitos.
                </p>
              </div>

              <div className="bg-[#12131A] border border-[#20222E] rounded-xl p-5 sm:p-6">
                <span className="text-xs font-bold text-purple-400 block mb-1.5">02. O que você quer</span>
                <h3 className="text-base font-bold text-white">Hipertrofia Limpa</h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Foco no ganho de massa magra sem ganho excessivo de gordura corporal, com refeições balanceadas.
                </p>
              </div>

              <div className="bg-[#12131A] border border-purple-500/40 rounded-xl p-5 sm:p-6 bg-purple-950/10">
                <span className="text-xs font-bold text-purple-400 block mb-1.5">03. Resultado Estimado</span>
                <h3 className="text-base font-bold text-white">Meta em 8 Semanas</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  <strong className="text-white">+3kg de massa magra</strong> e <strong className="text-white">15% mais disposição</strong> ao manter a rotina proposta.
                </p>
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="bg-[#12131A] border border-[#20222E] rounded-xl p-5 sm:p-6">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-gray-400 font-semibold">Progresso da Meta Atual</span>
                <strong className="text-purple-400 font-bold">62% Concluído</strong>
              </div>
              <div className="w-full bg-[#0B0C10] h-3 rounded-full overflow-hidden border border-[#20222E]">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full" style={{ width: '62%' }} />
              </div>
              <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-gray-500 mt-2">
                <span>Início (Semana 1)</span>
                <span>Meta Prevista (Semana 8)</span>
              </div>
            </div>

          </div>
        </section>

        {/* FICHA DE TREINO */}
        <section id="ficha" className="py-12 sm:py-16 md:py-24 border-b border-purple-200/60 bg-[#F4EFFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md inline-block mb-2">
                PERSONALIZAÇÃO RÁPIDA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#110D1D] tracking-tight">Sua Ficha de Treino</h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Apenas 3 escolhas simples para gerar sua ficha personalizada.</p>
            </div>

            <div className="bg-white border border-purple-200 rounded-2xl p-5 sm:p-8 space-y-6 sm:space-y-8 shadow-xl shadow-purple-900/5">
              {/* Passo 1 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  1. ESCOLHA SEU OBJETIVO
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button 
                    type="button" 
                    onClick={() => setObjetivo('hipertrofia')}
                    className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
                      objetivo === 'hipertrofia'
                        ? 'border-2 border-purple-600 bg-purple-50'
                        : 'border border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <strong className={`block text-sm font-bold ${objetivo === 'hipertrofia' ? 'text-purple-950' : 'text-gray-800'}`}>
                      Hipertrofia
                    </strong>
                    <span className={`block text-xs mt-0.5 ${objetivo === 'hipertrofia' ? 'text-purple-700' : 'text-gray-500'}`}>
                      Ganho de massa
                    </span>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => setObjetivo('emagrecimento')}
                    className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
                      objetivo === 'emagrecimento'
                        ? 'border-2 border-purple-600 bg-purple-50'
                        : 'border border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <strong className={`block text-sm font-bold ${objetivo === 'emagrecimento' ? 'text-purple-950' : 'text-gray-800'}`}>
                      Emagrecimento
                    </strong>
                    <span className={`block text-xs mt-0.5 ${objetivo === 'emagrecimento' ? 'text-purple-700' : 'text-gray-500'}`}>
                      Definição corporal
                    </span>
                  </button>

                  <button 
                    type="button" 
                    onClick={() => setObjetivo('condicionamento')}
                    className={`p-3.5 sm:p-4 rounded-xl text-left transition-all cursor-pointer ${
                      objetivo === 'condicionamento'
                        ? 'border-2 border-purple-600 bg-purple-50'
                        : 'border border-gray-200 bg-white hover:border-purple-300'
                    }`}
                  >
                    <strong className={`block text-sm font-bold ${objetivo === 'condicionamento' ? 'text-purple-950' : 'text-gray-800'}`}>
                      Condicionamento
                    </strong>
                    <span className={`block text-xs mt-0.5 ${objetivo === 'condicionamento' ? 'text-purple-700' : 'text-gray-500'}`}>
                      Resistência e saúde
                    </span>
                  </button>
                </div>
              </div>

              {/* Passo 2 */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  2. DIAS DISPONÍVEIS POR SEMANA
                </label>
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[3, 4, 5].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDias(d)}
                      className={`py-3 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                        dias === d
                          ? 'border-2 border-purple-600 bg-purple-50 text-purple-950'
                          : 'border border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                      }`}
                    >
                      {d} Dias / sem
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer da Ficha */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500 text-center sm:text-left">PDF completo com séries, repetições e descansos.</span>
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-purple-600/20 flex items-center justify-center gap-2 cursor-pointer">
                  <FileText size={16} />
                  BAIXAR FICHA EM PDF
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* FITNUTRI DELIVERY */}
        <section id="fitnutri" className="py-12 sm:py-16 md:py-20 bg-[#0B0C10]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Alimentação Inteligente
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  FitNutri Delivery
                </h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Comida de verdade entregue na sua porta, calculada para o seu treino.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-lg bg-[#12131A] border border-[#20222E] flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Check size={12} weight="bold" />
                    </div>
                    <p><strong className="text-white">Calorias e macros calculados</strong> para a sua ficha de treino.</p>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-lg bg-[#12131A] border border-[#20222E] flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Check size={12} weight="bold" />
                    </div>
                    <p><strong className="text-white">Pronto em 3 minutos</strong> no micro-ondas, sem bagunça na cozinha.</p>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-lg bg-[#12131A] border border-[#20222E] flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Check size={12} weight="bold" />
                    </div>
                    <p><strong className="text-white">Planos semanais flexíveis</strong> adaptáveis aos seus objetivos.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    to="/cardapio" 
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <ForkKnife size={16} />
                    PEDIR CARDÁPIO
                  </Link>
                </div>
              </div>

              {/* Card Prato do Dia */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-[#12131A] border border-[#20222E] rounded-2xl p-5 sm:p-7">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-[#20222E]">
                    <strong className="font-bold text-purple-400 uppercase tracking-wider text-[11px] sm:text-xs">PRATO DO DIA</strong>
                    <span className="text-gray-400 text-[11px]">Entrega rápida</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-base sm:text-lg font-bold text-white">Frango Grelhado, Purê Rústico e Legumes ao Vapor</h4>
                    <p className="text-xs text-gray-400 mt-1">Porção ideal para dias de treino com alta intensidade.</p>
                  </div>

                  {/* Macros */}
                  <div className="grid grid-cols-3 gap-2 mt-5 text-center">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#0B0C10] border border-[#20222E]">
                      <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-semibold block">PROTEÍNA</span>
                      <strong className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block">42g</strong>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#0B0C10] border border-[#20222E]">
                      <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-semibold block">CARBOS</span>
                      <strong className="text-xs sm:text-sm font-extrabold text-white mt-0.5 block">36g</strong>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#0B0C10] border border-[#20222E]">
                      <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-semibold block">CALORIAS</span>
                      <strong className="text-xs sm:text-sm font-extrabold text-purple-300 mt-0.5 block">440 kcal</strong>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#20222E] flex items-center justify-between gap-3">
                    <p className="text-sm sm:text-base font-extrabold text-white">
                      R$ 28,90 <span className="text-xs font-normal text-gray-400">/ ref</span>
                    </p>
                    <button className="px-4 sm:px-5 py-2.5 rounded-lg bg-[#0B0C10] hover:bg-[#20222E] border border-[#20222E] text-xs font-semibold text-gray-200 transition-all cursor-pointer">
                      Selecionar
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default HomeAluno;