function BasicInformation({
  formData,
  handleChange,
  handleIntroductionSubmit,
}) {
  return (
    <div className="container_right_item boxShadow">
      <div className="container_right_item_body" style={{ padding: "20px" }}>
        <div className="right_form">
          <form id="basicData">
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label htmlFor="id" className="form_item_required" title="ID">
                    ID
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="这是你的ID"
                        maxLength="30"
                        value="1"
                        className="form_input"
                        readOnly
                        disabled
                        id="id"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="name"
                    className="form_item_required"
                    title="昵称"
                  >
                    昵称
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="请输入昵称"
                        maxLength="30"
                        id="name"
                        // value={data.introduction}
                        className="form_input"
                        required
                        // onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="username"
                    className="form_item_required"
                    title="账号"
                  >
                    账号
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="这是你的账号"
                        maxLength="30"
                        value="Adam"
                        className="form_input"
                        readOnly
                        disabled
                        id="username"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="group"
                    className="form_item_required"
                    title="组别"
                  >
                    组别
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="请输入组别"
                        maxLength="30"
                        id="group"
                        // value={formData.group}
                        className="form_input"
                        required
                        // onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="grade"
                    className="form_item_required"
                    title="年级"
                  >
                    年级
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="请输入你的年级"
                        maxLength="30"
                        id="grade"
                        // value={formData.grade}
                        className="form_input"
                        required
                        // onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="major"
                    className="form_item_required"
                    title="专业"
                  >
                    专业
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="请输入专业"
                        maxLength="30"
                        id="major"
                        // value={formData.major}
                        className="form_input"
                        required
                        // onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="email"
                    className="form_item_required"
                    title="邮箱"
                  >
                    邮箱
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="请输入邮箱"
                        maxLength="30"
                        id="email"
                        // value={formData.email}
                        className="form_input"
                        required
                        // onChange={handleChange}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_container">
              <div className="right_form_container_item">
                <div className="right_form_container_item_lable">
                  <label
                    htmlFor="role"
                    className="form_item_required"
                    title="权限"
                  >
                    权限
                  </label>
                  <div className="form_item_control">
                    <span className="form_item_control_input">
                      <input
                        type="text"
                        aria-required="true"
                        placeholder="您的权限"
                        maxLength="30"
                        value="用户"
                        className="form_input"
                        readOnly
                        disabled
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_form_submit">
              <button
                type="button"
                className="right_form_submit_btn"
                id="basicDataBtn"
                // onClick={handleBasicDataSubmit}
              >
                <span>提交</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default BasicInformation;
