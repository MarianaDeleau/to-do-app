import { useState } from "react";

const useAuth = ()  => {

    const [isLogged, setIsLogged] = useState(false)

    const login = (email: string, password: string) => {
        console.log(`Intento de login de ${email} con el pass ${password}`);
        setIsLogged(true);
    }

    const logout = () => {
        console.log('Cerrar sesión');
        setIsLogged(false);
    }

    const resetPassword = () => {
        console.log('Reset password');

    }


    return { isLogged, login, logout, resetPassword }
}

export { useAuth }