import React from "react";
function Home({ Login, setLogin }) {
  const handleLogin = () => setLogin(true);
  const handleLogout = () => setLogin(false);

  return (
    <div>
      <h1>This is Home Page</h1>
      {Login ? (
        <button
          style={{
            borderRadius: "10px",
            height: "40px",
            width: "50",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, rgba(77,123,222,1) 0%, rgba(132,87,255,1) 100%)",
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          style={{
            borderRadius: "10px",
            height: "40px",
            width: "50",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg, rgba(77,123,222,1) 0%, rgba(132,87,255,1) 100%)",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      )}
      {}
    </div>
  );
}

export default Home;
