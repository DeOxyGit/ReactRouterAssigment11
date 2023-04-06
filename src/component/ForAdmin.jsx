import React from "react";
import { Navigate } from "react-router-dom";

function ForAdmin({ Login, setLogin }) {
  const handleLogout = () => setLogin(false);
  const imgStyle = {
    borderRadius : 20,
  }

  if (!Login) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <img src="https://storage-wp.thaipost.net/2023/01/90736.jpg" width={400} height={250} style={imgStyle} alt="" />
      <h1>This is Admin page</h1>
      <button
        onClick={handleLogout}
        style={{
          borderRadius: "10px",
          height: "40px",
          width: "50",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, rgba(77,123,222,1) 0%, rgba(132,87,255,1) 100%)",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ForAdmin;
