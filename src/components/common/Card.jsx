import React from "react";
import "../../styles/Card.css";

const Card = ({ header, subheader, body }) => {
  return (
    <div className="card card-template" style={{ width: "18rem" }}>
      <img
        src="https://petkeen.com/wp-content/uploads/2021/05/West-Highland-White-Terrier_anetapics_Shutterstock-1.webp"
        className="card-img-top"
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <h6>{subheader}</h6>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default Card;
