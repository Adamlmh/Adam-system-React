import { NavLink } from "react-router-dom";

function UserLayoutmenu() {
  return (
    <div className="layout_menu">
      <ul id="menu">
        {/* <a href="../Personalcenter/index.html"> */}

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Personalcenter"
        >
          <li className="menu_item " data-path="/Personalcenter">
            <span className="iconfont icon-icon03"></span>
            <span style={{ marginInlineStart: "10px" }}>个人中心</span>
          </li>
        </NavLink>

        {/* </a> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Recentmeetings"
        >
          <li className="menu_item" data-path="/Recentmeetings">
            <span className="iconfont icon-jinqihuiyi1"></span>
            <span style={{ marginInlineStart: "10px" }}>近期会议</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Allmeetings"
        >
          <li className="menu_item" data-path="/Allmeetings">
            <span className="iconfont icon-jinqihuiyi"></span>
            <span style={{ marginInlineStart: "10px" }}>全部会议</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Submitcontent"
        >
          <li className="menu_item" data-path="/Submitcontent">
            <span className="iconfont icon-demo1"></span>
            <span style={{ marginInlineStart: "10px" }}>提交纪要</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Expressviews"
        >
          <li className="menu_item" data-path="/Expressviews">
            <span className="iconfont icon-tijiaojianyifankui"></span>
            <span style={{ marginInlineStart: "10px" }}>提出意见</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="UserModifyinformation"
        >
          <li className="menu_item" data-path="/Modifyinformation">
            <span className="iconfont icon-xiugai"></span>
            <span style={{ marginInlineStart: "10px" }}>修改信息</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Draftbox"
        >
          <li className="menu_item" data-path="/Modifyinformation">
            <span className="iconfont icon-cunrucaogaoxiang"></span>
            <span style={{ marginInlineStart: "10px" }}>草稿箱</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Mystart"
        >
          <li className="menu_item" data-path="/Modifyinformation">
            <span className="iconfont icon-shoucang"></span>
            <span style={{ marginInlineStart: "10px" }}>我的收藏</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default UserLayoutmenu;
