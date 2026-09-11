import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "../../contexts/ThemeContext";

function ThemeToggle() {
    const { tema, alternarTema } = useTheme();
    const modoClaro = tema === "claro";

    return (
        <button
            type="button"
            onClick={alternarTema}
            className="theme-toggle flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400"
            aria-label={modoClaro ? "Ativar modo escuro" : "Ativar modo claro"}
            title={modoClaro ? "Modo escuro" : "Modo claro"}
        >
            {modoClaro ? (
                <MoonIcon size={21} weight="bold" />
            ) : (
                <SunIcon size={21} weight="bold" />
            )}
        </button>
    );
}

export default ThemeToggle;
