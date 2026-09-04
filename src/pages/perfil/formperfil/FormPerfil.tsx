import {
    UserIcon,
    HourglassIcon,
    RulerIcon,
    CalendarIcon,
    FloppyDiskIcon,
    BarbellIcon,
    ClockIcon,
    ArrowLeftIcon,
} from "@phosphor-icons/react";

import type { FormEvent } from "react";

interface FormPerfilProps {
    name: string;
    email: string;
    weight: string;
    height: string;
    birthDate: string;
    experience: string;
    frequencia: number | null;
    foto: string;

    onNameChange: (value: string) => void;
    onEmailChange: (value: string) => void;
    onWeightChange: (value: string) => void;
    onHeightChange: (value: string) => void;
    onBirthDateChange: (value: string) => void;
    onExperienceChange: (value: string) => void;
    onFrequenciaChange: (value: number) => void;
    onFotoChange: (value: string) => void;

    onSubmit: (
        event: FormEvent<HTMLFormElement>
    ) => void;

    onCancel: () => void;
}

export default function FormPerfil({
    name,
    email,
    weight,
    height,
    birthDate,
    experience,
    frequencia,
    foto,

    onNameChange,
    onEmailChange,
    onWeightChange,
    onHeightChange,
    onBirthDateChange,
    onExperienceChange,
    onFrequenciaChange,
    onFotoChange,

    onSubmit,
    onCancel,
}: FormPerfilProps) {

    return (
        <div className="w-full flex justify-center">

            <div className="w-full max-w-[480px]">

                <button
                    type="button"
                    onClick={onCancel}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition mb-6"
                >
                    <ArrowLeftIcon
                        size={20}
                        weight="bold"
                    />

                    Voltar para o perfil
                </button>

                <div className="bg-[#15151b] border border-zinc-800 rounded-2xl p-6 shadow-xl">

                    <div className="mb-7">

                        <h1 className="text-white text-2xl font-bold">
                            Editar perfil
                        </h1>

                        <p className="text-zinc-500 text-sm mt-1">
                            Atualize suas informações pessoais e de treino
                        </p>

                    </div>

                    <form onSubmit={onSubmit}>

                        <div className="mb-5">

                            <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                <UserIcon size={18} />
                                Nome
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    onNameChange(event.target.value)
                                }
                                className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
                            />

                        </div>

                        <div className="mb-5">

                            <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                <UserIcon size={18} />
                                Usuário
                            </label>

                            <input
                                type="text"
                                value={email}
                                onChange={(event) =>
                                    onEmailChange(event.target.value)
                                }
                                className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
                            />

                        </div>

                        <div className="mb-5">

                            <label className="text-sm text-zinc-400 mb-2 block">
                                Foto
                            </label>

                            <input
                                type="text"
                                value={foto}
                                onChange={(event) =>
                                    onFotoChange(event.target.value)
                                }
                                placeholder="URL da sua foto"
                                className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition"
                            />

                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-5">

                            <div>

                                <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                    <HourglassIcon size={18} />
                                    Peso
                                </label>

                                <div className="relative">

                                    <input
                                        type="text"
                                        value={weight}
                                        onChange={(event) =>
                                            onWeightChange(event.target.value)
                                        }
                                        className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-purple-500 transition"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                                        kg
                                    </span>

                                </div>

                            </div>

                            <div>

                                <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                    <RulerIcon size={18} />
                                    Altura
                                </label>

                                <div className="relative">

                                    <input
                                        type="text"
                                        value={height}
                                        onChange={(event) =>
                                            onHeightChange(event.target.value)
                                        }
                                        className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 pr-12 text-white outline-none focus:border-purple-500 transition"
                                    />

                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">
                                        m
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="mb-5">

                            <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                <CalendarIcon size={18} />
                                Data de nascimento
                            </label>

                            <input
                                type="date"
                                value={birthDate}
                                onChange={(event) =>
                                    onBirthDateChange(event.target.value)
                                }
                                className="w-full bg-[#0f0f14] border border-zinc-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition [color-scheme:dark]"
                            />

                        </div>

                        <div className="mb-5">

                            <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                <BarbellIcon size={18} />
                                Nível de experiência
                            </label>

                            <div className="grid grid-cols-3 gap-2">

                                <button
                                    type="button"
                                    onClick={() =>
                                        onExperienceChange("INICIANTE")
                                    }
                                    className={`py-3 rounded-xl border transition text-sm font-medium ${experience === "INICIANTE"
                                            ? "bg-purple-600 border-purple-500 text-white"
                                            : "bg-[#0f0f14] border-zinc-800 text-zinc-400 hover:border-purple-500"
                                        }`}
                                >
                                    INICIANTE
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        onExperienceChange("INTERMEDIARIO")
                                    }
                                    className={`py-3 rounded-xl border transition text-sm font-medium ${experience === "INTERMEDIARIO"
                                            ? "bg-purple-600 border-purple-500 text-white"
                                            : "bg-[#0f0f14] border-zinc-800 text-zinc-400 hover:border-purple-500"
                                        }`}
                                >
                                    INTERMEDIÁRIO
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        onExperienceChange("AVANCADO")
                                    }
                                    className={`py-3 rounded-xl border transition text-sm font-medium ${experience === "AVANCADO"
                                            ? "bg-purple-600 border-purple-500 text-white"
                                            : "bg-[#0f0f14] border-zinc-800 text-zinc-400 hover:border-purple-500"
                                        }`}
                                >
                                    AVANÇADO
                                </button>

                            </div>

                        </div>

                        <div className="mb-7">

                            <label className="text-sm text-zinc-400 mb-2 flex items-center gap-2">
                                <ClockIcon size={18} />
                                Dias por semana
                            </label>

                            <div className="grid grid-cols-7 gap-2">

                                {[1, 2, 3, 4, 5, 6, 7].map((dia) => (

                                    <button
                                        key={dia}
                                        type="button"
                                        onClick={() =>
                                            onFrequenciaChange(dia)
                                        }
                                        className={`h-10 rounded-lg border transition font-medium ${frequencia === dia
                                                ? "bg-purple-600 border-purple-500 text-white"
                                                : "bg-[#0f0f14] border-zinc-800 text-zinc-400 hover:border-purple-500"
                                            }`}
                                    >
                                        {dia}
                                    </button>

                                ))}

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                        >
                            <FloppyDiskIcon size={20} weight="bold"/>

                            Salvar alterações
                        </button>

                        <button 
                            type="button" 
                            onClick={onCancel} 
                            className="w-full bg-purple-600 hover:bg-purple-500 transition text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 mt-5" 
                        > 
                           
                            <ArrowLeftIcon size={20} weight="bold" /> 
                        Voltar 
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}
