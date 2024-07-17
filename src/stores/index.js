import { configureStore } from "@reduxjs/toolkit";

//导入子模块reducer
import loginStatusReducer from "./modules/loginStore"
import navigateNameReducer from "./modules/navigateNameStore";
import basicInformationReducer from "./modules/basicInformation";
import meetingReducer from "./modules/meetingStore";
const store = configureStore({
  reducer:{
    loginStatus: loginStatusReducer,
    navigateName: navigateNameReducer,
    basicInformation: basicInformationReducer,
    MeetingSummary: meetingReducer,
  }
})

export default store;