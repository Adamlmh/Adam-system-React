import { createSlice } from "@reduxjs/toolkit";

const loginStatusStore = createSlice({
  name:"loginStatus",
  //初始化状态
  initialState:{
    loginStatus:true,
  },
  //修改状态的方法 同步直接修改
  reducers:{
    changeLoginStatus(state){
      state.loginStatus = !state.loginStatus
    }
  }
})

//解构出来actionCreater函数
export const {changeLoginStatus} = loginStatusStore.actions
//导出reducer
export default loginStatusStore.reducer