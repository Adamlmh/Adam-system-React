import { configureStore } from "@reduxjs/toolkit";

//导入子模块reducer
import loginStatusReducer from "./modules/loginStore"
import navigateNameReducer from "./modules/navigateNameStore";
const store = configureStore({
  reducer:{
    loginStatus: loginStatusReducer,
    navigateName: navigateNameReducer,
  }
})

export default store;