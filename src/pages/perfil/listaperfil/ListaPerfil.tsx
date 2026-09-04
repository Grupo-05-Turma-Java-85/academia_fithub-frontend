import CardPerfil from "../cardperfil/CardPerfil";

interface ListaPerfilProps {
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

export default function ListaPerfil({
    name,
    email,
    weight,
    height,
    birthDate,
    experience,
    frequencia,
    foto,
    onEditar,
}: ListaPerfilProps) {

    return (
        <div className="w-full flex justify-center">

            <CardPerfil
                name={name}
                email={email}
                weight={weight}
                height={height}
                birthDate={birthDate}
                experience={experience}
                frequencia={frequencia}
                foto={foto}
                onEditar={onEditar}
            />

        </div>
    );
}
