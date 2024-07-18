function UploadAvatar() {
  return (
    <div className="container_left_item_body" style={{ padding: "20px" }}>
      {/* <form onSubmit={handleSubmit} encType="multipart/form-data"> */}
      <div className="upload">
        <span className="upload_span">
          <input
            type="file"
            accept=".jpg, .jpeg, .gif, .png, .bmp"
            style={{ display: "none" }}
            name="file"
            // onChange={handleFileChange}
          />
          <div className="upload_container">
            <div className="add_box">
              <div className="add">
                <span
                  className="iconfont icon-touxiang"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "5px",
                  }}
                ></span>
                <span>上传头像</span>
              </div>
            </div>
            <p className="upload_hint">
              只能上传jpg、jpeg、gif、png、bmp文件, 且不超过5kb
            </p>
          </div>
        </span>
      </div>
      <div className="right_form_submit">
        <button
          type="submit"
          className="right_form_submit_btn"
          id="avatarDataBtn"
        >
          <span>提交</span>
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}

export default UploadAvatar;
