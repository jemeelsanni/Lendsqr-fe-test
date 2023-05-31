import React from "react";
import "./_input.scss";

export const Input = ({ label, name, error, ...rest }: any) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}

      <div className="input-field-container">
        <input {...rest} />
      </div>
    </div>
  );
};
