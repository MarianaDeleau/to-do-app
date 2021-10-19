import { useState } from "react";
import { Card } from "react-bootstrap";
import { getTasks } from "../../api";
import { Layout } from "../../components";
import { Task } from "../../types";




const Tasks = () => {
    const [task, setTask] = useState<Task[]>();
  
    const obtenerTareas = async () => {
      const response = await getTasks();
      setTask(response);
    };
  
    if (!task) {
      obtenerTareas();
    }
  
        return (
      <Layout mainClass="tasks">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Descripción</th>
              <th>Progreso</th>
              <th>Usuario</th>
              <th>Fecha Creada</th>
              <th>Fecha Iniciada</th>
              <th>Fecha Finalizada</th>
            </tr>
          </thead>
          <tbody>
            {task?.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.progress}</td>
                  <td>{item.user}</td>
                  <td>{item.creationDate}</td>
                  <td>{item.startDate}</td>
                  <td>{item.completionDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </Layout>  );

    //     return (
    //     <Layout mainClass="tasks">
    //         {task?.map((item) => {
    //             <Card style={{ width: '18rem' }}>
    //                 <Card.Body>
    //                     <Card.Title>{item.title}</Card.Title>
    //                     <Card.Subtitle className="mb-2 text-muted">{item.progress}</Card.Subtitle>
    //                     <Card.Subtitle className="mb-2 text-muted">{item.user}</Card.Subtitle>
    //                     <Card.Text>
    //                        {item.description}
    //                     </Card.Text>
    //                     <Card.Link href="#">Editar Tarea</Card.Link>
    //                 </Card.Body>
    //             </Card>
    //     })}

    // </Layout>
    //     );
  };
  

export { Tasks }

