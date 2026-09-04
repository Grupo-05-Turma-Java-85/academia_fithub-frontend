import {
    ShoppingCartIcon,
    XIcon,
    CreditCardIcon,
} from "@phosphor-icons/react";

import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CardCart from "../../carrinho/cartcard/CartCard";

function Cart() {

    const {
        items,
        quantidadeItems,
        valorTotal,
        cartAberto,
        fecharCart,
        limparCart,
    } = useContext(CartContext);

    const formatarPreco = (valor: number) => {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    };

    if (!cartAberto) {
        return null;
    }

    return (
        <>
            {/* Fundo transparente/escuro */}
            <div
                onClick={fecharCart}
                className="fixed inset-0 z-40 bg-black/40"
            />

            {/* Drawer */}
            <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[430px] flex-col border-l border-zinc-800 bg-[#08060D] shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/10 text-purple-400">

                            <ShoppingCartIcon
                                size={22}
                                weight="bold"
                            />

                        </div>

                        <div>

                            <h2 className="text-lg font-bold text-white">
                                Detalhes da Compra
                            </h2>

                            <p className="text-xs text-zinc-500">
                                {quantidadeItems}{" "}
                                {quantidadeItems === 1
                                    ? "plano"
                                    : "planos"}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={fecharCart}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                    >
                        <XIcon size={22} weight="bold" />
                    </button>

                </div>

                {/* Conteúdo */}
                <div className="flex-1 overflow-y-auto p-5">

                    {items.length === 0 ? (

                        <div className="flex h-full flex-col items-center justify-center text-center">

                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10 text-purple-400">

                                <ShoppingCartIcon
                                    size={38}
                                    weight="duotone"
                                />

                            </div>

                            <h3 className="text-lg font-bold text-white">
                                Seu carrinho está vazio
                            </h3>

                            <p className="mt-2 max-w-[280px] text-sm leading-6 text-zinc-500">
                                Escolha um dos nossos planos para começar sua jornada.
                            </p>

                            <button
                                onClick={fecharCart}
                                className="mt-6 rounded-xl bg-purple-600 px-6 py-3 font-bold text-white transition hover:bg-purple-500"
                            >
                                Ver planos
                            </button>

                        </div>

                    ) : (

                        <div className="space-y-4">

                            {items.map((item) => (
                                <CardCart
                                    key={item.id}
                                    item={item}
                                />
                            ))}

                        </div>

                    )}

                </div>

                {/* Rodapé */}
                {items.length > 0 && (

                    <div className="border-t border-zinc-800 bg-[#0D0A12] p-6">

                        <div className="mb-5 space-y-3">

                            <div className="flex items-center justify-between">

                                <span className="text-sm text-zinc-400">
                                    Planos
                                </span>

                                <span className="text-sm font-semibold text-white">
                                    {quantidadeItems}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-base font-semibold text-zinc-300">
                                    Total
                                </span>

                                <span className="text-2xl font-black text-purple-400">
                                    {formatarPreco(valorTotal)}
                                </span>

                            </div>

                        </div>

                        <button
                            onClick={limparCart}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 font-bold text-white transition hover:bg-purple-500"
                        >
                            <CreditCardIcon
                                size={20}
                                weight="bold"
                            />

                            Finalizar compra
                        </button>

                    </div>

                )}

            </aside>
        </>
    );
}

export default Cart;