import { useState } from "react";
import { Card } from "react-bootstrap";
import { getTasks } from "../../api";
import { Layout } from "../../components";
import { useAuth } from "../../hooks";
import { Task } from "../../types";
import { User } from "../../types";

const Tasks = () => {
    const [task, setTask] = useState<Task[]>();
  
    const obtenerTareas = async () => {
      const response = await getTasks();
      setTask(response);
    };
  
    if (!task) {
      obtenerTareas();
  }
  
  const { userSession } = useAuth()
   
      return (
        <Layout mainClass="tasks">
          {task?.map((item) => {
            if (userSession.id === item.user) {
              return (
                <Card style={{ width: '18rem' }} className="cardTask" data-id={item.id}>
                  <Card.Body>
                    <Card.Title className="fw-bold h4">{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Estado: {item.progress}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-danger">Usuario: {item.user}</Card.Subtitle>
                    <Card.Text className="fw-light fs-6">
                      {item.description}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Creado: {item.creationDate}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text fs-6 fw-light">Iniciado: {item.startDate}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-success fs-6 fw-light">Finalizado: {item.completionDate}</Card.Subtitle>
                    <button>
                      <Card.Link className="text-decoration-none" href={`./edit-task?id=${item.id}`}>Editar Tarea</Card.Link>
                    </button>
                  </Card.Body>
                </Card>
              )
            }
        })}
      
    </Layout>
        );
  };
  

export { Tasks }

//&title=${item.title}&description=${item.description}&progress=${item.progress}&user=${item.user}&creationDate=${item.creationDate}&startDate=${item.startDate}&completionDate=${item.completionDate}