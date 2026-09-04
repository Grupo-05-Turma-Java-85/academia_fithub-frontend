
import {
    PencilSimpleIcon,
    TrashIcon,
    FolderIcon,
} from "@phosphor-icons/react";

import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
    categoria: Categoria;
    onEditar: (categoria: Categoria) => void;
    onDeletar: (categoria: Categoria) => void;
}

export default function CardCategoria({
    categoria,
    onEditar,
    onDeletar,
}: CardCategoriaProps) {

    return (
        <div className="rounded-xl border border-white/5 bg-[#100d16] p-5 transition hover:border-purple-500/20">

            <div className="flex items-start justify-between gap-4">

                <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <FolderIcon size={24} />
                    </div>

                    <div>

                        <h3 className="text-sm font-bold">
                            {categoria.nome}
                        </h3>

                        <p className="mt-1 text-[10px] text-gray-600">
                            Categoria
                        </p>

                        <p className="mt-2 text-[10px] text-gray-500">
                            {categoria.descricao || "Sem descrição"}
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-2">

                    <button
                        type="button"
                        onClick={() => onEditar(categoria)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-400"
                        title="Editar categoria"
                    >
                        <PencilSimpleIcon size={15} />
                    </button>

                    <button
                        type="button"
                        onClick={() => onDeletar(categoria)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                        title="Excluir categoria"
                    >
                        <TrashIcon size={15} />
                    </button>

                </div>

            </div>

        </div>
    );
}
