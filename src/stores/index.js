import { configureStore } from "@reduxjs/toolkit";

//导入子模块reducer
import loginStatusReducer from "./modules/loginStore"

const store = configureStore({
  reducer:{
    loginStatus: loginStatusReducer
  }
})

export default store;