import { useState } from 'react';
import { MagnifyingGlass, ArrowRight, Barbell, ForkKnife, User, Wrench, CaretDown, Robot, WhatsappLogo, EnvelopeSimple } from '@phosphor-icons/react';

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const categories = [
    {
      title: 'TREINO',
      desc: 'Planos de treino, exercícios e acompanhamento de progresso.',
      icon: <Barbell size={22} className="text-purple-400 shrink-0" />,
      bgColor: 'bg-purple-950/40 border-purple-800/30',
    },
    {
      title: 'NUTRIÇÃO',
      desc: 'Macros, planos de refeições e ajustes de dieta.',
      icon: <ForkKnife size={22} className="text-teal-400 shrink-0" />,
      bgColor: 'bg-teal-950/40 border-teal-800/30',
    },
    {
      title: 'CONTA',
      desc: 'Faturamento, assinaturas e configurações de perfil.',
      icon: <User size={22} className="text-orange-400 shrink-0" />,
      bgColor: 'bg-orange-950/40 border-orange-800/30',
    },
    {
      title: 'TÉCNICO',
      desc: 'Problemas no aplicativo, erros de sincronização e solução de problemas.',
      icon: <Wrench size={22} className="text-rose-400 shrink-0" />,
      bgColor: 'bg-rose-950/40 border-rose-800/30',
    },
  ];

  const faqs = [
    {
      question: 'Como faço para redefinir meu programa de treino?',
      answer: 'Você pode redefinir o programa indo em Configurações > Meu Plano de Treino > Redefinir Progresso.'
    },
    {
      question: 'Posso sincronizar dados com o Apple Health ou Google Fit?',
      answer: 'Sim! Acesse a aba Integracoes no seu perfil e selecione o aplicativo de saude desejado para sincronizar.'
    },
    {
      question: 'Como atualizo meu método de pagamento?',
      answer: 'Acesse a aba Conta > Faturamento para adicionar ou alterar seu cartão de crédito.'
    },
  ];

  return (
    <div className='bg-[#08060D] py-24'>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 flex flex-col gap-8 sm:gap-10 text-neutral-200">

        <div className="pointer-events-none absolute bottom-[-150px] right-[-150px] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[130px]" />
        <div className="pointer-events-none mt-40 absolute left-1/14 top-1/18 h-[550px] w-[550px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-700/20 blur-[130px]" />
        {/* Cabeçalho com Busca */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Como podemos ajudar?
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Encontre respostas para suas dúvidas sobre treino, nutrição e problemas técnicos.
            </p>
          </div>

          <div className="flex items-center bg-[#18191c] border border-neutral-700/60 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 w-full lg:w-96 shadow-lg">
            <MagnifyingGlass size={20} className="text-neutral-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Buscar por ajuda..."
              className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-neutral-500"
            />
            <button aria-label="Buscar" className="bg-purple-600 hover:bg-purple-500 p-2 rounded-full text-white ml-2 transition shrink-0">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Categorias de Suporte */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-white">Categorias de Suporte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#121316] border border-neutral-800/80 rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-4 hover:border-primary-container transition cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${cat.bgColor}`}>
                  {cat.icon}
                </div>
                <div>
                  <strong className="block text-xs font-bold text-neutral-200 tracking-wider uppercase mb-1">{cat.title}</strong>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perguntas Populares */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-white">Perguntas Frequentes</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#121316] border border-neutral-800/80 rounded-xl p-4 sm:p-5 transition cursor-pointer hover:border-primary-container"
                onClick={() => toggleFaq(idx)}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm sm:text-base font-medium text-neutral-200">{faq.question}</p>
                  <CaretDown size={18} className={`text-neutral-400 transition-transform shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === idx && (
                  <p className="mt-3 pt-3 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Card de Atendimento Direto */}
        <div className="bg-[#121316] border border-neutral-800/80 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center gap-6 sm:gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">Ainda precisa de ajuda?</h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2">
              Nossa equipe de suporte está pronta para ajudá-lo diretamente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {/* Assistente IA */}
            <div className="bg-neutral-900/80 border border-purple-500/30 rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2.5 hover:border-purple-500 transition cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400">
                <Robot size={22} />
              </div>
              <strong className="block text-sm font-bold text-white">Assistente de IA</strong>
              <small className="text-xs text-neutral-400">Disponível 24/7</small>
            </div>

            {/* WhatsApp */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2.5 hover:border-teal-500 transition cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-teal-950/60 border border-teal-800/40 flex items-center justify-center text-teal-400">
                <WhatsappLogo size={22} />
              </div>
              <strong className="block text-sm font-bold text-white">WhatsApp</strong>
              <small className="text-xs text-neutral-400">Tempo médio: 1h</small>
            </div>

            {/* E-mail */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center gap-2.5 hover:border-neutral-700 transition cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300">
                <EnvelopeSimple size={22} />
              </div>
              <strong className="block text-sm font-bold text-white">Envie um E-mail</strong>
              <small className="text-xs text-neutral-400 break-all">support@fitacademy.com</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}