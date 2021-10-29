import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "..";
import { TaskCard } from "../../common/Card";
import { Main } from "../Main";

type Props = {
    title?: string; 
}
const Dashboard2: FC<Props> = ({ title, children }) => {
    return (
        <Container className="mt-2 mb-2">
            <Row className="d-flex justify-content-md-center border">
                <div className="d-flex justify-content-md-center "><h2 className="mt-3 text-center badge rounded-pill bg-dark p-3 fs-4 text-light">{title}</h2></div>
                {children}
            </Row>  
        </Container>
    )
}

export { Dashboard2 }