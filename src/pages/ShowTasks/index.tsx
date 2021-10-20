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
            {task?.map((item) => {
              return(
                <Card style={{ width: '18rem' }} className="cardTask">
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item.progress}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text">{item.user}</Card.Subtitle>
                        <Card.Text>
                           {item.description}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">{item.creationDate}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{item.startDate}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{item.completionDate}</Card.Subtitle>
                            <Card.Link href="#">Editar Tarea</Card.Link>
                        </Card.Body>
                    </Card>
              )
        })}

    </Layout>
        );
  };
  

export { Tasks }

