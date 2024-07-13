import React from "react";
import favicon from "../../../assets/favicon.ico";
import loginImage from "../../../assets/LoginImage.png";
import "./LeftSide.css";
function LeftSide() {
  return (
    <div className="leftSide">
      <h3 className="logo">
        <img src={favicon} alt="" style={{ width: "33px", height: "33px" }} />
      </h3>
      <h2>Hi,欢迎回来！</h2>
      <img src={loginImage} alt="" />
    </div>
  );
}

export default LeftSide;
