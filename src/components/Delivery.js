import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles/delivery.css";

function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery__info">
        <div className="icon">
          <LocationOnIcon />
        </div>
        <div className="delivery__address">
          <small>Deliver To</small>
          <strong>PARK College Canteen</strong>
        </div>
      </div>
      <div className="delivery__options">
        <ul>
          <li>
            <a href="#">Today's Deal</a>
          </li>
          <li>
            <a href="#">Customer Service</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Registery</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li className="lastOne">
            <a href="#">Shop deals in Elecronics</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Delivery;
