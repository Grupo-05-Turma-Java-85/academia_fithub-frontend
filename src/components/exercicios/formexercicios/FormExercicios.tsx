import { XIcon, CheckIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type Categoria from "../../../models/Categoria";
import type Exercicio from "../../../models/Exercicio";
import { atualizar, cadastrar } from "../../../service/Service";



interface FormExerciciosProps {
    aberto: boolean;
    exercicio?: Exercicio | null;
    categorias: Categoria[];
    token: string;
    onFechar: () => void;
    onSucesso: () => void;
}

export default function FormExercicios({
    aberto,
    exercicio,
    categorias,
    token,
    onFechar,
    onSucesso,
}: FormExerciciosProps) {

    const [nome, setNome] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [foto, setFoto] = useState("");
    const [execucaoTecnica, setExecucaoTecnica] = useState("");
    const [categoriaId, setCategoriaId] = useState("");

    const modoEdicao = !!exercicio;

    useEffect(() => {

        if (exercicio) {

            setNome(exercicio.nome);
            setEquipamento(exercicio.equipamento);
            setFoto(exercicio.foto);
            setExecucaoTecnica(exercicio.execucaoTecnica);
            setCategoriaId(
                exercicio.categoria?.id
                    ? String(exercicio.categoria.id)
                    : ""
            );

        } else {

            setNome("");
            setEquipamento("");
            setFoto("");
            setExecucaoTecnica("");
            setCategoriaId("");

        }

    }, [exercicio, aberto]);

    async function salvarExercicio(event: React.FormEvent) {

        event.preventDefault();

        if (!nome || !equipamento || !execucaoTecnica || !categoriaId) {
            toast.warning("Preencha todos os campos obrigatórios!");
            return;
        }

        const header = {
            headers: {
                Authorization: token,
            },
        };

        const dados = {
            id: exercicio?.id || 0,
            nome,
            equipamento,
            foto,
            execucaoTecnica,
            categoria: {
                id: Number(categoriaId),
            },
        };

        try {

            if (modoEdicao) {

                await atualizar(
                    "/exercicios",
                    dados,
                    () => {},
                    header
                );

                toast.success("Exercício atualizado com sucesso!");

            } else {

                await cadastrar(
                    "/exercicios",
                    dados,
                    () => {},
                    header
                );

                toast.success("Exercício cadastrado com sucesso!");
            }

            onSucesso();
            onFechar();

        } catch (error) {

            console.error(error);
            toast.error(
                modoEdicao
                    ? "Erro ao atualizar exercício!"
                    : "Erro ao cadastrar exercício!"
            );

        }

    }

    if (!aberto) {
        return null;
    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">

            <div className="w-full  rounded-2xl border border-white/10 bg-[#100d16] shadow-2xl">

                {/* HEADER */}

                <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">

                    <div>

                        <p className="text-[9px] uppercase tracking-widest text-purple-400">
                            {modoEdicao ? "Editar" : "Novo exercício"}
                        </p>

                        <h2 className="mt-1 text-xl font-black">
                            {modoEdicao
                                ? "Editar exercício"
                                : "Adicionar exercício"}
                        </h2>

                    </div>

                    <button
                        onClick={onFechar}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-gray-500 transition hover:bg-white/5 hover:text-white"
                    >
                        <XIcon size={18} />
                    </button>

                </div>

                {/* FORMULÁRIO */}

                <form
                    onSubmit={salvarExercicio}
                    className="space-y-5 p-6"
                >

                    <div className="grid grid-cols-2 gap-4">

                        {/* NOME */}

                        <div className="col-span-2">

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Nome do exercício
                            </label>

                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                placeholder="Ex: Supino reto"
                                className="w-full rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                        {/* EQUIPAMENTO */}

                        <div>

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Equipamento
                            </label>

                            <input
                                type="text"
                                value={equipamento}
                                onChange={(e) => setEquipamento(e.target.value)}
                                placeholder="Ex: Barra"
                                className="w-full rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                        {/* CATEGORIA */}

                        <div>

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Categoria
                            </label>

                            <select
                                value={categoriaId}
                                onChange={(e) => setCategoriaId(e.target.value)}
                                className="w-full rounded-lg border border-white/5 bg-[#15111d] px-4 py-3 text-sm text-white outline-none transition focus:border-purple-500/40"
                            >

                                <option value="">
                                    Selecione uma categoria
                                </option>

                                {categorias.map((categoria) => (
                                    <option
                                        key={categoria.id}
                                        value={categoria.id}
                                    >
                                        {categoria.nome}
                                    </option>
                                ))}

                            </select>

                        </div>

                        {/* FOTO */}

                        <div className="col-span-2">

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                URL da foto
                            </label>

                            <input
                                type="text"
                                value={foto}
                                onChange={(e) => setFoto(e.target.value)}
                                placeholder="https://..."
                                className="w-full rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                        {/* EXECUÇÃO */}

                        <div className="col-span-2">

                            <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                Execução técnica
                            </label>

                            <textarea
                                value={execucaoTecnica}
                                onChange={(e) =>
                                    setExecucaoTecnica(e.target.value)
                                }
                                placeholder="Descreva como o exercício deve ser executado..."
                                rows={5}
                                className="w-full resize-none rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-purple-500/40"
                            />

                        </div>

                    </div>

                    {/* BOTÕES */}

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
                                : "Cadastrar exercício"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}