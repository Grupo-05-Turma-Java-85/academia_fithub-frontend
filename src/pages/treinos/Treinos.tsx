import React, { useState } from "react";
import {
  Barbell,
  Play,
  Flame,
  BarbellIcon,
  ArrowRight,
} from "@phosphor-icons/react";

interface MuscleGroup {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  phase: string;
  route: string; // link para a página específica da categoria
}

const muscleGroups: MuscleGroup[] = [
  {
    id: "peito",
    name: "Peito",
    icon: <Barbell className="w-6 h-6 text-on-surface" />,
    description: "Peito & Tríceps",
    phase: "Fase de hipertrofia, Semana 3.",
    route: "/treinos/peito",
  },
  {
    id: "costas",
    name: "Costas",
    icon: <BarbellIcon className="w-6 h-6 text-on-surface" />,
    description: "Costas & Bíceps",
    phase: "Fase de força, Semana 3.",
    route: "/treinos/costas",
  },
  {
    id: "pernas",
    name: "Pernas",
    icon: <BarbellIcon className="w-6 h-6 text-on-surface" />,
    description: "Pernas Completo",
    phase: "Fase de hipertrofia, Semana 3.",
    route: "/treinos/pernas",
  },
  {
    id: "ombros",
    name: "Ombros",
    icon: <BarbellIcon className="w-6 h-6 text-on-surface" />,
    description: "Ombros & Trapézio",
    phase: "Fase de definição, Semana 3.",
    route: "/treinos/ombros",
  },
  {
    id: "bracos",
    name: "Braços",
    icon: <BarbellIcon className="w-6 h-6 text-on-surface" />,
    description: "Bíceps & Tríceps",
    phase: "Fase de hipertrofia, Semana 3.",
    route: "/treinos/bracos",
  },
  {
    id: "cardio",
    name: "Cardio",
    icon: <BarbellIcon className="w-6 h-6 text-on-surface" />,
    description: "Cardio & Resistência",
    phase: "Fase de queima, Semana 3.",
    route: "/treinos/cardio",
  },
];

export const Treinos: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<string>("peito");

  const activeGroup =
    muscleGroups.find((g) => g.id === selectedGroup) ?? muscleGroups[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20 sm:pb-28">
      {/* Cabeçalho */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
          Treinos
        </h1>
        <p className="text-sm sm:text-base text-outline mt-1 font-body">
          Selecione um grupo muscular para focar hoje.
        </p>
      </header>

      {/* Banner: Foco do Dia (dinâmico conforme categoria selecionada) */}
      <section
        key={activeGroup.id}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#201538] via-[#1a122c] to-surface-container-low p-6 sm:p-8 mb-8 border border-primary-container/20 shadow-xl animate-in fade-in duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Flame className="w-4 h-4 fill-primary" />
              <span>Foco do Dia</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-on-surface">
              {activeGroup.description}
            </h2>
            <p className="text-xs sm:text-sm text-outline font-body">
              {activeGroup.phase}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 bg-on-primary-container hover:bg-white text-on-primary-fixed font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Play className="w-4 h-4 fill-on-primary-fixed" />
              <span className="text-sm">Começar Treino</span>
            </button>

            {/* Link para a página específica da categoria */}
            <a
              href={activeGroup.route}
              className="flex items-center justify-center gap-2 text-primary hover:text-white font-semibold px-4 py-3 rounded-full border border-primary-container/40 hover:border-white/40 transition-all duration-200 cursor-pointer"
            >
              <span className="text-sm">Ver todos os treinos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid de Grupos Musculares */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {muscleGroups.map((group) => {
          const isSelected = selectedGroup === group.id;

          return (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`relative flex flex-col items-center justify-center min-h-[160px] sm:min-h-[200px] p-6 rounded-2xl transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-surface-container-low border-2 border-primary-container glow-active"
                  : "bg-surface-container-low hover:bg-surface-container border border-outline-variant/30"
              }`}
            >
              {/* Ícone com Circle Background */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isSelected
                    ? "bg-primary-container/30 text-primary"
                    : "bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {group.icon}
              </div>

              {/* Nome do Grupo */}
              <span className="text-base sm:text-lg font-semibold text-on-surface">
                {group.name}
              </span>
            </button>
          );
        })}
      </main>
    </div>
  );
};

export default Treinos;