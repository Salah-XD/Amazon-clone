import React from "react";
import "./styles/product.css";

function Product({ title, des, price, price2, ratings, image }) {
  return (
    <div className="product">
      <div className="productInfo">
        <h3>{title}</h3>
        <p>{des}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
          <small className="price2"> {price2}</small>
        </p>
        <div className="productRatings">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <button type="Submit">Add to Basket</button>
    </div>
  );
}

export default Product;
