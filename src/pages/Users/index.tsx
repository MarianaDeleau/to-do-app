import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";
import { Layout } from "../../components";


const Users = () => {
  const [users, setUsers] = useState<User[]>();

  const obtenerUsuarios = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  if (!users) {
    obtenerUsuarios();
  }

  return (
    <Layout mainClass="users">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </Layout>  );
};

export { Users };


