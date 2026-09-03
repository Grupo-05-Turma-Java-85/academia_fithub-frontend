import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    User,
    EnvelopeSimple,
    LockKey,
    Barbell,
    ArrowRight,
    Hourglass,
    Ruler,
} from "@phosphor-icons/react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Register() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Validação dos campos
        if (!nome || !email || !password || !confirmPassword || !peso || !altura) {
            toast.error("Preencha todos os campos!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("As senhas não coincidem!");
            return;
        }

        setLoading(true);

        // 2. Mapeamento para os campos idênticos ao Java
        const payload = {
            nome: nome,
            usuario: email, // Mapeia o e-mail no campo 'usuario' do Spring Boot
            senha: password,
            peso: parseFloat(peso.replace(",", ".")),
            altura: parseFloat(altura.replace(",", "."))
        };

        try {
            // 3. Chamada via Axios para cadastrar
            await axios.post("http://localhost:8080/usuarios/cadastrar", payload);

            toast.success("Cadastro realizado com sucesso!");
            navigate("/login");
        } catch (error: any) {
            console.error("Erro no cadastro:", error);
            const msgErro = error.response?.data?.message || "Erro ao realizar cadastro. Tente novamente!";
            toast.error(msgErro);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0b0b0e] px-4 py-8 text-neutral-200">

            {/* GLOW SUPERIOR DIREITO */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-purple-700/20
                    blur-[130px]
                "
            />

            {/* GLOW INFERIOR ESQUERDO */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-150px]
                    left-[-150px]
                    h-[550px]
                    w-[550px]
                    rounded-full
                    bg-purple-700/20
                    blur-[130px]
                "
            />

            {/* CONTEÚDO */}
            <div className="relative z-10 flex w-full flex-col items-center">

                {/* LOGO */}
                <div className="mb-6 flex flex-col items-center text-center sm:mb-8">

                    <div className="mb-2 flex items-center gap-3">

                        <Barbell
                            size={32}
                            weight="bold"
                            className="-rotate-45 text-[#a855f7]"
                        />

                        <h1 className="flex text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                            FIT
                            <span className="text-purple-500">
                                GYM
                            </span>
                        </h1>

                    </div>

                    <p className="text-sm font-medium text-neutral-400 sm:text-base">
                        Desbloqueie seu desempenho máximo.
                    </p>

                </div>

                {/* CARD */}
                <div
                    className="
                        w-full
                        max-w-[420px]
                        rounded-2xl
                        border
                        border-neutral-800/80
                        bg-[#121316]
                        p-6
                        shadow-2xl
                        shadow-purple-950/20
                        sm:p-8
                    "
                >

                    {/* TÍTULO */}
                    <div className="mb-6">

                        <h2 className="text-2xl font-bold text-white">
                            Crie sua conta
                        </h2>

                        <p className="mt-1 text-sm text-neutral-500">
                            Cadastre-se para começar sua evolução.
                        </p>

                    </div>

                    <form
                        onSubmit={handleRegister}
                        className="flex flex-col gap-4"
                    >

                        {/* NOME */}
                        <div>
                            <label
                                htmlFor="nome"
                                className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                            >
                                Nome completo
                            </label>

                            <div
                                className="
                                    flex
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-3.5
                                    py-2.5
                                    transition-colors
                                    focus-within:border-purple-500
                                "
                            >
                                <User
                                    size={20}
                                    weight="regular"
                                    className="mr-3 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="nome"
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Seu nome"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-sm
                                        font-medium
                                        text-white
                                        outline-none
                                        placeholder:text-neutral-600
                                    "
                                />
                            </div>
                        </div>

                        {/* E-MAIL */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                            >
                                Endereço de E-mail
                            </label>

                            <div
                                className="
                                    flex
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-3.5
                                    py-2.5
                                    transition-colors
                                    focus-within:border-purple-500
                                "
                            >
                                <EnvelopeSimple
                                    size={20}
                                    weight="regular"
                                    className="mr-3 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="atleta@exemplo.com"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-sm
                                        font-medium
                                        text-white
                                        outline-none
                                        placeholder:text-neutral-600
                                    "
                                />
                            </div>
                        </div>

                        {/* GRID PESO E ALTURA */}
                        <div className="grid grid-cols-2 gap-3">
                            {/* PESO */}
                            <div>
                                <label
                                    htmlFor="peso"
                                    className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                                >
                                    Peso (kg)
                                </label>
                                <div className="flex items-center rounded-xl border border-neutral-800 bg-[#18191c] px-3 py-2.5 transition-colors focus-within:border-purple-500">
                                    <Hourglass size={18} className="mr-2 shrink-0 text-purple-300/80" />
                                    <input
                                        id="peso"
                                        type="text"
                                        value={peso}
                                        onChange={(e) => setPeso(e.target.value)}
                                        placeholder="75.0"
                                        className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-neutral-600"
                                    />
                                </div>
                            </div>

                            {/* ALTURA */}
                            <div>
                                <label
                                    htmlFor="altura"
                                    className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                                >
                                    Altura (cm)
                                </label>
                                <div className="flex items-center rounded-xl border border-neutral-800 bg-[#18191c] px-3 py-2.5 transition-colors focus-within:border-purple-500">
                                    <Ruler size={18} className="mr-2 shrink-0 text-purple-300/80" />
                                    <input
                                        id="altura"
                                        type="text"
                                        value={altura}
                                        onChange={(e) => setAltura(e.target.value)}
                                        placeholder="175"
                                        className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-neutral-600"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* SENHA */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                            >
                                Senha
                            </label>

                            <div
                                className="
                                    flex
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-3.5
                                    py-2.5
                                    transition-colors
                                    focus-within:border-purple-500
                                "
                            >
                                <LockKey
                                    size={20}
                                    weight="regular"
                                    className="mr-3 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-neutral-600
                                    "
                                />
                            </div>
                        </div>

                        {/* CONFIRMAR SENHA */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-1.5 block text-xs sm:text-sm font-semibold text-neutral-300"
                            >
                                Confirmar senha
                            </label>

                            <div
                                className="
                                    flex
                                    items-center
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-[#18191c]
                                    px-3.5
                                    py-2.5
                                    transition-colors
                                    focus-within:border-purple-500
                                "
                            >
                                <LockKey
                                    size={20}
                                    weight="regular"
                                    className="mr-3 shrink-0 text-purple-300/80"
                                />

                                <input
                                    id="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        border-none
                                        bg-transparent
                                        text-sm
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
                            disabled={loading}
                            className="
                                mt-2
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-[#7c3aed]
                                py-3.5
                                text-sm
                                font-bold
                                text-white
                                shadow-lg
                                shadow-purple-600/30
                                transition-all
                                duration-150
                                hover:bg-[#6d28d9]
                                active:scale-[0.98]
                                disabled:opacity-50
                                sm:text-base
                            "
                        >
                            {loading ? "Cadastrando..." : "Criar conta"}

                            {!loading && (
                                <ArrowRight
                                    size={18}
                                    weight="bold"
                                />
                            )}
                        </button>

                    </form>

                </div>

                {/* PARTE INFERIOR */}
                <div className="mt-6 flex flex-col items-center gap-3 text-center">

                    <p className="text-sm font-medium text-neutral-300">
                        Já possui uma conta?{" "}

                        <Link
                            to="/login"
                            className="
                                font-bold
                                text-purple-300
                                underline
                                underline-offset-2
                                transition
                                hover:text-purple-200
                            "
                        >
                            Entrar
                        </Link>
                    </p>

                    <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
                        <p className="transition hover:text-neutral-400 cursor-pointer">
                            Termos de Uso
                        </p>
                        <span>•</span>
                        <p className="transition hover:text-neutral-400 cursor-pointer">
                            Política de Privacidade
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}