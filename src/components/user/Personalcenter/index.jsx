import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoApi } from "../../../api";
import "./style.css";
import HeadCard from "./headCard";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";

import { changeBasicInformation } from "../../../stores/modules/basicInformation"; // 导入你的Redux action

function Personalcenter() {
  const dispatch = useDispatch();
  const Userdata = useSelector((state) => state.basicInformation.data); // 从Redux中获取用户信息
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfoApi();
        dispatch(changeBasicInformation(response)); // 调度action将获取到的数据存入Redux
      } catch (error) {
        console.error("获取用户信息出错:", error);
        // 处理错误（例如，显示错误消息）
      }
    };

    fetchUserInfo();
  }, [dispatch]);
  return (
    <main className="layout_content" id="mainContent">
      <HeadCard Userdata={Userdata} />
      <div className="content_detail">
        <div className="container">
          <ContainerLeft Userdata={Userdata} />
          <ContainerRight Userdata={Userdata} />
        </div>
      </div>
    </main>
  );
}

export default Personalcenter;
