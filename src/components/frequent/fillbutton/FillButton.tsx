import React from "react";
import "./_button.scss";

export default function FillButton({ className, children, ...rest }: any) {
  return (
    <div>
      {" "}
      <button className={`${className} btn`} {...rest}>
        {children}
      </button>
    </div>
  );
}
