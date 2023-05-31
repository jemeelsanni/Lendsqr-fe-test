import React from "react";
import { useNavigate } from "react-router-dom";
//icons
import { ReactComponent as BackIcon } from "../../assets/icons/arrow-back.svg";
import "./_404.scss";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    }
  };

  return (
    <div className="NotFoundPage">
      <h1>404</h1>
      Page Not existing
      <button className="back-button" onClick={goBack}>
        <div className="icon">
          <BackIcon />
        </div>
        <h1>Go back</h1>
      </button>
    </div>
  );
}
