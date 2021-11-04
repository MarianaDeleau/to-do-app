import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { Category } from "../../../types";



const CategoryWrapper: FC = ({ children }) => {
    return (
        <Container className="mt-2 mb-2">
            <Row className="d-flex justify-content-md-center ">
                <div className="d-flex justify-content-md-center "><h2 className="mt-3 text-center badge rounded-pill bg-dark p-3 fs-4 text-light">Categorías</h2></div>
                {children}
            </Row>  
        </Container>
    )
}

export { CategoryWrapper }