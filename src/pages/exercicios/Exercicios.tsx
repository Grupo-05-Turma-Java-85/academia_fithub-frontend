// src/paginas/listaExercicios/ListaExercicios.tsx
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CaretRight, Timer, ArrowLeft, Barbell } from "@phosphor-icons/react";
import { buscar } from "../../service/Service";
import { AuthContext } from "../../contexts/AuthContext";
import type Exercicio from "../../models/Exercicio";
import type Categoria from "../../models/Categoria";

export const Exercicios: React.FC = () => {
  const { categoriaId } = useParams<{ categoriaId: string }>();
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  useEffect(() => {
    if (!usuario.token) return;

    const header = { headers: { Authorization: usuario.token } };

    // Buscar lista geral de exercícios ou filtrar por categoria
    buscar("/exercicios", (dados: Exercicio[]) => {
      if (categoriaId) {
        const filtrados = dados.filter(
          (ex) => String(ex.categoria?.id) === String(categoriaId)
        );
        setExercicios(filtrados);
      } else {
        setExercicios(dados);
      }
    }, header);

    // Buscar detalhes da categoria selecionada
    if (categoriaId) {
      buscar(`/categorias/${categoriaId}`, setCategoria, header);
    }
  }, [categoriaId, usuario.token]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-24 pb-20 text-white">
      {/* Botão Voltar */}
      <button
        onClick={() => navigate("/categorias")}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition cursor-pointer"
      >
        <ArrowLeft size={18} />
        <span>Voltar para Categorias</span>
      </button>

      {/* Banner da Categoria */}
      <div className="relative overflow-hidden rounded-2xl bg-[#120c1d] border border-purple-500/20 p-8 mb-6 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {categoria ? `Treino de ${categoria.nome}` : "Todos os Exercícios"}
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              {categoria?.descricao || "Foco em volume e execução técnica."}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-purple-950/60 border border-purple-500/30 px-4 py-2 rounded-xl text-purple-300 text-sm font-semibold w-fit">
            <Timer size={18} />
            <span>45m estimado</span>
          </div>
        </div>
      </div>

      {/* Lista de Exercícios */}
      <div className="space-y-4">
        {exercicios.length === 0 ? (
          <div className="text-center py-12 bg-[#100d16] rounded-2xl border border-white/5">
            <p className="text-gray-400">Nenhum exercício encontrado para esta categoria.</p>
          </div>
        ) : (
          exercicios.map((ex) => (
            <div
              key={ex.id}
              className="flex items-center justify-between p-4 bg-[#100d16] hover:bg-[#16121e] border border-white/5 hover:border-purple-500/30 rounded-2xl transition cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                {/* Imagem / Ícone */}
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 overflow-hidden shrink-0">
                  {ex.foto ? (
                    <img src={ex.foto} alt={ex.nome} className="w-full h-full object-cover" />
                  ) : (
                    <Barbell size={24} />
                  )}
                </div>

                {/* Informações do Exercício */}
                <div>
                  <h3 className="font-bold text-base sm:text-lg group-hover:text-purple-300 transition">
                    {ex.nome}
                  </h3>
                  
                  {/* Texto meramente visual para Séries e Repetições */}
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                    4 séries × 10-12 reps
                  </p>
                </div>
              </div>

              <CaretRight size={20} className="text-gray-500 group-hover:text-purple-400 transition" />
            </div>
          ))
        )}
      </div>

      {/* Botão de Início */}
      <div className="mt-8 flex justify-center">
        <button className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-purple-600/30 transition transform hover:scale-105 active:scale-95 cursor-pointer">
          INICIAR TREINO
        </button>
      </div>
    </div>
  );
};

export default Exercicios;