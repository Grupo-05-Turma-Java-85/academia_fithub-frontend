import type Exercicio from "../../../models/Exercicio";
import CardExercicios from "../cardexercicios/CardExercicios";

interface ListaExerciciosProps {
    exercicios: Exercicio[];
    onEditar: (exercicio: Exercicio) => void;
    onDeletar: (exercicio: Exercicio) => void;
}

export default function ListaExercicios({
    exercicios,
    onEditar,
    onDeletar,
}: ListaExerciciosProps) {

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {exercicios.map((exercicio) => (
                <CardExercicios
                    key={exercicio.id}
                    exercicio={exercicio}
                    onEditar={onEditar}
                    onDeletar={onDeletar}
                />
            ))}

        </div>
    );
}