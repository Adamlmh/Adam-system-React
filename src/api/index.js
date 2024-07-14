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