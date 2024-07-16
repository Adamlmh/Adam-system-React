import { NavLink } from "react-router-dom";

function AdminLayoutmenu() {
  return (
    <div className="layout_menu">
      <ul id="menu">
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Controlcenter"
        >
          <li className="menu_item " data-path="/Controlcenter">
            <span className="iconfont icon-icon03"></span>
            <span style={{ marginInlineStart: "10px" }}>管理中心</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Handlingopinions"
        >
          <li className="menu_item" data-path="/Recentmeetings">
            <span className="iconfont icon-jinqihuiyi1"></span>
            <span style={{ marginInlineStart: "10px" }}>处理意见</span>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Reviewmeeting"
        >
          <li className="menu_item" data-path="/Allmeetings">
            <span className="iconfont icon-jinqihuiyi"></span>
            <span style={{ marginInlineStart: "10px" }}>处理纪要</span>
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "menu_item menu_item_active_color" : ""
          }
          to="Modifyinformation"
        >
          <li className="menu_item " data-path="/Modifyinformation">
            <span className="iconfont icon-xiugai"></span>
            <span style={{ marginInlineStart: "10px" }}>修改信息</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
export default AdminLayoutmenu;
