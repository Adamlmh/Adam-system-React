import service from "../utils/axios";

//登录API
export function loginApi(data) {
  return service({
    url: "/login",
    method: "post",
    data,
  });
}

//注册API
export function registerApi(data) {
  return service({
    url: "/register",
    method: "post",
    data,
  });
}

//获取用户信息API
export function getUserInfoApi() {
  const id = localStorage.getItem("id");
  return service({
    url: `/private/Personalcenter/${id}`,
    method: "get",
  });
}

//获取会议纪要信息API
export function getMeetingSummaryApi() {
    const id = localStorage.getItem("id");
  return service({
    url: `/private/MeetingMinutes/${id}`,
    method: "get",
  });
}

//更新个人信息API
export function updateUserInfoApi(data) {
  return service({
    url: `/private/Modifyinformation/${localStorage.getItem(
          "id"
        )}`,
    method: "post",
    data,
  })
}