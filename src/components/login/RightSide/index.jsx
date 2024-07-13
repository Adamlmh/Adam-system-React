import React from "react";
import "./RightSide.css";
import LoginButton from "./LoginButton/index";
import LoginInfo from "./LoginInfo/index";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
function RightSide() {
  return (
    <div className="rightSide">
      <LoginInfo />
      <form className="loginform" id="loginform">
        <div className="item">
          <div className="item_input">
            <div className="item_input_content">
              <span className="inputSpan" id="usernameSpan">
                <span className="item_icon iconfont icon-yonghu">
                  <UserOutlined />
                </span>
                <input
                  type="text"
                  id="username"
                  placeholder="请输入账号"
                  className="input"
                  required
                />
              </span>
            </div>
          </div>
          <div className="item_explain_error" id="usernameError">
            请输入账号
          </div>
        </div>
        <div className="item">
          <div className="item_input">
            <div className="item_input_content">
              <span className="inputSpan" id="passwordSpan">
                <span className="item_icon iconfont icon-mima">
                  <UnlockOutlined />
                </span>
                <input
                  type="password"
                  id="password"
                  placeholder="请输入密码"
                  className="input"
                  required
                />
              </span>
            </div>
          </div>
          <div className="item_explain_error" id="passwordError">
            请输入密码
          </div>
        </div>
        <div className="item">
          <div className="item_input">
            <div className="item_input_content">
              <input
                id="generaluser"
                type="radio"
                defaultChecked
                name="usertype"
                value="1"
              />
              <label htmlFor="generaluser" style={{ marginRight: "30px" }}>
                普通用户
              </label>
              <input id="manager" type="radio" name="usertype" value="0" />
              <label htmlFor="manager">管理员</label>
            </div>
          </div>
          <div className="item_explain_error" id="passwordError">
            请输入密码
          </div>
        </div>
        <div className="item">
          <div className="item_input">
            <div className="item_input_content">
              <div className="fl">
                <span>
                  <input
                    id="remember"
                    type="checkbox"
                    defaultChecked
                    required
                  />
                  <span>同意条款</span>
                </span>
              </div>
              <div className="fr">
                <button type="button">忘记密码?</button>
              </div>
            </div>
          </div>
        </div>
        <LoginButton />
      </form>
    </div>
  );
}

export default RightSide;
