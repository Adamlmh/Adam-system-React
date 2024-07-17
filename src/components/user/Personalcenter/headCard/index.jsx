function HeadCard({ Userdata }) {
  console.log(Userdata);
  return (
    <div className="card boxShadow">
      <div className="card_cover">
        <div className="user_info">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${require("../../../../assets/avatar.jpg")})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="info">
            <h3 id="name">{Userdata.name}</h3>
            <span style={{ opacity: 0.7 }} id="group">
              {Userdata.group}
            </span>
          </div>
        </div>
      </div>
      <div className="card_body">
        <div className="card_group">
          <label className="card_item" htmlFor="Gallry">
            <input type="radio" name="card_item" defaultChecked id="Gallry" />
            <div className="card_item_label">
              <span className="iconfont icon-gallery biggr"></span>
              <span>Gallry</span>
            </div>
          </label>
          <label className="card_item" htmlFor="Frinds">
            <input type="radio" name="card_item" defaultChecked id="Frinds" />
            <div className="card_item_label">
              <span className="iconfont icon-follow_s biggr"></span>
              <span>Frinds</span>
            </div>
          </label>
          <label className="card_item" htmlFor="Followrs">
            <input type="radio" name="card_item" defaultChecked id="Followrs" />
            <div className="card_item_label">
              <span className="iconfont icon-follow_solid biggr"></span>
              <span>Followrs</span>
            </div>
          </label>
          <label
            className="card_item card_item_label_slected"
            htmlFor="Profile"
          >
            <input type="radio" name="card_item" defaultChecked id="Profile" />
            <div className="card_item_label">
              <span className="iconfont icon-profile2 biggr"></span>
              <span>Profile</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default HeadCard;
