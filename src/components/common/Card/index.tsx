import { FC } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Task } from "../../../types";

type Props = {
    id: string;
    title: string;
    description: string;
    progress: string;
    user: string;
    creationDate: string;
    startDate: string;
    completionDate: string;
}

const TaskCard: FC<Props> = ({ id, title, description, progress, user, creationDate, startDate, completionDate }) => {
    const { userSession }= useAuth()

    return (
    <Card style={{ width: '15rem' }} className="cardTask shadow-lg p-3 mb-5 bg-body rounded" data-id={id} data-progress={progress}>
        <Card.Body>
            <Card.Title className="fw-bold h4">📌{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-danger">Estado: {progress}</Card.Subtitle>
            <Card.Subtitle className="mb-2 fw-light fs-6">Usuario: {userSession.name}</Card.Subtitle>
            <Card.Text className="fw-light fs-6">
                {description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted fs-6 fw-light">Creado: {creationDate}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text fs-6 fw-light">Iniciado: {startDate}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-success fs-6 fw-light">Finalizado: {completionDate}</Card.Subtitle>
                <Link className="text-decoration-none linkButton" to={`./edit-task?id=${id}`}>Editar Tarea</Link>
        </Card.Body>
    </Card>            
    )
}


export { TaskCard }