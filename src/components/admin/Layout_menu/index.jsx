import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeNavigateName } from "../../../stores/modules/navigateNameStore";
function AdminLayoutmenu() {
  const menuItems = [
    { path: "Controlcenter", icon: "icon-icon03", label: "管理中心" },

    { path: "Handlingopinions", icon: "icon-jinqihuiyi1", label: "处理意见" },

    { path: "Reviewmeeting", icon: "icon-jinqihuiyi", label: "处理纪要" },

    { path: "Modifyinformation", icon: "icon-xiugai", label: "修改信息" },
  ];

  const dispatch = useDispatch();
  return (
    <div className="layout_menu">
      <ul id="menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) => {
              if (isActive) {
                dispatch(changeNavigateName([item.label, item.icon]));
                return "menu_item menu_item_active_color";
              }
              return "menu_item";
            }}
            to={item.path}
          >
            <li className="menu_item " data-path={`/${item.path}`}>
              <span className={`iconfont ${item.icon}`}></span>
              <span style={{ marginInlineStart: "10px" }}>{item.label}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
export default AdminLayoutmenu;
