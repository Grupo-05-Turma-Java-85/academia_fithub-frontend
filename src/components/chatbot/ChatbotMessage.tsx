import { UserIcon } from "@phosphor-icons/react";

interface ChatbotMessageProps {
    mensagem: string;
    autor: "bot" | "usuario";
}

export default function ChatbotMessage({
    mensagem,
    autor,
}: ChatbotMessageProps) {
    const mensagemBot = autor === "bot";

    return (
        <div
            className={`flex items-end gap-2 ${mensagemBot ? "justify-start" : "justify-end"
                }`}
        >
            {mensagemBot && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <img
                        src="https://ik.imagekit.io/iibl43pgxp/suporte.png"
                        alt="Assistente FitGym"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                </div>
            )}

            <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${mensagemBot
                        ? "rounded-bl-md bg-[#18131f] text-neutral-200"
                        : "rounded-br-md bg-purple-600 text-white"
                    }`}
            >
                {mensagem}
            </div>

            {!mensagemBot && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-white">
                    <UserIcon size={17} weight="bold" />
                </div>
            )}
        </div>
    );
}