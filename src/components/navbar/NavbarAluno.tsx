import {
    ListIcon,
    XIcon,
} from "@phosphor-icons/react";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";

function NavbarAluno() {

    const {
        menuAberto,
        alternarMenu,
        fecharMenu,
    } = useContext(NavContext);

    return (
        <header className="absolute fixed left-1/2 top-6 z-50 w-[calc(100%-32px)] max-w-[1180px] -translate-x-1/2">

            {/* NAVBAR */}
            <div className="flex h-[72px] items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl lg:px-7">

                {/* LOGO */}
                <Link
                    to="/homealuno"
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
                        to="/homealuno"
                        className="text-sm font-semibold text-white transition duration-300 hover:text-purple-400"
                    >
                        Início
                    </Link>

                    <Link
                        to="/categorias"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Treinos
                    </Link>

                    <Link
                        to="/exercicios"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Exercícios
                    </Link>

                    <Link
                        to="/perfil"
                        className="text-sm font-semibold text-white/70 transition duration-300 hover:text-purple-400"
                    >
                        Perfil
                    </Link>

                </nav>

                {/* DIREITA */}
                <div className="flex items-center gap-3">

                    {/* BOTÃO PERFIL */}
                    <Link
                        to="/"
                        className="hidden rounded-xl bg-white px-5 py-3 text-sm font-black text-black transition duration-300 hover:bg-purple-500 hover:text-white sm:block"
                    >
                        Sair
                    </Link>

                    {/* HAMBÚRGUER */}
                    <button
                        type="button"
                        onClick={alternarMenu}
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
                            to="/homealuno"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Início
                        </Link>

                        <Link
                            to="/categorias"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Treinos
                        </Link>

                        <Link
                            to="/exercicios"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Exercícios
                        </Link>

                        <Link
                            to="/perfil"
                            onClick={fecharMenu}
                            className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-purple-400"
                        >
                            Perfil
                        </Link>

                        <Link
                            to="/"
                            onClick={fecharMenu}
                            className="mt-2 flex items-center justify-center rounded-xl bg-purple-600 px-4 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-purple-500"
                        >
                            Sair
                        </Link>

                    </nav>

                </div>
            )}

        </header>
    );
}

export default NavbarAluno;