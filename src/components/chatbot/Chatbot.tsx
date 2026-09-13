import { useEffect, useRef, useState } from "react";
import {
    ArrowUpIcon,
    XIcon,
} from "@phosphor-icons/react";
import ChatbotMessage from "./ChatbotMessage";

interface Mensagem {
    id: number;
    texto: string;
    autor: "bot" | "usuario";
}

interface ChatbotProps {
    aberto: boolean;
    onClose: () => void;
}

function gerarResposta(mensagem: string): string {
    const texto = mensagem.toLowerCase().trim();

    if (
        texto.includes("olá") ||
        texto.includes("ola") ||
        texto.includes("oi") ||
        texto.includes("hey") ||
        texto.includes("oii") ||
        texto.includes("oie")
    ) {
        return "Olá! Que bom ter você por aqui! Como posso ajudar?";
    }

    if (
        texto.includes("treino") ||
        texto.includes("treinos") ||
        texto.includes("exercício") ||
        texto.includes("exercicio") ||
        texto.includes("exercicios") ||
        texto.includes("exercícios")
    ) {
        return "No FitGym você pode consultar diferentes exercícios e categorias para montar seu treino na página do aluno.";
    }

    if (
        texto.includes("categoria") ||
        texto.includes("categorias")
    ) {
        return "Você pode acessar as categorias de exercícios para encontrar os exercícios organizados de acordo com cada grupo, mas precisa estar cadastrado antes.";
    }

    if (
        texto.includes("nutrição") ||
        texto.includes("nutricao") ||
        texto.includes("comida") ||
        texto.includes("alimentação") ||
        texto.includes("alimentacao")
    ) {
        return "O FitGym também possui uma área voltada para alimentação e produtos fitness. Confira o Delivery Fit para conhecer as opções disponíveis.";
    }

    if (
        texto.includes("perfil") ||
        texto.includes("conta")
    ) {
        return "Para acessar suas informações, entre na área de Perfil depois de fazer login.";
    }

    if (
        texto.includes("login") ||
        texto.includes("entrar")
    ) {
        return "Você pode acessar sua conta pela opção 'Já sou alune' no menu principal.";
    }

    if (
        texto.includes("suporte") ||
        texto.includes("ajuda")
    ) {
        return "Você já está no nosso suporte! Se precisar de atendimento direto, também pode falar conosco pelo WhatsApp ou enviar um e-mail.";
    }

    if (
        texto.includes("whatsapp") ||
        texto.includes("whats")
    ) {
        return "Você pode falar diretamente com nossa equipe pelo WhatsApp através do card de atendimento disponível nesta página.";
    }

    if (
        texto.includes("email") ||
        texto.includes("e-mail") ||
        texto.includes("e mail")
    ) {
        return "Você pode enviar uma mensagem para nossa equipe através do formulário de e-mail disponível na página de suporte, responderemos o mais rápido possível.";
    }

    if (
        texto.includes("fitgym") ||
        texto.includes("academia")
    ) {
        return "O FitGym é uma plataforma criada para facilitar o acesso a treinos, exercícios, categorias e recursos para alunos.";
    }

    if (
        texto.includes("planos") ||
        texto.includes("plano") ||
        texto.includes("adquirir plano") ||
        texto.includes("adquirir planos")
    ) {
        return "Na nossa home principal você pode checar nossos planos, mas caso ainda tenha dúvidas: entre em contato pelo whats.";
    }

    if (
        texto.includes("ata") ||
        texto.includes("entendi") ||
        texto.includes("ok")
    ) {
        return "Posso ajudar em mais alguma coisa?";
    }

    if (
        texto.includes("sim") ||
        texto.includes("na vdd sim") ||
        texto.includes("claro")
    ) {
        return "Qual seria a dúvida?";
    }

    if (
        texto.includes("obrigado") ||
        texto.includes("obrigada") ||
        texto.includes("valeu") || 
        texto.includes("não valeu") ||
        texto.includes("nao obg") ||
        texto.includes("nao") ||
        texto.includes("tchau") ||
        texto.includes("ok obg") ||
        texto.includes("vlw")
    ) {
        return "Certo! Estou sempre por aqui quando precisar.";
    }

    return "Hmm... ainda estou aprendendo sobre isso! Tente perguntar sobre treinos, exercícios, categorias, perfil, login ou suporte.";
}

