// @assets
import { rp } from "../../assets";

// @styles
import "./cardFlip.scss";

export const CardFlip = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="card-image" src={rp} />
        </div>
        <div className="flip-card-back">
          <img className="card-image" src={rp} />
          <h3>Popper Rush</h3>
          <h1>COP$ 10.000</h1>
        </div>
      </div>
    </div>
  );
};
