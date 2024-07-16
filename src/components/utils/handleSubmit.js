import { loginApi, registerApi } from "../../api";

  //处理表单提交
  export const handleSubmit = async (e, data, loginStatus, setAlertMessage, handleShowAlert, setIsSubmitting,usertype,navigate,setTimerUser) => {
    e.preventDefault();
    setIsSubmitting(true);
    localStorage.setItem("usertype", usertype);

    try {
      const response = await (loginStatus ? loginApi(data) : registerApi(data));
      console.log(response.message);
      localStorage.setItem("token", response.token);
      localStorage.setItem("id", response.id);
      setTimeout(() => {
        if (usertype === "1") {
          setAlertMessage(response.message);
          //用路由更改   我想在这里增加一个路由跳转到user路由下
 const timerUser = setTimeout(() => {
        navigate("/user");
        console.log(2);
      }, 2000);
      setTimerUser(timerUser);
          // window.location.href = "/";
        } else {
          setAlertMessage(response.message);
           const timerUser = setTimeout(() => {
          navigate("/admin");
      }, 2000);
      setTimerUser(timerUser);

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
