import {
    PencilSimpleIcon,
    UserIcon,
    ScalesIcon,
    RulerIcon,
    CalendarIcon,
    BarbellIcon,
    ClockIcon,
} from "@phosphor-icons/react";

interface CardPerfilProps {
    name: string;
    email: string;
    weight: string;
    height: string;
    birthDate: string;
    experience: string;
    frequencia: number | null;
    foto: string;
    onEditar: () => void;
}

export default function CardPerfil({
    name,
    email,
    weight,
    height,
    birthDate,
    experience,
    frequencia,
    foto,
    onEditar,
}: CardPerfilProps) {

    function formatarData(data: string) {

        if (!data) {
            return "Não informado";
        }

        const partes = data.split("-");

        if (partes.length !== 3) {
            return data;
        }

        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    function formatarNivel(nivel: string) {

        switch (nivel) {

            case "INICIANTE":
                return "Iniciante";

            case "INTERMEDIARIO":
                return "Intermediário";

            case "AVANCADO":
                return "Avançado";

            default:
                return nivel || "Não informado";
        }
    }

    return (
        <div className="w-full max-w-[600px]">

            <div className="flex flex-col items-center mb-3 mt-13">

                <div className="w-32 h-32 rounded-full p-[2px] bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-500">

                    <div className="w-full h-full rounded-full overflow-hidden bg-[#15151b] flex items-center justify-center">

                        {foto ? (

                            <img
                                src={foto}
                                alt={`Foto de ${name}`}
                                className="w-full h-full object-cover"
                            />

                        ) : (

                            <UserIcon
                                size={58}
                                weight="duotone"
                                className="text-purple-400"
                            />

                        )}

                    </div>

                </div>

                <h1 className="text-white text-3xl font-bold mt-5">
                    {name || "Meu Perfil"}
                </h1>

                <p className="text-zinc-500 mt-1">
                    {email || "Usuário"}
                </p>

            </div>

            <div className="bg-[#15151b] border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">

                <div className="px-6 py-5 border-b border-zinc-800 flex items-center justify-between gap-4">

                    <div>

                        <h2 className="text-white text-lg font-semibold">
                            Minhas informações
                        </h2>

                        <p className="text-zinc-500 text-sm mt-1">
                            Seus dados pessoais e de treino
                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={onEditar}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-white text-sm font-medium"
                    >
                        <PencilSimpleIcon
                            size={18}
                            weight="bold"
                        />

                        Editar
                    </button>

                </div>

                <div className="p-6">

                    <div className="mb-8">

                        <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-4">
                            Dados pessoais
                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">

                                    <UserIcon
                                        size={21}
                                        className="text-purple-400"
                                    />

                                </div>

                                <div>

                                    <p className="text-xs text-zinc-500">
                                        Nome
                                    </p>

                                    <p className="text-white">
                                        {name || "Não informado"}
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-4">

                                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">

                                    <CalendarIcon
                                        size={21}
                                        className="text-purple-400"
                                    />

                                </div>

                                <div>

                                    <p className="text-xs text-zinc-500">
                                        Data de nascimento
                                    </p>

                                    <p className="text-white">
                                        {formatarData(birthDate)}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mb-8">

                        <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-4">
                            Dados físicos
                        </p>

                        <div className="grid grid-cols-2 gap-4">

                            <div className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-4">

                                <ScalesIcon
                                    size={23}
                                    className="text-purple-400 mb-3"
                                />

                                <p className="text-xs text-zinc-500">
                                    Peso
                                </p>

                                <p className="text-white text-lg font-semibold mt-1">
                                    {weight
                                        ? `${weight} kg`
                                        : "Não informado"}
                                </p>

                            </div>

                            <div className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-4">

                                <RulerIcon
                                    size={23}
                                    className="text-purple-400 mb-3"
                                />

                                <p className="text-xs text-zinc-500">
                                    Altura
                                </p>

                                <p className="text-white text-lg font-semibold mt-1">
                                    {height
                                        ? `${height} m`
                                        : "Não informado"}
                                </p>

                            </div>

                        </div>

                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-wider text-purple-400 font-semibold mb-4">
                            Perfil de treino
                        </p>

                        <div className="grid grid-cols-2 gap-4">

                            <div className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-4">

                                <BarbellIcon
                                    size={23}
                                    className="text-purple-400 mb-3"
                                />

                                <p className="text-xs text-zinc-500">
                                    Nível
                                </p>

                                <p className="text-white text-lg font-semibold mt-1">
                                    {formatarNivel(experience)}
                                </p>

                            </div>

                            <div className="bg-[#0f0f14] border border-zinc-800 rounded-xl p-4">

                                <ClockIcon
                                    size={23}
                                    className="text-purple-400 mb-3"
                                />

                                <p className="text-xs text-zinc-500">
                                    Frequência
                                </p>

                                <p className="text-white text-lg font-semibold mt-1">
                                    {frequencia
                                        ? `${frequencia}x por semana`
                                        : "Não informado"}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
