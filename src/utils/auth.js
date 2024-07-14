// //检查是否有token（防止直接改路由黑进）
// export const verifyToken = function verifyToken() {
//   if (window.location.pathname !== "/login/index.html") {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       location.href = "/login/index.html";
//     }
//   }
//   if (window.location.pathname.startsWith("/manager/")) {
//     if (parseInt(localStorage.getItem("usertype")) !== 0) {
//       location.href = "/login/index.html";
//     }
//   }
// }
// window.addEventListener("load", verifyToken);






