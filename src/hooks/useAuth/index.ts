import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";

const useAuth = () => {
  const [userSession, setUserSession] = useState<User>(
    JSON.parse(localStorage.getItem("user")!)
  );

  const login = async (user: string, password: string) => {
    const users = await getUsers();

    const userLogged = users.find((u) => {
      if (u.email === user && u.password === password) {
        return true;
      }
      return false;
    });

    console.log(userLogged);

    if (userLogged) {
      setUserSession({ ...userLogged });
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/sign-up";
    }

    

  };

  const logout = () => {};

  const recoveryPassword = () => {};

  return { login, userSession };
};

export { useAuth };

// const useAuth = ()  => {

//     const [isLogged, setIsLogged] = useState(false)

//     const login = (email: string, password: string) => {
//         console.log(`Intento de login de ${email} con el pass ${password}`);
//         setIsLogged(true);
//     }

//     const logout = () => {
//         console.log('Cerrar sesión');
//         setIsLogged(false);
//     }

//     const resetPassword = () => {
//         console.log('Reset password');

//     }


//     return { isLogged, login, logout, resetPassword }
// }