export default function Chatbot({
    aberto,
    onClose,
}: ChatbotProps) {
    const [mensagens, setMensagens] = useState<Mensagem[]>([
        {
            id: 1,
            texto: "Olá! Sou o gatinho assistente do FitGym. Como posso ajudar você?",
            autor: "bot",
        },
    ]);

    const [texto, setTexto] = useState("");
    const [carregando, setCarregando] = useState(false);

    const mensagensRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (aberto) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [aberto]);

    useEffect(() => {
        if (mensagensRef.current) {
            mensagensRef.current.scrollTop =
                mensagensRef.current.scrollHeight;
        }
    }, [mensagens, carregando]);

    const enviarMensagem = async () => {
        const mensagem = texto.trim();

        if (!mensagem || carregando) {
            return;
        }

        const novaMensagem: Mensagem = {
            id: Date.now(),
            texto: mensagem,
            autor: "usuario",
        };

        setMensagens((anteriores) => [
            ...anteriores,
            novaMensagem,
        ]);

        setTexto("");
        setCarregando(true);

        setTimeout(() => {
            const resposta: Mensagem = {
                id: Date.now() + 1,
                texto: gerarResposta(mensagem),
                autor: "bot",
            };

            setMensagens((anteriores) => [
                ...anteriores,
                resposta,
            ]);

            setCarregando(false);
        }, 800);
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            event.preventDefault();
            enviarMensagem();
        }
    };

    if (!aberto) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-end bg-black/40 p-4 backdrop-blur-[2px] sm:items-end sm:p-6">
            <div
                className="flex h-[min(680px,calc(100vh-32px))] w-full max-w-[430px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0D0A13] shadow-2xl shadow-black/50"
                onClick={(event) => event.stopPropagation()}
            >
                {/* CABEÇALHO */}
                <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                            <img
                                src="https://ik.imagekit.io/iibl43pgxp/suporte.png"
                                alt="Assistente FitGym"
                                className="h-11 w-11 rounded-full object-cover"
                            />
                        </div>

                        <div>
                            <h2 className="text-base font-bold text-white">
                                Assistente FitGym
                            </h2>

                            <div className="mt-1 flex items-center gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-green-400" />

                                <span className="text-xs text-neutral-400">
                                    Online agora
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar chatbot"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-400 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                    >
                        <XIcon
                            size={19}
                            weight="bold"
                        />
                    </button>
                </div>

                {/* MENSAGENS */}
                <div
                    ref={mensagensRef}
                    className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-5 sm:px-5"
                >
                    {mensagens.map((mensagem) => (
                        <ChatbotMessage
                            key={mensagem.id}
                            mensagem={mensagem.texto}
                            autor={mensagem.autor}
                        />
                    ))}

                    {carregando && (
                        <div className="flex items-end gap-2">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                                <img
                                    src="https://ik.imagekit.io/iibl43pgxp/suporte.png"
                                    alt="Assistente FitGym"
                                    className="h-11 w-11 rounded-full object-cover"
                                />
                            </div>

                            <div className="rounded-2xl rounded-bl-md bg-[#18131f] px-4 py-3">
                                <div className="flex gap-1">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:150ms]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:300ms]" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* SUGESTÕES */}
                <div className="flex shrink-0 gap-2 overflow-x-auto px-4 pb-3 sm:px-5">
                    <button
                        type="button"
                        onClick={() => {
                            setTexto("Como posso encontrar exercícios?");
                        }}
                        className="shrink-0 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-2 text-xs text-purple-300 transition hover:bg-purple-500/10"
                    >
                        Exercícios
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setTexto("Preciso de ajuda com meu perfil");
                        }}
                        className="shrink-0 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-2 text-xs text-purple-300 transition hover:bg-purple-500/10"
                    >
                        Perfil
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setTexto("Como falar com o suporte?");
                        }}
                        className="shrink-0 rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-2 text-xs text-purple-300 transition hover:bg-purple-500/10"
                    >
                        Suporte
                    </button>
                </div>

                {/* CAMPO DE MENSAGEM */}
                <div className="shrink-0 border-t border-white/10 p-4 sm:p-5">
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-purple-500/50 focus-within:ring-4 focus-within:ring-purple-500/10">
                        <input
                            ref={inputRef}
                            type="text"
                            value={texto}
                            onChange={(event) =>
                                setTexto(event.target.value)
                            }
                            onKeyDown={handleKeyDown}
                            placeholder="Digite sua mensagem..."
                            disabled={carregando}
                            className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-white outline-none placeholder:text-neutral-500 disabled:opacity-60"
                        />

                        <button
                            type="button"
                            onClick={enviarMensagem}
                            disabled={!texto.trim() || carregando}
                            aria-label="Enviar mensagem"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            <ArrowUpIcon
                                size={18}
                                weight="bold"
                            />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}