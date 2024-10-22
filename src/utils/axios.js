import axios from "axios";

//创造一个axios实例
const service = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 5 * 1000,
  headers: {
  "Content-Type": "application/json",
  },
  responseType: "json",
});

//请求拦截器
service.interceptors.request.use(config => {
  //在发送请求之前做些什么
  // 检查浏览器localStorage中是否存在token键值对，如果有，则设置Authorization头部
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config;
},error =>{
  // 对请求错误做些什么
  return Promise.reject(error);
})

//响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  if( response.status < 300){
  //在这里改变 弹窗颜色 把  --alert-color: #fadad8;变成#CFE5DD
  document.documentElement.style.setProperty("--alert-color", "#CFE5DD");
  }
  else{
  document.documentElement.style.setProperty("--alert-color", "#fadad8");
  }
  return response.data;
}, error => {
  console.log(error);
    document.documentElement.style.setProperty("--alert-color", "#fadad8");
  // 对响应错误做点什么
  return Promise.reject(error);
})

export default service