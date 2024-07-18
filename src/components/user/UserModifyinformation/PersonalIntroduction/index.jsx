function PersonalIntroduction({
  introduction,
  handleChange,
  handleIntroductionSubmit,
}) {
  return (
    <div className="container_left_item boxShadow">
      <div className="container_left_item_head">
        <div className="container_left_item_head_title">个人简介</div>
      </div>
      <div className="container_left_item_body" style={{ padding: "20px" }}>
        <form>
          <div className="container_left_item_body_input">
            <textarea
              id="introduction"
              rows="10"
              placeholder="请输入内容"
              maxLength="200"
              className="container_left_item_body_input_content"
              value={introduction}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="right_form_submit">
            <button
              type="button"
              className="right_form_submit_btn"
              style={{ marginTop: "20px" }}
              id="introductionBtn"
              onClick={handleIntroductionSubmit}
            >
              <span>提交</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalIntroduction;
