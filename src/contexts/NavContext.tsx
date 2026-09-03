import { createContext, useState, type ReactNode } from "react";

interface NavContextProps {
    menuAberto: boolean;
    abrirMenu(): void;
    fecharMenu(): void;
    alternarMenu(): void;
}

interface NavProviderProps {
    children: ReactNode;
}

export const NavContext = createContext({} as NavContextProps);

export function NavProvider({ children }: NavProviderProps) {

    const [menuAberto, setMenuAberto] = useState(false);

    function abrirMenu() {
        setMenuAberto(true);
    }

    function fecharMenu() {
        setMenuAberto(false);
    }

    function alternarMenu() {
        setMenuAberto(prev => !prev);
    }

    return (
        <NavContext.Provider
            value={{
                menuAberto,
                abrirMenu,
                fecharMenu,
                alternarMenu,
            }}
        >
            {children}
        </NavContext.Provider>
    );
}