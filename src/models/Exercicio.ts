import type Categoria from "./Categoria";

export default interface Exercicio {
    id: number,
    nome: string,
    equipamento: string;
    foto: string,
    execucaoTecnica: string;
    categoria?: Categoria | null;
}