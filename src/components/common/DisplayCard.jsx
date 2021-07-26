import React from "react";

const DisplayCard = ({ hawker }) => {
  const style = {
    width: "18rem",
    margin: "5px",
  };

  return (
    <div className="card" style={style}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{hawker.name}</h5>
        <p className="card-text">
          {hawker.address}
          {hawker.postalcode}
        </p>

        <a href="https://www.google.com" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default DisplayCard;
