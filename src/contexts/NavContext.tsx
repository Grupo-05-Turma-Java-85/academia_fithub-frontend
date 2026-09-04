import { createContext, useState, type ReactNode} from "react";
import { useLocation} from "react-router-dom";

interface NavContextProps {

    menuAberto: boolean;

    abrirMenu(): void;

    fecharMenu(): void;

    alternarMenu(): void;

    mostrarNavbar: boolean;

    tipoNavbar: "publica" | "aluno" | "admin" | "nenhuma";
}

interface NavProviderProps {

    children: ReactNode;
}

export const NavContext = createContext({} as NavContextProps);

export function NavProvider({ children }: NavProviderProps) {

    const [menuAberto, setMenuAberto] = useState(false);

    const location = useLocation();

    function abrirMenu() {

        setMenuAberto(true);
    }

    function fecharMenu() {

        setMenuAberto(false);
    }

    function alternarMenu() {

        setMenuAberto(prev => !prev);
    }

    function definirTipoNavbar():
        "publica" | "aluno" | "admin" | "nenhuma" {

        const caminho = location.pathname;

        if (
            caminho === "/login" ||
            caminho === "/cadastrar"
        ) {
            return "nenhuma";
        }

        if (
            caminho.startsWith("/homeadmin")
        ) {
            return "admin";
        }

        if (
            caminho.startsWith("/homealuno") ||
            caminho.startsWith("/perfil") ||
            caminho.startsWith("/exercicios") ||
            caminho.startsWith("/categorias") ||
            caminho.startsWith("/exercicio/:id")
        ) {
            return "aluno";
        }

        return "publica";
    }

    const tipoNavbar = definirTipoNavbar();

    const mostrarNavbar = tipoNavbar !== "nenhuma";

    return (
        <NavContext.Provider
            value={{
                menuAberto,
                abrirMenu,
                fecharMenu,
                alternarMenu,
                mostrarNavbar,
                tipoNavbar,
            }}
        >
            {children}
        </NavContext.Provider>
    );
}