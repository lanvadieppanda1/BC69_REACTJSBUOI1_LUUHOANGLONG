import React from "react";
import { ItemComponent } from "./ItemComponent";

export const BodyComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
      </div>
    </div>
  );
};
