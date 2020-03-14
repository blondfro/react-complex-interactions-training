import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + "/juice.jpg"}
        alt="Vitamin Juice"
        className="card-image"
      />
      <div className="container">
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>
          Need a jump on your vitamins while drinking? Tired of popping pills?
          Drink our Vitamin enhanced juice! Available in several flavors!
        </p>
      </div>
    </div>
  );
}

export default Card;
