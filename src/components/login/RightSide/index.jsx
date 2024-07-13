import React from "react";
import "./RightSide.css";
import LoginForm from "./LoginForm/index";
import LoginInfo from "./LoginInfo/index";
import { useSelector, useDispatch } from "react-redux";
import { changeLoginStatus } from "../../../stores/modules/loginStore";
function RightSide() {
  const { loginStatus } = useSelector((state) => state.loginStatus);
  const dispatch = useDispatch();
  return (
    <div className="rightSide">
      <LoginInfo
        loginStatus={loginStatus}
        onLoginStatusChange={() => {
          dispatch(changeLoginStatus());
        }}
      />
      <LoginForm loginStatus={loginStatus} />
    </div>
  );
}

export default RightSide;
