import Container from "react-bootstrap/Container";
import "../styles/container.css";
import "../styles/tarot.css";

export default function TarotCard() {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card-group">
        <div className="tarot-card"></div>
        <div className="tarot-card"></div>
        <div className="tarot-card"></div>
      </div>
    </Container>
  );
}
