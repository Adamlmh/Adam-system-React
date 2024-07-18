// import React, { useState } from "react";
// import axios from "axios";
import "./style.module.css";
import { useSelector } from "react-redux";
import UploadAvatar from "./UploadAvatar";
import PersonalIntroduction from "./PersonalIntroduction";
import BasicInformation from "./BasicInformation";
import ChangePassword from "./ChangePassword";
const UserModifyinformation = () => {
  const data = useSelector((state) => state.basicInformation.data);
  console.log(data);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   group: "",
  //   grade: "",
  //   major: "",
  //   email: "",
  //   oldPassword: "",
  //   newPassword: "",
  //   reNewPassword: "",
  //   introduction: "",
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  // const handleFileChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     file: e.target.files[0],
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = new FormData();
  //   form.append("file", formData.file);

  //   axios
  //     .post("http://localhost:8080/upload", form)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const handleIntroductionSubmit = () => {
  //   console.log("Introduction:", formData.introduction);
  // };

  // const handleBasicDataSubmit = () => {
  //   console.log("Basic Data:", formData);
  // };

  // const handlePasswordSubmit = () => {
  //   if (formData.newPassword !== formData.reNewPassword) {
  //     alert("两次输入的新密码不一致");
  //     return;
  // //   }

  //   axios
  //     .post("http://localhost:8080/change-password", {
  //       oldPassword: formData.oldPassword,
  //       newPassword: formData.newPassword,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <main className="layout_content" id="mainContent">
      <div className="content_detail">
        <div className="container">
          <div className="container_left">
            <div className="container_left_item boxShadow">
              <UploadAvatar />
            </div>
            <PersonalIntroduction />
          </div>
          <div className="container_right ">
            <BasicInformation />
            <ChangePassword />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserModifyinformation;
