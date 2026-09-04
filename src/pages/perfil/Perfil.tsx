import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/AuthContext";
import { atualizar, buscar } from "../../service/Service";

import ListaPerfil from "./listaperfil/ListaPerfil";
import FormPerfil from "./formperfil/FormPerfil";

export default function Perfil() {

    const { usuario } = useContext(AuthContext);

    const [editando, setEditando] = useState(false);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [experience, setExperience] = useState("");
    const [frequencia, setFrequencia] = useState<number | null>(null);
    const [foto, setFoto] = useState("");

    useEffect(() => {

        async function carregarPerfil() {

            if (!usuario.id || !usuario.token) {
                setLoading(false);
                return;
            }

            try {

                const setDados = (dados: any) => {

                    setName(dados.nome ?? "");
                    setEmail(dados.usuario ?? "");

                    setWeight(
                        dados.peso !== null &&
                        dados.peso !== undefined
                            ? String(dados.peso)
                            : ""
                    );

                    setHeight(
                        dados.altura !== null &&
                        dados.altura !== undefined
                            ? String(dados.altura)
                            : ""
                    );

                    setBirthDate(
                        dados.dataNascimento ?? ""
                    );

                    setExperience(
                        dados.nivel
                            ? String(dados.nivel).toUpperCase()
                            : ""
                    );

                    setFrequencia(
                        dados.frequenciaSemanal !== null &&
                        dados.frequenciaSemanal !== undefined
                            ? Number(dados.frequenciaSemanal)
                            : null
                    );

                    setFoto(dados.foto ?? "");
                };

                await buscar(
                    `/usuarios/${usuario.id}`,
                    setDados,
                    {
                        headers: {
                            Authorization: usuario.token,
                        },
                    }
                );

            } catch (error) {

                console.error(
                    "Erro ao carregar perfil:",
                    error
                );

                toast.error(
                    "Não foi possível carregar seu perfil."
                );

            } finally {

                setLoading(false);

            }
        }

        carregarPerfil();

    }, [usuario.id, usuario.token]);

    async function handleSave(
        event: React.FormEvent<HTMLFormElement>
    ) {

        event.preventDefault();

        if (!usuario.id || !usuario.token) {
            toast.error("Usuário não autenticado.");
            return;
        }

        if (!name.trim()) {
            toast.error("Informe seu nome.");
            return;
        }

        if (!email.trim()) {
            toast.error("Informe seu usuário.");
            return;
        }

        if (!weight.trim()) {
            toast.error("Informe seu peso.");
            return;
        }

        if (!height.trim()) {
            toast.error("Informe sua altura.");
            return;
        }

        if (!birthDate) {
            toast.error(
                "Informe sua data de nascimento."
            );
            return;
        }

        if (!experience) {
            toast.error(
                "Selecione seu nível de experiência."
            );
            return;
        }

        if (!frequencia) {
            toast.error(
                "Selecione sua frequência semanal."
            );
            return;
        }

        const peso = Number(
            weight.replace(",", ".")
        );

        const altura = Number(
            height.replace(",", ".")
        );

        if (Number.isNaN(peso) || peso <= 0) {
            toast.error("Informe um peso válido.");
            return;
        }

        if (Number.isNaN(altura) || altura <= 0) {
            toast.error("Informe uma altura válida.");
            return;
        }

        const dados = {
            id: usuario.id,
            nome: name,
            usuario: email,
            foto: foto,
            peso: peso,
            altura: altura,
            dataNascimento: birthDate,
            nivel: experience,
            frequenciaSemanal: frequencia,
        };

        try {

            await atualizar(
                "/usuarios/atualizar",
                dados,
                () => {},
                {
                    headers: {
                        Authorization: usuario.token,
                    },
                }
            );

            toast.success(
                "Perfil atualizado com sucesso!"
            );

            setEditando(false);

        } catch (error) {

            console.error(
                "Erro ao atualizar perfil:",
                error
            );

            toast.error(
                "Não foi possível atualizar seu perfil."
            );
        }
    }

    if (loading) {

        return (
            <div className="min-h-screen bg-[#0b0b0e] flex items-center justify-center">

                <p className="text-zinc-400 text-lg">
                    Carregando perfil...
                </p>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0b0e] px-6 py-16">

            {editando ? (

                <FormPerfil
                    name={name}
                    email={email}
                    weight={weight}
                    height={height}
                    birthDate={birthDate}
                    experience={experience}
                    frequencia={frequencia}
                    foto={foto}
                    onNameChange={setName}
                    onEmailChange={setEmail}
                    onWeightChange={setWeight}
                    onHeightChange={setHeight}
                    onBirthDateChange={setBirthDate}
                    onExperienceChange={setExperience}
                    onFrequenciaChange={setFrequencia}
                    onFotoChange={setFoto}
                    onSubmit={handleSave}
                    onCancel={() => setEditando(false)}
                />

            ) : (

                <ListaPerfil
                    name={name}
                    email={email}
                    weight={weight}
                    height={height}
                    birthDate={birthDate}
                    experience={experience}
                    frequencia={frequencia}
                    foto={foto}
                    onEditar={() => setEditando(true)}
                />

            )}

        </div>
    );
}
