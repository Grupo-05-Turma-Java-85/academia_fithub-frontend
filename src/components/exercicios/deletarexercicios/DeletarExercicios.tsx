import {
    TrashIcon,
    XIcon,
    WarningIcon,
} from "@phosphor-icons/react";

import { toast } from "react-toastify";
import type Exercicio from "../../../models/Exercicio";
import { deletar } from "../../../service/Service";


interface DeletarExerciciosProps {
    aberto: boolean;
    exercicio: Exercicio | null;
    token: string;
    onFechar: () => void;
    onSucesso: () => void;
}

export default function DeletarExercicios({
    aberto,
    exercicio,
    token,
    onFechar,
    onSucesso,
}: DeletarExerciciosProps) {

    if (!aberto || !exercicio) {
        return null;
    }

    async function confirmarExclusao() {

        const header = {
            headers: {
                Authorization: token,
            },
        };

        try {

            if (!exercicio) return;

            await deletar(
                `/exercicios/${exercicio.id}`,
                header
            );
            toast.success("Exercício excluído com sucesso!");

            onSucesso();
            onFechar();

        } catch (error) {

            console.error(error);

            toast.error("Erro ao excluir exercício!");

        }

    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

            <div className="w-full rounded-2xl border border-white/10 bg-[#100d16] shadow-2xl">

                <div className="p-6">

                    <div className="flex items-center justify-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                            <WarningIcon size={28} />
                        </div>

                    </div>

                    <div className="mt-5 text-center">

                        <h2 className="text-xl font-black">
                            Excluir exercício?
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Você tem certeza que deseja excluir o exercício{" "}
                            <span className="font-bold text-white">
                                {exercicio.nome}
                            </span>
                            ?
                        </p>

                        <p className="mt-2 text-[10px] text-gray-700">
                            Essa ação não poderá ser desfeita.
                        </p>

                    </div>

                    <div className="mt-7 flex gap-3">

                        <button
                            onClick={onFechar}
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/5 py-3 text-[10px] font-bold text-gray-500 transition hover:bg-white/5 hover:text-white"
                        >
                            <XIcon size={15} />
                            Cancelar
                        </button>

                        <button
                            onClick={confirmarExclusao}
                            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-[10px] font-bold transition hover:bg-red-500"
                        >
                            <TrashIcon size={15} />
                            Excluir
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}