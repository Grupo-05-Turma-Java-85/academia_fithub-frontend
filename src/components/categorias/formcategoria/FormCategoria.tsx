import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar } from "../../../service/Service";

interface FormCategoriaProps {
    aberto: boolean;
    categoria?: Categoria | null;
    token: string;
    onFechar: () => void;
    onSucesso: () => void;
}

export default function FormCategoria({
    aberto,
    categoria,
    token,
    onFechar,
    onSucesso,
}: FormCategoriaProps) {

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    const modoEdicao = categoria !== null && categoria !== undefined;

    useEffect(() => {

        if (categoria) {

            setNome(categoria.nome);
            setDescricao(categoria.descricao);

        } else {

            setNome("");
            setDescricao("");

        }

    }, [categoria, aberto]);

    async function salvarCategoria(event: React.FormEvent) {

        event.preventDefault();

        if (!nome.trim() || !descricao.trim()) {
            toast.warning("Preencha todos os campos obrigatórios!");
            return;
        }

        const header = {
            headers: {
                Authorization: token,
            },
        };

        let dados;

        if (modoEdicao) {
            dados = {
                id: categoria?.id,
                nome: nome.trim(),
                descricao: descricao.trim(),
            };
        } else {
            dados = {
                nome: nome.trim(),
                descricao: descricao.trim(),
            };
        }
        try {

            if (modoEdicao) {

                await atualizar(
                    "/categorias",
                    dados,
                    () => { },
                    header
                );

                toast.success("Categoria atualizada com sucesso!");

            } else {

                await cadastrar(
                    "/categorias",
                    dados,
                    () => { },
                    header
                );

                toast.success("Categoria cadastrada com sucesso!");
            }

            onSucesso();
            onFechar();

        } catch (error) {

            console.error("ERRO CATEGORIA:", error);

            toast.error(
                modoEdicao
                    ? "Erro ao atualizar categoria!"
                    : "Erro ao cadastrar categoria!"
            );

        }

    }

    if (!aberto) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

            <div className="w-full rounded-2xl border border-white/10 bg-[#100d16] shadow-2xl">

                <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">

                    <div>

                        <p className="text-[9px] uppercase tracking-widest text-purple-400">
                            {modoEdicao ? "Editar" : "Nova categoria"}
                        </p>

                        <h2 className="mt-1 text-xl font-black">
                            {modoEdicao
                                ? "Editar categoria"
                                : "Adicionar categoria"}
                        </h2>

                    </div>

                    <button
                        type="button"
                        onClick={onFechar}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:bg-white/5 hover:text-white"
                    >
                        <XIcon size={18} />
                    </button>

                </div>

                <form
                    onSubmit={salvarCategoria}
                    className="space-y-5 p-6"
                >

                    <div className="grid grid-cols-2 gap-4">

                        <div className="col-span-2">

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Nome da categoria
                            </label>

                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Ex: Peito"
                                className="w-full rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                        <div className="col-span-2">

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Descrição
                            </label>

                            <textarea
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Descreva a categoria..."
                                rows={5}
                                className="w-full resize-none rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                    </div>

                    <div className="flex justify-end gap-3 border-t border-white/5 pt-5">

                        <button
                            type="button"
                            onClick={onFechar}
                            className="rounded-lg border border-white/5 px-5 py-3 text-[10px] font-bold text-gray-500 transition hover:bg-white/5 hover:text-white"
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-[10px] font-bold transition hover:bg-purple-500"
                        >
                            <CheckIcon size={15} weight="bold" />

                            {modoEdicao
                                ? "Salvar alterações"
                                : "Cadastrar categoria"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}
