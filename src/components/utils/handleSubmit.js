import { loginApi, registerApi } from "../../api";

  //处理表单提交
  export const handleSubmit = async (e, data, loginStatus, setAlertMessage, handleShowAlert, setIsSubmitting,usertype) => {
    e.preventDefault();
    setIsSubmitting(true);
    localStorage.setItem("usertype", usertype);

    try {
      const response = await (loginStatus ? loginApi(data) : registerApi(data));
      console.log(response);
      localStorage.setItem("token", response.token);
      localStorage.setItem("id", response.id);
      setTimeout(() => {
        if (usertype === "1") {
          setAlertMessage("用户登录成功");
          //用路由更改
          // window.location.href = "/";
        } else {
          setAlertMessage("管理员登录成功");
          // window.location.href = "/admin";
        }
      });
    } catch (error) {
      const errorResponse = JSON.parse(error.request.response);
      setAlertMessage(errorResponse.message);
    } finally {
      handleShowAlert();
      setIsSubmitting(false);
    }
  };

    //弹框出现函数
  export const handleShowAlert = (setShowAlert) => {
    setShowAlert(true);
  };
  //关闭弹框函数
  export const handleCloseAlert = (setShowAlert) => {
    setShowAlert(false);
  };
