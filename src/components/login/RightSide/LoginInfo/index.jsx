import { ExclamationCircleOutlined } from "@ant-design/icons";

function LoginInfo({ loginStatus, onLoginStatusChange }) {
  return (
    <div className="login_info">
      <h3 className="title">
        {loginStatus ? "登录 Adam System" : "注册 Adam System"}
      </h3>
      <span className="typography-secondary">
        <p id="userState">{loginStatus ? "新用户?" : "老用户?"}</p>
        <button className="registerbtn" onClick={onLoginStatusChange}>
          <span id="secondarySpan">
            {loginStatus ? "立即注册" : "立即登录"}
          </span>
        </button>
      </span>
      <div className="alert_info">
        <span className="alert_icon iconfont icon-tishi">
          <ExclamationCircleOutlined />
        </span>
        <div className="alert_content">
          登录信息： 用户名：adam 密码：123456
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
