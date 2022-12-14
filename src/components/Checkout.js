import React from "react";
import "./styles/checkout.css";
import ad from "./ads/b1.jpg";
import ad1 from "./ads/b2.jpg";
import ad2 from "./ads/b3.jpg";
import ad3 from "./ads/b4.jpg";
import ad4 from "./ads/b5.jpg";
import ad5 from "./ads/b6.jpg";
import ad6 from "./ads/b7.jpg";
import ad7 from "./ads/b8.jpg";
import ad8 from "./ads/b9.jpg";

function Checkout() {
  const ads = [ad, ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8];
  return (
    <div className="checkout">
      <div className="check_left">
        <img
          className="checkout_ad"
          src={ads[Math.floor(Math.random() * 9)]}
          alt=""
        />
      </div>
      <div>
        <h2 className="title">Your Shopping Basket</h2>
      </div>
      <div className="check_right"></div>
    </div>
  );
}

export default Checkout;
