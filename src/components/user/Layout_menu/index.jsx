import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeNavigateName } from "../../../stores/modules/navigateNameStore";

function UserLayoutmenu() {
  const dispatch = useDispatch();

  const menuItems = [
    { path: "Personalcenter", icon: "icon-icon03", label: "个人中心" },
    { path: "Recentmeetings", icon: "icon-jinqihuiyi1", label: "近期会议" },
    { path: "Allmeetings", icon: "icon-jinqihuiyi", label: "全部会议" },
    { path: "Submitcontent", icon: "icon-demo1", label: "提交纪要" },
    {
      path: "Expressviews",
      icon: "icon-tijiaojianyifankui",
      label: "提出意见",
    },
    { path: "UserModifyinformation", icon: "icon-xiugai", label: "修改信息" },
    { path: "Draftbox", icon: "icon-cunrucaogaoxiang", label: "草稿箱" },
    { path: "Mystart", icon: "icon-shoucang", label: "我的收藏" },
  ];
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
            <li className="menu_item" data-path={`/${item.path}`}>
              <span className={`iconfont ${item.icon}`}></span>
              <span style={{ marginInlineStart: "10px" }}>{item.label}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default UserLayoutmenu;
