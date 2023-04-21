import "../../../styles/landing.css";
import "./tarot.css";

export default function TarotCard({ name }) {
  return (
    <div className="card-group">
      <div className="tarot-card d-flex align-items-center justify-content-center">
        <h2 className="">{name}</h2>
      </div>
    </div>
  );
}
