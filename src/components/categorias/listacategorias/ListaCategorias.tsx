import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";

interface ListaCategoriasProps {
    categorias: Categoria[];
    onEditar: (categoria: Categoria) => void;
    onDeletar: (categoria: Categoria) => void;
}

export default function ListaCategorias({
    categorias,
    onEditar,
    onDeletar,
}: ListaCategoriasProps) {

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {categorias.map((categoria) => (
                <CardCategoria
                    key={categoria.id}
                    categoria={categoria}
                    onEditar={onEditar}
                    onDeletar={onDeletar}
                />
            ))}

        </div>
    );
}
