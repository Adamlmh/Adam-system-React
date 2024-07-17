export default function ContainerLeft({ Userdata }) {
  return (
    <div className="container_left">
      <div className="container_left_item boxShadow">
        <div className="container_left_item_body" style={{ padding: "20px" }}>
          <div className="container_left_item_Follower">
            <div className="footer">
              <span className="typography_secondary">Followr</span>
              <h5>12K</h5>
            </div>
            <div className="divider_vertical"></div>
            <div className="footer">
              <span className="typography_secondary">Following</span>
              <h5>112K</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container_left_item boxShadow">
        <div className="container_left_item_head">
          <div className="container_left_item_head_title">关于我</div>
        </div>
        <div className="container_left_item_body" style={{ padding: "20px" }}>
          <span className="typography_secondary" id="introduction">
            如果给你寄一本书， 我不会寄给你诗歌，
            我要给你一本关于植物，关于庄稼的， 告诉你稻子和稗子的区别，
            告诉你一棵稗子提心吊胆的春天。
          </span>
          <div className="spin_container">
            <ul className="list_items">
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-nianji"></span>
                  <span className="list_item_meta_content" id="grade">
                    {Userdata.grade}
                  </span>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-zhuanyezhishijineng"></span>
                  <span className="list_item_meta_content" id="major">
                    {Userdata.major}
                  </span>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-youxiang"></span>
                  <span className="list_item_meta_content" id="email">
                    {Userdata.email}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container_left_item boxShadow">
        <div className="container_left_item_head">
          <div className="container_left_item_head_title">社交</div>
        </div>
        <div className="container_left_item_body" style={{ padding: "20px" }}>
          <div className="spin_container">
            <ul className="list_items">
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-GitHub"></span>
                  <span className="list_item_meta_content">
                    https://github.com/Adamlmh
                  </span>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-weixin"></span>
                  <span className="list_item_meta_content">qjk813813</span>
                </div>
              </li>
              <li className="list_item">
                <div className="list_item_meta">
                  <span className="list_item_meta_icon iconfont icon-QQ"></span>
                  <span className="list_item_meta_content">1848753122</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
