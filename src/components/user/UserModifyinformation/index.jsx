import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBasicInformation } from "../../../stores/modules/basicInformation";
import { useState, useEffect } from "react";
import { updateUserInfoApi } from "../../../api";
import UploadAvatar from "./UploadAvatar";
import PersonalIntroduction from "./PersonalIntroduction";
import BasicInformation from "./BasicInformation";
import ChangePassword from "./ChangePassword";
const UserModifyinformation = () => {
  const data = useSelector((state) => state.basicInformation.data);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(data);
  const [newFormData, setNewFormData] = useState(data);
  useEffect(() => {
    console.log(newFormData);
    dispatch(changeBasicInformation(newFormData));
  }, [newFormData, dispatch]);
  const handleChange = (e) => {
    const { id, value } = e.target; // 获取表单元素的 id 和 value
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // 根据 id 更新 formData 中对应的字段
    }));
  };

  const handleIntroductionSubmit = () => {
    updateUserInfoApi(formData);
    alert("修改成功");
    setNewFormData(formData);
  };

  // const handlePasswordSubmit = () => {
  //   if (formData.newPassword !== formData.reNewPassword) {
  //     alert("两次输入的新密码不一致");
  //     return;
  // //   }

  return (
    <main className="layout_content" id="mainContent">
      <div className="content_detail">
        <div className="container">
          <div className="container_left">
            <div className="container_left_item boxShadow">
              <UploadAvatar />
            </div>
            <PersonalIntroduction
              introduction={formData.introduction}
              handleChange={handleChange}
              handleIntroductionSubmit={handleIntroductionSubmit}
            />
          </div>
          <div className="container_right ">
            <BasicInformation
              formData={formData}
              handleChange={handleChange}
              handleIntroductionSubmit={handleIntroductionSubmit}
            />
            <ChangePassword
              formData={formData}
              handleChange={handleChange}
              handleIntroductionSubmit={handleIntroductionSubmit}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserModifyinformation;
