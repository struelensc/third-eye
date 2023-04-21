import "../../styles/landing.css";
import "../../styles/tarot.css";

export default function TarotCard({ name }) {
  return (
    <div className="card-group">
      <div className="tarot-card">{name}</div>
    </div>
  );
}
