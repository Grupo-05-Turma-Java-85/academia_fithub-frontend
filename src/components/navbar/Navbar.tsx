import {
    ListIcon,
    XIcon,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => {
        setMenuAberto(false);
    };


    return (
        <header className="absolute fixed left-1/2 top-6 z-50 w-[calc(100%-32px)] max-w-[1180px] -translate-x-1/2">

            {/* NAVBAR */}
            <div className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl lg:px-7">

                {/* LOGO */}
                <Link
                    to="/"
                    onClick={fecharMenu}
                    className="shrink-0 text-2xl font-black tracking-[-0.05em] text-white"
                >
                    FIT
                    <span className="text-purple-500">
                        GYM
                    </span>
                </Link>

                {/* LINKS DESKTOP */}
                <nav className="hidden items-center gap-8 lg:flex">

                    <Link
                        to="/"
                        className="text-sm font-semibold text-white transition duration-300 hover:text-purple-400"
                    >
                        Início
                    </Link>

                    <Link 
                        to="/sobre"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Sobre
                    </Link>

                    <Link
                        to="/suporte"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Suporte
                    </Link>

                    <Link
                        to="/treinos"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Treinos
                    </Link>

                </nav>

                {/* DIREITA */}
                <div className="flex items-center gap-3">

                    {/* JÁ SOU ALUNO */}
                    <Link
                        to="/login"
                        className="hidden rounded-xl bg-white px-5 py-3 text-sm font-black text-black transition duration-300 hover:bg-purple-500 hover:text-white sm:block"
                    >
                        Já sou alune
                    </Link>
                    <Link
                        to="/login"
                        className="hidden rounded-xl bg-white px-5 py-3 text-sm font-black text-black transition duration-300 hover:bg-purple-500 hover:text-white sm:block"
                    >
                        Seja Franqueade
                    </Link>

                    {/* HAMBÚRGUER */}
                    <button
                        type="button"
                        onClick={() => setMenuAberto(!menuAberto)}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 lg:hidden"
                        aria-label={
                            menuAberto
                                ? "Fechar menu"
                                : "Abrir menu"
                        }
                        aria-expanded={menuAberto}
                    >
                        {menuAberto ? (
                            <XIcon
                                size={24}
                                weight="bold"
                            />
                        ) : (
                            <ListIcon
                                size={24}
                                weight="bold"
                            />
                        )}
                    </button>

                </div>

            </div>

            {/* MENU MOBILE */}
            {menuAberto && (
                <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#180D24]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">

                    <nav className="flex flex-col">

                        <Link
                            to="/"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Início
                        </Link>

                        <a
                            href="/#beneficios"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Benefícios
                        </a>

                        <a
                            href="/#planos"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Planos
                        </a>

                        <Link
                            to="/treinos"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Treinos
                        </Link>

                        {/* BOTÃO LOGIN MOBILE */}
                        <Link
                            to="/login"
                            onClick={fecharMenu}
                            className="mt-2 flex items-center justify-center rounded-xl bg-purple-600 px-4 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-purple-500"
                        >
                            Já sou aluno
                        </Link>

                    </nav>

                </div>
            )}

        </header>
    );
}

export default Navbar;