import { useState } from "react";
function ChangePassword({ formData, handleChange, handleIntroductionSubmit }) {
  const [isCorrect, setIsCorrect] = useState(true);
  const handleBlur = (e) => {
    if (e.target.value === formData.password) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };
  return (
    <div className="container_left_item boxShadow">
      <div className="container_left_item_head">
        <div className="container_left_item_head_title">修改密码</div>
      </div>
      <div className="container_left_item_body" style={{ padding: "20px" }}>
        <form>
          <div className="container_left_item_body_input">
            <div className="right_form_container_item">
              <div className="right_form_container_item_lable">
                <label
                  htmlFor="oldPassword"
                  className="form_item_required"
                  title="原密码"
                >
                  原密码
                </label>
                <div className="form_item_control">
                  <span className="form_item_control_input relative">
                    <input
                      type="password"
                      aria-required="true"
                      placeholder="请输入你的原密码"
                      maxLength="30"
                      id="oldPassword"
                      className="form_input"
                      required
                      onBlur={handleBlur}
                    />
                    <span
                      className="alertSpan"
                      id="passwordIncorrect"
                      style={{
                        display: isCorrect ? "none" : "block",
                      }}
                    >
                      原密码不正确噢
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right_form_container_item">
            <div className="right_form_container_item_lable">
              <label
                htmlFor="newPassword"
                className="form_item_required"
                title="新密码"
              >
                新密码
              </label>
              <div className="form_item_control">
                <span className="form_item_control_input">
                  <input
                    type="password"
                    aria-required="true"
                    placeholder="请输入新密码"
                    maxLength="30"
                    id="newPassword"
                    // value={formData.newPassword}
                    className="form_input"
                    required
                    // onChange={handleChange}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="right_form_container_item">
            <div className="right_form_container_item_lable">
              <label
                htmlFor="reNewPassword"
                className="form_item_required"
                title="确认密码"
              >
                确认密码
              </label>
              <div className="form_item_control">
                <span className="form_item_control_input relative">
                  <input
                    type="password"
                    aria-required="true"
                    placeholder="请再次输入新密码"
                    maxLength="30"
                    id="reNewPassword"
                    // value={formData.reNewPassword}
                    className="form_input"
                    required
                    // onChange={handleChange}
                  />
                  <span className="alertSpan" id="passwordInconsistent">
                    两次输入不一致
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="right_form_submit">
            <button
              type="button"
              className="right_form_submit_btn"
              style={{ marginTop: "20px" }}
              id="passwordBtn"
              // onClick={handlePasswordSubmit}
            >
              <span>提交</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
