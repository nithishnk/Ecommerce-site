import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="container">
      <div className="text-center text-title">
        <h1 className="font-weight-bold">
          {name}
          <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
