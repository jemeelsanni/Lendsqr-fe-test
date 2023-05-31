import React from "react";

export default function DropDwonOptoins({ children, ...rest }: any) {
  return (
    <div>
      {" "}
      <div className="dropdown-option" {...rest}>
        {children}
      </div>
    </div>
  );
}
