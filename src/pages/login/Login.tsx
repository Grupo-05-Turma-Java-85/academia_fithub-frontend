import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    EnvelopeSimple,
    LockKey,
    Barbell,
    ArrowRight,
} from "@phosphor-icons/react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { handleLogin, isLoading } = useContext(AuthContext);

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Preencha todos os campos!");
            return;
        }

        const usuarioLogin = {
            usuario: email,
            senha: password,
        };

        const usuarioAutenticado = await handleLogin(
            usuarioLogin as any
        );

        if (!usuarioAutenticado) {
            return;
        }

        if (usuarioAutenticado.tipoUsuario === 1) {
            navigate("/homealuno");
            return;
        }

        if (usuarioAutenticado.tipoUsuario === 2) {
            navigate("/homeadmin");
            return;
        }

        toast.error("Tipo de usuário inválido.");
    };

    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0b0b0e] px-6 py-10 text-neutral-200">

            {/* GLOW SUPERIOR DIREITO */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-120px]
                    top-[-120px]
                    h-[650px]
                    w-[650px]
                    rounded-full
                    bg-purple-700/20
                    blur-[150px]
                "
            />

            {/* GLOW INFERIOR ESQUERDO */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    left-[-180px]
                    h-[650px]
                    w-[650px]
                    rounded-full
                    bg-purple-700/20
                    blur-[150px]
                "
            />

            {/* GLOW CENTRAL */}
            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[450px]
                    w-[450px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-900/10
                    blur-[150px]
                "
            />

            {/* CONTEÚDO */}
            <div className="relative z-10 flex w-full max-w-[600px] flex-col items-center">

                {/* LOGO */}
                <div className="mb-8 flex flex-col items-center text-center">

                    <div className="mb-3 flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                            <Barbell
                                size={34}
                                weight="bold"
                                className="-rotate-45 text-[#a855f7]"
                            />
                        </div>

                        <h1 className="flex text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
                            FIT
                            <span className="text-purple-500">
                                GYM
                            </span>
                        </h1>

                    </div>

                    <p className="text-base font-medium text-neutral-400">
                        Desbloqueie seu desempenho máximo.
                    </p>

                </div>

                {/* CARD */}
                <div
                    className="
                        w-full
                        max-w-[520px]
                        rounded-3xl
                        border
                        border-neutral-800/80
                        bg-[#121316]
                        p-8
                        shadow-2xl
                        shadow-purple-950/30
                        sm:p-10
                        lg:p-12
                    "
                >

                    {/* TÍTULO */}
                    <div className="mb-8">

                        <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                            Bem-vindo de volta
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-neutral-500 lg:text-base">
                            Entre na sua conta para continuar sua evolução.
                        </p>

                    </div>

                    <form
                        onSubmit={handleLoginSubmit}
                        className="flex flex-col gap-6"
                    >

                        {/* E-MAIL */}
                        <div>

                            <label
                                htmlFor="email"
                                className="mb-2.5 block text-sm font-semibold text-neutral-300"
                            >
                                Endereço de E-mail
                            </label>

                            <div
                                className="
                                    flex
                                    h-14
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-4
                                    transition-all
                                    duration-300
                                    focus-within:border-purple-500
                                    focus-within:bg-[#1b1a20]
                                "
                            >

                                <EnvelopeSimple
                                    size={22}
                                    weight="regular"
                                    className="mr-3.5 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="atleta@exemplo.com"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-base
                                        font-medium
                                        text-white
                                        outline-none
                                        placeholder:text-neutral-600
                                    "
                                />

                            </div>

                        </div>

                        {/* SENHA */}
                        <div>

                            <label
                                htmlFor="password"
                                className="mb-2.5 block text-sm font-semibold text-neutral-300"
                            >
                                Senha
                            </label>

                            <div
                                className="
                                    flex
                                    h-14
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-4
                                    transition-all
                                    duration-300
                                    focus-within:border-purple-500
                                    focus-within:bg-[#1b1a20]
                                "
                            >

                                <LockKey
                                    size={22}
                                    weight="regular"
                                    className="mr-3.5 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-base
                                        text-white
                                        outline-none
                                        placeholder:text-neutral-600
                                    "
                                />

                            </div>

                        </div>

                        {/* BOTÃO */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="
                                mt-1
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-[#7c3aed]
                                text-base
                                font-bold
                                text-white
                                shadow-lg
                                shadow-purple-600/30
                                transition-all
                                duration-200
                                hover:bg-[#6d28d9]
                                hover:shadow-purple-600/40
                                active:scale-[0.98]
                                disabled:opacity-50
                            "
                        >
                            {isLoading ? "Entrando..." : "Entrar"}

                            {!isLoading && (
                                <ArrowRight
                                    size={20}
                                    weight="bold"
                                />
                            )}
                        </button>

                    </form>

                </div>

                {/* PARTE INFERIOR */}
                <div className="mt-7 flex flex-col items-center gap-4 text-center">

                    <p className="text-base font-medium text-neutral-300">

                        Não tem uma conta?{" "}

                        <Link
                            to="/cadastrar"
                            className="
                                font-bold
                                text-purple-300
                                underline
                                underline-offset-4
                                transition
                                hover:text-purple-200
                            "
                        >
                            Cadastre-se
                        </Link>

                    </p>

                    <div className="flex items-center gap-3 text-xs font-medium text-neutral-500">

                        <p className="transition hover:text-neutral-300">
                            Termos de Uso
                        </p>

                        <span>•</span>

                        <p className="transition hover:text-neutral-300">
                            Política de Privacidade
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}
