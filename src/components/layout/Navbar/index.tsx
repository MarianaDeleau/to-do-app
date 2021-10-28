import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { menuItems } from "./items";
import { useAuth } from "../../../hooks/useAuth"

const NavbarApp = () => {
    const { userSession } = useAuth()

    return (
    <Navbar bg="dark" variant="dark">
        <Container>
                <Navbar.Brand className="fs-1 fw-bold">TODO APP📌{userSession && <h6>Usuario: {`${userSession.name}`}</h6>}</Navbar.Brand>
                <Nav variant="tabs" className="justify-content-center">
                 {menuItems.map((item) => {
                     return (
                        <Nav.Item>
                            <Link to={item.href} className="navLink">{item.label}</Link>
                        </Nav.Item>
                            );
                    })}
                </Nav>
        </Container>
    </Navbar>
    )
};

  export { NavbarApp };