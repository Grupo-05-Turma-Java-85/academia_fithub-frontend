import {
    PencilSimpleIcon,
    TrashIcon,
    BarbellIcon,
} from "@phosphor-icons/react";
import type Exercicio from "../../../models/Exercicio";


interface CardExerciciosProps {
    exercicio: Exercicio;
    onEditar: (exercicio: Exercicio) => void;
    onDeletar: (exercicio: Exercicio) => void;
}

export default function CardExercicios({
    exercicio,
    onEditar,
    onDeletar,
}: CardExerciciosProps) {

    return (
        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5 transition hover:border-purple-500/20">

            <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <BarbellIcon size={24} />
                    </div>

                    <div>

                        <h3 className="text-sm font-bold">
                            {exercicio.nome}
                        </h3>

                        <p className="mt-1 text-[10px] text-gray-600">
                            {exercicio.categoria?.nome || "Sem categoria"}
                        </p>

                        <p className="mt-2 text-[10px] text-gray-500">
                            Equipamento: {exercicio.equipamento}
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-2">

                    <button
                        onClick={() => onEditar(exercicio)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                        title="Editar exercício"
                    >
                        <PencilSimpleIcon size={15} />
                    </button>

                    <button
                        onClick={() => onDeletar(exercicio)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                        title="Excluir exercício"
                    >
                        <TrashIcon size={15} />
                    </button>

                </div>

            </div>

        </div>
    );
}