import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";

import "./header.css";

export default function Header() {
  return (
    <Navbar className="mx-lg-5" expand="lg" fixed="top">
      <Container fluid className="d-flex justify-content-between">
        <Navbar.Brand>Third Eye</Navbar.Brand>
        <Nav>
          <Nav.Link>Choose your spread</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
