import {
    MinusIcon,
    PlusIcon,
    TrashIcon,
} from "@phosphor-icons/react";

import { useContext } from "react";
import { CartContext, type ItemCarrinho } from "../../../contexts/CartContext";

interface CardCartProps {
    item: ItemCarrinho;
}

function CardCart({ item }: CardCartProps) {

    const {
        adicionarItem,
        removerItem,
        removerPlano,
    } = useContext(CartContext);

    const formatarPreco = (valor: number) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    const subtotal = item.price * item.quantidade;

    return (
        <div className="rounded-2xl border border-zinc-800 bg-[#100D17] p-5">

            <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">

                    <div className="flex items-center gap-2">

                        <h3 className="text-lg font-bold text-white">
                            Plano {item.name}
                        </h3>

                        {item.popular && (
                            <span className="rounded-full bg-purple-600/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-400">
                                Popular
                            </span>
                        )}

                    </div>

                    <p className="mt-1 text-sm text-zinc-400">
                        {item.description}
                    </p>

                </div>

                <button
                    onClick={() => removerPlano(item.id)}
                    className="shrink-0 text-zinc-500 transition hover:text-red-400"
                    title="Remover plano"
                >
                    <TrashIcon size={20} weight="bold" />
                </button>

            </div>

            <div className="mt-5">

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Benefícios
                </p>

                <div className="space-y-1">

                    {item.features.map((feature) => (
                        <p
                            key={feature}
                            className="text-sm text-zinc-300"
                        >
                            • {feature}
                        </p>
                    ))}

                </div>

            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-5">

                <div>

                    <p className="text-xs text-zinc-500">
                        Valor mensal
                    </p>

                    <p className="font-bold text-white">
                        {formatarPreco(item.price)}
                    </p>

                </div>

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => removerItem(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-purple-500 hover:text-purple-400"
                    >
                        <MinusIcon size={16} weight="bold" />
                    </button>

                    <span className="min-w-5 text-center font-bold text-white">
                        {item.quantidade}
                    </span>

                    <button
                        onClick={() => adicionarItem(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 text-zinc-300 transition hover:border-purple-500 hover:text-purple-400"
                    >
                        <PlusIcon size={16} weight="bold" />
                    </button>

                </div>

            </div>

            <div className="mt-4 flex items-center justify-between">

                <span className="text-sm text-zinc-400">
                    Subtotal
                </span>

                <span className="text-lg font-bold text-purple-400">
                    {formatarPreco(subtotal)}
                </span>

            </div>

        </div>
    );
}

export default CardCart;