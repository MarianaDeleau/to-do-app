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
    } else {

    }   

  };

  const logout = () => {

   console.log('logout')
    // if (userSession) {
    //   localStorage.removeItem("user")
   // }
  };

  const recoveryPassword = () => {};

  return { login, userSession, logout };
};

export { useAuth };

//{"id":"-MlVIxa4Xgt_iT8cL9fG","email":"marianadeleau@gmail.com","gender":"mujer","name":"Mariana Deleau","password":"1234"}
