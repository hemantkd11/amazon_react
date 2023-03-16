import React from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const Navigate = useNavigate();
  return (
    <div className="Dropdown">
      <div className="btn Sign-in-dropdown">
        <button
          type="button"
          className="sign-in_btn"
          onClick={() => Navigate("/amazon_react/signup")}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
