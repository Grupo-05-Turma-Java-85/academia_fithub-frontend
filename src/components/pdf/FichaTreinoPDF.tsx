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
}

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

export default function FichaTreinoPDF({
    usuario,
    treinos,
    categorias,
}: FichaTreinoPDFProps) {

    // =========================================================
    // FUNÇÃO PARA NORMALIZAR TEXTOS
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

    /*
     * A API pode enviar:
     *
     * 165
     * 165.0
     * 1.65
     * "165"
     * "1.65"
     *
     * Se for >= 100, entendemos como centímetros.
     */

    let alturaEmMetros = 0;

    if (!Number.isNaN(alturaNumerica) && alturaNumerica > 0) {
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


    return (
        <Document>

            <Page
                size="A4"
                style={styles.page}
            >

                {/* ================================================= */}
                {/* CABEÇALHO */}
                {/* ================================================= */}

                <View style={styles.header}>

                    <Text style={styles.logo}>
                        FITGYM
                    </Text>

                    <Text style={styles.subtitulo}>
                        Ficha personalizada de treino
                    </Text>

                </View>


                {/* ================================================= */}
                {/* DADOS DO ALUNO */}
                {/* ================================================= */}

                <View style={styles.dadosContainer}>

                    <Text style={styles.nomeAluno}>
                        {usuario.nome || "Aluno"}
                    </Text>


                    <View style={styles.dadosGrid}>

                        {/* PESO */}

                        <View style={styles.dado}>

                            <Text style={styles.dadoLabel}>
                                PESO
                            </Text>

                            <Text style={styles.dadoValor}>

                                {pesoNumerico > 0
                                    ? `${formatarNumero(
                                        pesoNumerico
                                    )} kg`
                                    : "--"}

                            </Text>

                        </View>


                        {/* ALTURA */}

                        <View style={styles.dado}>

                            <Text style={styles.dadoLabel}>
                                ALTURA
                            </Text>

                            <Text style={styles.dadoValor}>

                                {alturaEmMetros > 0
                                    ? `${formatarNumero(
                                        alturaEmMetros
                                    )} m`
                                    : "--"}

                            </Text>

                        </View>


                        {/* IMC */}

                        <View style={styles.dadoUltimo}>

                            <Text style={styles.dadoLabel}>
                                IMC
                            </Text>

                            <Text style={styles.dadoValor}>

                                {imc > 0
                                    ? formatarNumero(imc)
                                    : "--"}

                            </Text>

                        </View>

                    </View>


                    {/* NÍVEL */}

                    <View style={styles.nivel}>

                        <Text style={styles.nivelTexto}>

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

                        <View style={styles.treinoHeader}>

                            <Text style={styles.letra}>
                                {treino.letra}
                            </Text>

                            <Text style={styles.treinoTitulo}>
                                TREINO {treino.letra} —{" "}
                                {treino.titulo}
                            </Text>

                        </View>


                        {/* ================================================= */}
                        {/* CATEGORIAS DO TREINO */}
                        {/* ================================================= */}

                        {treino.categorias.map(
                            (nomeCategoria) => {

                                const categoria =
                                    encontrarCategoria(
                                        nomeCategoria
                                    );


                                /*
                                 * Se não encontrou a categoria
                                 * na resposta da API, simplesmente
                                 * não quebra o PDF.
                                 */

                                if (!categoria) {
                                    return null;
                                }


                                /*
                                 * Exercícios pertencentes
                                 * àquela categoria.
                                 */

                                const exercicios =
                                    categoria.exercicio ?? [];


                                return (
                                    <View
                                        key={`${treino.letra}-${categoria.id}`}
                                        style={styles.categoria}
                                        wrap={false}
                                    >

                                        {/* NOME DA CATEGORIA */}

                                        <Text
                                            style={
                                                styles.categoriaTitulo
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
                                                            styles.exercicio
                                                        }
                                                    >

                                                        <Text
                                                            style={
                                                                styles.exercicioNome
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
                                                                    styles.equipamento
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
                                                    styles.semExercicios
                                                }
                                            >
                                                Nenhum exercício cadastrado
                                                nesta categoria.
                                            </Text>

                                        )}

                                    </View>
                                );
                            }
                        )}

                    </View>

                ))}


                {/* ================================================= */}
                {/* RODAPÉ */}
                {/* ================================================= */}

                <Text style={styles.rodape}>
                    FITGYM • Ficha de treino personalizada
                </Text>

            </Page>

        </Document>
    );
}