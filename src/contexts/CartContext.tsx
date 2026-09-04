import { createContext, type ReactNode, useState } from "react";
import { toast } from "react-toastify";

export interface PlanoCarrinho {
    id: number;
    name: string;
    description: string;
    price: number;
    features: string[];
    popular?: boolean;
}

export interface ItemCarrinho extends PlanoCarrinho {
    quantidade: number;
}

interface CartContextProps {
    adicionarPlano: (plano: PlanoCarrinho) => void;
    adicionarItem: (id: number) => void;
    removerItem: (id: number) => void;
    removerPlano: (id: number) => void;
    limparCart: () => void;

    abrirCart: () => void;
    fecharCart: () => void;

    items: ItemCarrinho[];
    quantidadeItems: number;
    valorTotal: number;
    cartAberto: boolean;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {

    const [items, setItems] = useState<ItemCarrinho[]>([]);
    const [cartAberto, setCartAberto] = useState(false);

    const quantidadeItems = items.reduce(
        (acc, item) => acc + item.quantidade,
        0
    );

    const valorTotal = items.reduce(
        (acc, item) => acc + item.price * item.quantidade,
        0
    );

    function adicionarPlano(plano: PlanoCarrinho) {

        const itemIndex = items.findIndex(
            (item) => item.id === plano.id
        );

        if (itemIndex !== -1) {

            const novoCart = [...items];

            novoCart[itemIndex].quantidade += 1;

            setItems(novoCart);

        } else {

            setItems((itensAtuais) => [
                ...itensAtuais,
                {
                    ...plano,
                    quantidade: 1,
                },
            ]);
        }

        setCartAberto(true);

        toast.success(`${plano.name} adicionado ao carrinho!`);
    }

    function adicionarItem(id: number) {

        const itemIndex = items.findIndex(
            (item) => item.id === id
        );

        if (itemIndex !== -1) {

            const novoCart = [...items];

            novoCart[itemIndex].quantidade += 1;

            setItems(novoCart);

        } else {

            toast.error("Plano não encontrado no carrinho!");
        }
    }

    function removerItem(id: number) {

        const itemIndex = items.findIndex(
            (item) => item.id === id
        );

        if (itemIndex !== -1) {

            const novoCart = [...items];

            if (novoCart[itemIndex].quantidade > 1) {

                novoCart[itemIndex].quantidade -= 1;

                setItems(novoCart);

            } else {

                novoCart.splice(itemIndex, 1);

                setItems(novoCart);
            }
        }
    }

    function removerPlano(id: number) {

        const existe = items.some(
            (item) => item.id === id
        );

        if (!existe) {
            toast.error("Plano não encontrado no carrinho!");
            return;
        }

        const novoCart = items.filter(
            (item) => item.id !== id
        );

        setItems(novoCart);

        toast.info("Plano removido do carrinho!");
    }

    function limparCart() {

        setItems([]);

        setCartAberto(false);

        toast.success("Compra efetuada com sucesso!");
    }

    function abrirCart() {
        setCartAberto(true);
    }

    function fecharCart() {
        setCartAberto(false);
    }

    return (
        <CartContext.Provider
            value={{
                adicionarPlano,
                adicionarItem,
                removerItem,
                removerPlano,
                limparCart,

                abrirCart,
                fecharCart,

                items,
                quantidadeItems,
                valorTotal,
                cartAberto,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}