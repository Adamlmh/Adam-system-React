import React from "react";
import favicon from "../../../assets/favicon.ico";
import loginImage from "../../../assets/LoginImage.png";
import { useSelector } from "react-redux";
import "./LeftSide.css";
function LeftSide() {
  const { loginStatus } = useSelector((state) => state.loginStatus);
  return (
    <div className="leftSide">
      <h3 className="logo">
        <img src={favicon} alt="" style={{ width: "33px", height: "33px" }} />
      </h3>
      <h2>{loginStatus ? "Hi,欢迎回来！" : "Hi,欢迎新朋友！"}</h2>
      <img src={loginImage} alt="" />
    </div>
  );
}

export default LeftSide;
