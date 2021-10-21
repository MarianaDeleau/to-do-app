import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";
import { Layout } from "../../components";
import { Card } from "react-bootstrap";


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
       {users?.map((item) => {
              return(
                <Card style={{ width: '18rem' }} className="cardTask" data-id={item.id}>
                    <Card.Body>
                        <Card.Title className="fw-bold h4">{item.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted fs-6">Mail:{item.email}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Género: {item.gender}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Password: {item.password}</Card.Subtitle>                    
                    <button>
                    <Card.Link className="text-decoration-none" href={`./edit-task?id=${ item.id }&name=${item.name}&email=${item.email}`}>Asignar Tarea</Card.Link>
                    </button>
                        </Card.Body>
                    </Card>
              )
        })}
      </Layout>  );
};

export { Users };


