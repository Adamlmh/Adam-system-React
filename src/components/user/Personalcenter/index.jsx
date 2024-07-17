import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoApi, getMeetingSummaryApi } from "../../../api";
import "./style.css";
import HeadCard from "./headCard";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";
import { changeBasicInformation } from "../../../stores/modules/basicInformation"; // 导入你的Redux action
import { changeMeetings } from "../../../stores/modules/meetingStore"; // 导入你的Redux action
function Personalcenter() {
  const dispatch = useDispatch();
  const Userdata = useSelector((state) => state.basicInformation.data); // 从Redux中获取用户信息
  const Meetingdata = useSelector((state) => state.MeetingSummary.meetings); // 从Redux中获取用户信息
  useEffect(() => {
    const fetchUserInfo = async () => {
      const UserResponse = await getUserInfoApi();
      const MeetingResponse = await getMeetingSummaryApi();
      dispatch(changeBasicInformation(UserResponse)); // 调度action将获取到的数据存入Redux
      dispatch(changeMeetings(MeetingResponse)); // 调度action将获取到的数据存入Redux
    };
    fetchUserInfo();
  }, [dispatch]);

  return (
    <main className="layout_content" id="mainContent">
      <HeadCard Userdata={Userdata} />
      <div className="content_detail">
        <div className="container">
          <ContainerLeft Userdata={Userdata} />
          <ContainerRight Meetingdata={Meetingdata} />
        </div>
      </div>
    </main>
  );
}

export default Personalcenter;
