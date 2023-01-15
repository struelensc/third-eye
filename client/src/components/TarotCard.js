import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/container.css";
import "../styles/tarot.css";

export default function TarotCard() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="card-group">
            <div className="tarot-card"></div>
            <div className="tarot-card"></div>
            <div className="tarot-card"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
