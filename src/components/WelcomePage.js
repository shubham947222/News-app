import React from "react";
import { Wave } from "react-animated-text";

const WelcomePage = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     height: "100vh",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <h1
    //     style={{
    //       fontSize: "6rem",
    //       color: "crimson",
    //     }}
    //   >
    //     Welcome To NEWS FEEDER
    //   </h1>
    // </div>
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "6rem",
        color: "crimson",
      }}
    >
      <Wave text="Welcome To NEWS FEEDER" />
    </div>
  );
};

export default WelcomePage;
