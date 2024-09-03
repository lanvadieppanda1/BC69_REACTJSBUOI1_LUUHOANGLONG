import React from "react";

export const ItemComponent = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://via.placeholder.com/150"
          alt="Card cap"
        />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};
