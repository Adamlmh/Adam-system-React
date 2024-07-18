import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import LoginButton from "../LoginButton/index";
import Alert from "../../../alert";
import {
  handleSubmit,
  handleShowAlert,
  handleCloseAlert,
} from "../../../utils/handleSubmit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function LoginForm({ loginStatus }) {
  //定义状态变量
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [timerUser, setTimerUser] = useState(null);

  const data = {
    username,
    password,
    usertype,
  };
  const navigate = useNavigate();
  // 清理定时器
  useEffect(() => {
    return () => {
      if (timerUser) {
        clearTimeout(timerUser);
      }
    };
  }, [timerUser]);

  return (
    <form
      className="loginform"
      id="loginform"
      style={{ display: "block" }}
      onSubmit={(e) =>
        handleSubmit(
          e,
          data,
          loginStatus,
          setAlertMessage,
          () => handleShowAlert(setShowAlert),
          setIsSubmitting,
          usertype,
          navigate,
          setTimerUser
        )
      }
    >
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              checked={usertype === "1"}
              onChange={(e) => {
                setUsertype(e.target.value);
              }}
              name="usertype"
              value="1"
            />
            <label htmlFor="generaluser" style={{ marginRight: "30px" }}>
              普通用户
            </label>
            <input
              id="manager"
              type="radio"
              name="usertype"
              value="0"
              checked={usertype === "0"}
              onChange={(e) => {
                setUsertype(e.target.value);
              }}
            />
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
                <input id="remember" type="checkbox" defaultChecked required />
                <span>同意条款</span>
              </span>
            </div>
            <div className="fr">
              <button type="button">忘记密码?</button>
            </div>
          </div>
        </div>
      </div>
      <LoginButton isSubmitting={isSubmitting} />
      {showAlert && (
        <Alert
          message={alertMessage}
          onClose={() => handleCloseAlert(setShowAlert)}
        />
      )}
    </form>
  );
}

export default LoginForm;
