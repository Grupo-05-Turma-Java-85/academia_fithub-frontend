import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Tema = "escuro" | "claro";

type ThemeContextType = {
    tema: Tema;
    alternarTema: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [tema, setTema] = useState<Tema>(() => {
        const salvo = localStorage.getItem("fitgym-tema");
        return salvo === "claro" ? "claro" : "escuro";
    });

    useEffect(() => {
        const html = document.documentElement;

        html.classList.toggle("light-theme", tema === "claro");

        html.style.colorScheme =
            tema === "claro" ? "light" : "dark";

        localStorage.setItem("fitgym-tema", tema);
    }, [tema]);

    const alternarTema = () => {
        setTema((atual) =>
            atual === "escuro" ? "claro" : "escuro"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                tema,
                alternarTema,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme deve ser usado dentro de ThemeProvider"
        );
    }

    return context;
}