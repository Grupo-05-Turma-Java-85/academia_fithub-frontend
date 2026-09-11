import { useState } from "react";
import { PaperPlaneTiltIcon, XIcon } from "@phosphor-icons/react";
import { toast } from "react-toastify";

interface EmailModalProps {
    onClose: () => void;
}

export default function EmailModal({
    onClose,
}: EmailModalProps) {

    const [enviando, setEnviando] = useState(false);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        setEnviando(true);

        const formulario =
            event.currentTarget;

        const dados =
            new FormData(formulario);

        try {

            const resposta = await fetch(
                "https://formsubmit.co/ajax/262b7ac3975da85aa2e457f9ae065374",
                {
                    method: "POST",
                    body: dados,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (!resposta.ok) {
                throw new Error(
                    "Erro ao enviar formulário."
                );
            }

            toast.success(
                "Mensagem enviada com sucesso!"
            );

            formulario.reset();

            onClose();

        } catch (error) {

            console.error(
                "Erro ao enviar mensagem:",
                error
            );

            toast.error(
                "Não foi possível enviar a mensagem."
            );

        } finally {

            setEnviando(false);

        }
    };


    return (

        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={onClose}
        >

            <div
                className="relative w-full max-h-[90vh] max-w-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0D0A13] shadow-2xl shadow-black/50"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                {/* =========================
                    BOTÃO FECHAR
                ========================== */}

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar"
                    className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                >

                    <XIcon
                        size={20}
                        weight="bold"
                    />

                </button>


                {/* =========================
                    CABEÇALHO
                ========================== */}

                <div className="border-b border-white/10 px-6 pb-5 pt-7 sm:px-8">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">

                            <PaperPlaneTiltIcon
                                size={23}
                                weight="fill"
                                className="text-purple-400"
                            />

                        </div>


                        <div>

                            <h2 className="text-xl font-bold text-white">
                                Entre em contato
                            </h2>

                            <p className="mt-1 text-sm text-slate-400">
                                Envie sua dúvida para nossa equipe.
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    FORMULÁRIO
                ========================== */}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col p-6 sm:p-8"
                >

                    {/* =========================
                        CONFIGURAÇÕES FORMSUBMIT
                    ========================== */}

                    <input
                        type="hidden"
                        name="_subject"
                        value="Nova mensagem — FitGym"
                    />

                    <input
                        type="hidden"
                        name="_template"
                        value="table"
                    />


                    {/* =========================
                        NOME
                    ========================== */}

                    <div className="mb-5">

                        <label
                            htmlFor="support-name"
                            className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                            Nome
                        </label>

                        <input
                            id="support-name"
                            name="name"
                            type="text"
                            placeholder="Digite seu nome"
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/10"
                        />

                    </div>


                    {/* =========================
                        E-MAIL
                    ========================== */}

                    <div className="mb-5">

                        <label
                            htmlFor="support-email"
                            className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                            E-mail
                        </label>

                        <input
                            id="support-email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/10"
                        />

                    </div>


                    {/* =========================
                        MENSAGEM
                    ========================== */}

                    <div className="mb-6">

                        <label
                            htmlFor="support-message"
                            className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                            Mensagem
                        </label>

                        <textarea
                            id="support-message"
                            name="message"
                            rows={5}
                            placeholder="Digite sua mensagem..."
                            required
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition-all focus:border-purple-500 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/10"
                        />

                    </div>


                    {/* =========================
                        BOTÃO
                    ========================== */}

                    <button
                        type="submit"
                        disabled={enviando}
                        className="mt-auto flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/25 disabled:cursor-not-allowed disabled:opacity-60"
                    >

                        <PaperPlaneTiltIcon
                            size={20}
                            weight="fill"
                        />

                        {enviando
                            ? "Enviando..."
                            : "Enviar mensagem"}

                    </button>

                </form>

            </div>

        </div>
    );
}