import React from "react";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log({ user });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Welcome {user?.username}</h2>

      <ul>
        <li>Name - {user?.name}</li>
        <li>Email - {user?.email}</li>
        <li>Contact - {user?.contact}</li>
      </ul>
    </div>
  );
};

export default Home;
