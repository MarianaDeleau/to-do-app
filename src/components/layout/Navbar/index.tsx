import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { menuItems } from "./items";

const NavbarApp = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="fs-1 fw-bold">TODO APP</Navbar.Brand>
            <Nav variant="tabs" className="justify-content-center">
                 {menuItems.map((item) => {
                     return (
                        <Nav.Item>
                            <Nav.Link href={item.href}>{item.label}</Nav.Link>
                        </Nav.Item>
                            );
                    })}
            </Nav>
        </Container>
    </Navbar>
    )
};

  export { NavbarApp };