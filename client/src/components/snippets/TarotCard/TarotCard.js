import Container from "react-bootstrap/Container";
import "./tarot.css";

export default function TarotCard({ name, isVisible, onClick }) {
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <div onClick={onClick} className={`${isVisible ? "visible" : "fade"}`}>
        {/* Filler card stack */}
        <div className="card-group">
          <div className="tarot-card"></div>
          <div className="tarot-card"></div>
          <div className="tarot-card"></div>
        </div>
      </div>
      <div onClick={onClick} className={`${isVisible ? "fade" : "visible"}`}>
        <div className="card-group">
          <div className="tarot-card d-flex align-items-center justify-content-center">
            <h2 className="">{name}</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}
