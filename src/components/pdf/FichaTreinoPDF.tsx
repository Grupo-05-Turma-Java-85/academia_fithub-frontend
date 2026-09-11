import {
    Document,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";

import type Categoria from "../../models/Categoria";

interface Treino {
    letra: string;
    titulo: string;
    categorias: string[];
}

interface Usuario {
    nome?: string;
    peso?: number | string;
    altura?: number | string;
    nivel?: string;
}

interface FichaTreinoPDFProps {
    usuario: Usuario;
    treinos: Treino[];
    categorias: Categoria[];
    tema: "escuro" | "claro";
}


// =========================================================
// ESTILOS BASE
// =========================================================

const styles = StyleSheet.create({

    page: {
        backgroundColor: "#0B0812",
        padding: 38,
        color: "#FFFFFF",
        fontFamily: "Helvetica",
    },

    header: {
        marginBottom: 25,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#7C3AED",
    },

    logo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#A855F7",
        marginBottom: 5,
    },

    subtitulo: {
        fontSize: 10,
        color: "#A1A1AA",
    },

    dadosContainer: {
        backgroundColor: "#15111F",
        borderWidth: 1,
        borderColor: "#302A3D",
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
    },

    nomeAluno: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 14,
    },

    dadosGrid: {
        flexDirection: "row",
        marginBottom: 12,
    },

    dado: {
        flex: 1,
        backgroundColor: "#211C2B",
        padding: 10,
        marginRight: 8,
        borderRadius: 6,
    },

    dadoUltimo: {
        flex: 1,
        backgroundColor: "#211C2B",
        padding: 10,
        borderRadius: 6,
    },

    dadoLabel: {
        fontSize: 8,
        color: "#A1A1AA",
        marginBottom: 5,
    },

    dadoValor: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    nivel: {
        backgroundColor: "#7026E6",
        padding: 10,
        borderRadius: 6,
    },

    nivelTexto: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    treino: {
        marginBottom: 18,
    },

    treinoHeader: {
        backgroundColor: "#15111F",
        borderWidth: 1,
        borderColor: "#302A3D",
        borderRadius: 8,
        padding: 13,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    letra: {
        width: 30,
        height: 30,
        backgroundColor: "#7C3AED",
        borderRadius: 15,
        textAlign: "center",
        paddingTop: 8,
        fontSize: 11,
        fontWeight: "bold",
        marginRight: 10,
        color: "#FFFFFF",
    },

    treinoTitulo: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#FFFFFF",
    },

    categoria: {
        backgroundColor: "#15111F",
        borderWidth: 1,
        borderColor: "#282331",
        borderRadius: 7,
        padding: 12,
        marginBottom: 8,
    },

    categoriaTitulo: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#C084FC",
        marginBottom: 7,
    },

    exercicio: {
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#292332",
    },

    exercicioNome: {
        fontSize: 9.5,
        color: "#FFFFFF",
        fontWeight: "bold",
    },

    equipamento: {
        fontSize: 8,
        color: "#A1A1AA",
        marginTop: 3,
    },

    semExercicios: {
        fontSize: 8.5,
        color: "#71717A",
        fontStyle: "italic",
    },

    rodape: {
        marginTop: 15,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#292332",
        textAlign: "center",
        fontSize: 8,
        color: "#71717A",
    },
});


// =========================================================
// CORES DOS TEMAS
// =========================================================

const coresPDF = {

    escuro: {
        page: "#0B0812",
        texto: "#FFFFFF",
        secundario: "#A1A1AA",
        roxo: "#7C3AED",
        roxoClaro: "#C084FC",
        logo: "#A855F7",
        card: "#15111F",
        cardInterno: "#211C2B",
        borda: "#302A3D",
        bordaExercicio: "#292332",
        bordaCategoria: "#282331",
        vazio: "#71717A",
    },

    claro: {
        page: "#FAF9FC",
        texto: "#111111",
        secundario: "#6B6573",
        roxo: "#7C3AED",
        roxoClaro: "#7C3AED",
        logo: "#7C3AED",
        card: "#FFFFFF",
        cardInterno: "#F3EFF8",
        borda: "#DDD7E3",
        bordaExercicio: "#E5DFEA",
        bordaCategoria: "#E2DCE8",
        vazio: "#77717E",
    },
};


// =========================================================
// COMPONENTE
// =========================================================

