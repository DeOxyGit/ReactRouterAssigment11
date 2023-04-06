import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>This is About page</h1>
      <button
        onClick={handleChange}
        style={{
          borderRadius: "10px",
          height: "40px",
          width: "50",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, rgba(77,123,222,1) 0%, rgba(132,87,255,1) 100%)",
        }}
      >
        Redirect
      </button>
    </div>
  );
}

export default About;
