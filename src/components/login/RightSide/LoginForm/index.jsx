import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import LoginButton from "../LoginButton/index";
import { useState } from "react";
import axios from "axios";
import Alert from "../../../alert";

function LoginForm({ loginStatus }) {
  //定义状态变量
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  //弹框出现函数
  const hanleShowAlert = () => {
    setShowAlert(true);
  };
  //关闭弹框函数
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  //处理表单提交
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    localStorage.setItem("usertype", usertype);
    const fetchUrl = loginStatus
      ? "http://localhost:8080/api/login"
      : "http://localhost:8080/api/register";

    try {
      const response = await axios.post(fetchUrl, {
        username,
        password,
        usertype,
      });
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        //在这里改变 弹窗颜色 把  --alert-color: #fadad8;变成#CFE5DD
        document.documentElement.style.setProperty("--alert-color", "#CFE5DD");
        setTimeout(() => {
          if (usertype === "1") {
            alert("用户登录成功");
            //用路由更改
            // window.location.href = "/";
          } else {
            alert("管理员登录成功");
            // window.location.href = "/admin";
          }
        });
      }
    } catch (error) {
      console.log(error.request.response);
      const errorResponse = JSON.parse(error.request.response);
      setAlertMessage(errorResponse.message);
    } finally {
      hanleShowAlert();
      setIsSubmitting(false);
    }
  };
  return (
    <form className="loginform" id="loginform" onSubmit={handleSubmit}>
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
      {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
    </form>
  );
}

export default LoginForm;
