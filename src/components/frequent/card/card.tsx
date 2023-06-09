import React from "react";
import "./_card.scss";

export default function Card({ children, className }: any) {
  return <div className={`card ${className ? className : ""}`}>{children}</div>;
}
