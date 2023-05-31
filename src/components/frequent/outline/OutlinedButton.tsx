import React from "react";
import "./_outlined-button.scss";

export default function OutlinedButton({
  className,
  onClick,
  children,
  ...rest
}: any) {
  return (
    <button onClick={onClick} className={`${className} outlined-btn`} {...rest}>
      {children}
    </button>
  );
}
