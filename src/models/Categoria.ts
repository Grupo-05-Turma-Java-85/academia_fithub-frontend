import type Exercicio from "./exercicio";

export default interface Categoria {
    id: number;
    nome: string; 
    descricao: string;
    exercicio?: Exercicio[] | null;
}