import { createSlice } from "@reduxjs/toolkit";

const navigateNameStore = createSlice({
  name: "navigateName",
  initialState: {
    navigateName: ['', ''], // 初始化状态为包含两个空字符串的数组
  },
  reducers: {
    // 定义一个带参数的reducer，用于更新navigateName
    changeNavigateName(state, action) {
       [state.navigateName[0], state.navigateName[1]]= action.payload;

    }
  }
});

// 解构出来actionCreater函数
export const { changeNavigateName } = navigateNameStore.actions;
// 导出reducer
export default navigateNameStore.reducer;
