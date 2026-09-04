import { createContext, useState, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import axios from "axios";
import { login } from "../service/Service";
import { toast } from "react-toastify";

interface AuthContextProps {

    usuario: UsuarioLogin;

    handleLogin(usuario: UsuarioLogin): Promise<UsuarioLogin | null>;

    handleLogout(): void;

    isLoading: boolean;
}

interface AuthProviderProps {

    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        foto: "",
        nome: "",
        peso: 0,
        altura: 0,
        dataNascimento: "",
        nivel: "",
        frequenciaSemanal: 0,
        usuario: "",
        senha: "",
        treinoGerado: "",
        token: "",
        tipoUsuario: 0,
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleLogin(usuarioLogin: UsuarioLogin) {

    setIsLoading(true);

    try {

        const usuarioAutenticado = await login(
            "/usuarios/logar",
            usuarioLogin,
            setUsuario
        );

        toast.success("Usuário autenticado com sucesso!");

        return usuarioAutenticado;

    } catch (error) {

        if (axios.isAxiosError(error) && error.response) {

            toast.error(
                `Erro ao autenticar o usuário: ${error.response.status}`
            );

            console.log(
                "Resposta da API:",
                error.message
            );

        } else {

            toast.error(
                "Erro ao autenticar o usuário! Verifique a conexão com a API!"
            );
        }

        return null;

    } finally {

        setIsLoading(false);

    }
}

    function handleLogout() {

        setUsuario({
            id: 0,
            foto: "",
            nome: "",
            peso: 0,
            altura: 0,
            dataNascimento: "",
            nivel: "",
            frequenciaSemanal: 0,
            usuario: "",
            senha: "",
            treinoGerado: "",
            token: "",
            tipoUsuario: 0,
        });
    }

    return (
        <AuthContext.Provider
            value={{
                usuario,
                handleLogin,
                handleLogout,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}