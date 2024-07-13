import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./style.css";

function Login() {
  return (
    <div className="main">
      <LeftSide />
      <RightSide />
    </div>
  );
}
export default Login;