export default function FichaTreinoPDF({
    usuario,
    treinos,
    categorias,
    tema,
}: FichaTreinoPDFProps) {

    // =========================================================
    // CORES DO TEMA
    // =========================================================

    const cores =
        tema === "claro"
            ? coresPDF.claro
            : coresPDF.escuro;


    // =========================================================
    // ESTILOS DINÂMICOS
    // =========================================================

    const estilos = {

        page: {
            ...styles.page,
            backgroundColor: cores.page,
            color: cores.texto,
        },

        header: {
            ...styles.header,
            borderBottomColor: cores.roxo,
        },

        logo: {
            ...styles.logo,
            color: cores.logo,
        },

        subtitulo: {
            ...styles.subtitulo,
            color: cores.secundario,
        },

        dadosContainer: {
            ...styles.dadosContainer,
            backgroundColor: cores.card,
            borderColor: cores.borda,
        },

        nomeAluno: {
            ...styles.nomeAluno,
            color: cores.texto,
        },

        dado: {
            ...styles.dado,
            backgroundColor: cores.cardInterno,
        },

        dadoUltimo: {
            ...styles.dadoUltimo,
            backgroundColor: cores.cardInterno,
        },

        dadoLabel: {
            ...styles.dadoLabel,
            color: cores.secundario,
        },

        dadoValor: {
            ...styles.dadoValor,
            color: cores.texto,
        },

        nivel: {
            ...styles.nivel,
            backgroundColor: cores.roxo,
        },

        nivelTexto: {
            ...styles.nivelTexto,
            color: "#FFFFFF",
        },

        treinoHeader: {
            ...styles.treinoHeader,
            backgroundColor: cores.card,
            borderColor: cores.borda,
        },

        letra: {
            ...styles.letra,
            backgroundColor: cores.roxo,
            color: "#FFFFFF",
        },

        treinoTitulo: {
            ...styles.treinoTitulo,
            color: cores.texto,
        },

        categoria: {
            ...styles.categoria,
            backgroundColor: cores.card,
            borderColor: cores.bordaCategoria,
        },

        categoriaTitulo: {
            ...styles.categoriaTitulo,
            color: cores.roxoClaro,
        },

        exercicio: {
            ...styles.exercicio,
            borderBottomColor: cores.bordaExercicio,
        },

        exercicioNome: {
            ...styles.exercicioNome,
            color: cores.texto,
        },

        equipamento: {
            ...styles.equipamento,
            color: cores.secundario,
        },

        semExercicios: {
            ...styles.semExercicios,
            color: cores.vazio,
        },

        rodape: {
            ...styles.rodape,
            borderTopColor: cores.bordaExercicio,
            color: cores.vazio,
        },
    };


    // =========================================================
    // NORMALIZAR TEXTOS
    // =========================================================

    const normalizar = (valor: unknown) => {

        return String(valor ?? "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toLowerCase();
    };


    // =========================================================
    // PESO
    // =========================================================

    const pesoNumerico = Number(
        String(usuario.peso ?? "")
            .replace(",", ".")
            .trim()
    );


    // =========================================================
    // ALTURA
    // =========================================================

    const alturaNumerica = Number(
        String(usuario.altura ?? "")
            .replace(",", ".")
            .trim()
    );


    let alturaEmMetros = 0;

    if (
        !Number.isNaN(alturaNumerica) &&
        alturaNumerica > 0
    ) {

        alturaEmMetros =
            alturaNumerica >= 100
                ? alturaNumerica / 100
                : alturaNumerica;
    }


    // =========================================================
    // IMC
    // =========================================================

    let imc = 0;

    if (
        pesoNumerico > 0 &&
        alturaEmMetros > 0
    ) {

        imc =
            pesoNumerico /
            (alturaEmMetros * alturaEmMetros);
    }


    // =========================================================
    // FORMATAÇÃO
    // =========================================================

    const formatarNumero = (valor: number) => {

        if (!Number.isFinite(valor)) {
            return "--";
        }

        return valor
            .toFixed(2)
            .replace(".", ",");
    };


    // =========================================================
    // ENCONTRAR CATEGORIA
    // =========================================================

    const encontrarCategoria = (
        nomeCategoria: string
    ) => {

        const nomeNormalizado =
            normalizar(nomeCategoria);

        return categorias.find(
            (categoria) =>
                normalizar(categoria.nome) ===
                nomeNormalizado
        );
    };


    // =========================================================
    // PDF
    // =========================================================

    return (

        <Document>

            <Page
                size="A4"
                style={estilos.page}
            >

                {/* ================================================= */}
                {/* CABEÇALHO */}
                {/* ================================================= */}

                <View style={estilos.header}>

                    <Text style={estilos.logo}>
                        FITGYM
                    </Text>

                    <Text style={estilos.subtitulo}>
                        Ficha personalizada de treino
                    </Text>

                </View>


                {/* ================================================= */}
                {/* DADOS DO ALUNO */}
                {/* ================================================= */}

                <View style={estilos.dadosContainer}>

                    <Text style={estilos.nomeAluno}>
                        {usuario.nome || "Aluno"}
                    </Text>


                    <View style={styles.dadosGrid}>

                        {/* PESO */}

                        <View style={estilos.dado}>

                            <Text style={estilos.dadoLabel}>
                                PESO
                            </Text>

                            <Text style={estilos.dadoValor}>

                                {pesoNumerico > 0
                                    ? `${formatarNumero(
                                        pesoNumerico
                                    )} kg`
                                    : "--"}

                            </Text>

                        </View>


                        {/* ALTURA */}

                        <View style={estilos.dado}>

                            <Text style={estilos.dadoLabel}>
                                ALTURA
                            </Text>

                            <Text style={estilos.dadoValor}>

                                {alturaEmMetros > 0
                                    ? `${formatarNumero(
                                        alturaEmMetros
                                    )} m`
                                    : "--"}

                            </Text>

                        </View>


                        {/* IMC */}

                        <View style={estilos.dadoUltimo}>

                            <Text style={estilos.dadoLabel}>
                                IMC
                            </Text>

                            <Text style={estilos.dadoValor}>

                                {imc > 0
                                    ? formatarNumero(imc)
                                    : "--"}

                            </Text>

                        </View>

                    </View>


                    {/* NÍVEL */}

                    <View style={estilos.nivel}>

                        <Text style={estilos.nivelTexto}>

                            NÍVEL:{" "}

                            {usuario.nivel
                                ? usuario.nivel
                                : "NÃO INFORMADO"}

                        </Text>

                    </View>

                </View>


                {/* ================================================= */}
                {/* TREINOS */}
                {/* ================================================= */}

                {treinos.map((treino) => (

                    <View
                        key={treino.letra}
                        style={styles.treino}
                    >

                        {/* CABEÇALHO DO TREINO */}

                        <View style={estilos.treinoHeader}>

                            <Text style={estilos.letra}>
                                {treino.letra}
                            </Text>

                            <Text style={estilos.treinoTitulo}>
                                TREINO {treino.letra} —{" "}
                                {treino.titulo}
                            </Text>

                        </View>


                        {/* ================================================= */}
                        {/* CATEGORIAS */}
                        {/* ================================================= */}

                        {treino.categorias
                            .map((nomeCategoria) =>
                                encontrarCategoria(nomeCategoria)
                            )
                            .filter(
                                (categoria): categoria is Categoria =>
                                    Boolean(categoria)
                            )
                            .map((categoria) => {

                                const exercicios =
                                    categoria.exercicio ?? [];

                                return (

                                    <View
                                        key={`${treino.letra}-${categoria.id}`}
                                        style={estilos.categoria}
                                        wrap={false}
                                    >

                                        {/* NOME DA CATEGORIA */}

                                        <Text
                                            style={
                                                estilos.categoriaTitulo
                                            }
                                        >
                                            {categoria.nome}
                                        </Text>


                                        {/* ================================================= */}
                                        {/* EXERCÍCIOS */}
                                        {/* ================================================= */}

                                        {exercicios.length > 0 ? (

                                            exercicios.map(
                                                (exercicio) => (

                                                    <View
                                                        key={exercicio.id}
                                                        style={
                                                            estilos.exercicio
                                                        }
                                                    >

                                                        <Text
                                                            style={
                                                                estilos.exercicioNome
                                                            }
                                                        >
                                                            •{" "}
                                                            {
                                                                exercicio.nome
                                                            }
                                                        </Text>


                                                        {exercicio.equipamento && (

                                                            <Text
                                                                style={
                                                                    estilos.equipamento
                                                                }
                                                            >
                                                                Equipamento:{" "}
                                                                {
                                                                    exercicio.equipamento
                                                                }
                                                            </Text>

                                                        )}

                                                    </View>

                                                )
                                            )

                                        ) : (

                                            <Text
                                                style={
                                                    estilos.semExercicios
                                                }
                                            >
                                                Nenhum exercício cadastrado
                                                nesta categoria.
                                            </Text>

                                        )}

                                    </View>
                                );
                            })}

                    </View>

                ))}


                {/* ================================================= */}
                {/* RODAPÉ */}
                {/* ================================================= */}

                <Text style={estilos.rodape}>
                    FITGYM • Ficha de treino personalizada
                </Text>

            </Page>

        </Document>
    );
}