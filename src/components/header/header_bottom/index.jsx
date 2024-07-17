import { NavLink } from "react-router-dom";

function HeaderBottom() {
  const usertype = localStorage.getItem("usertype");
  const Useritems = [
    { path: "Personalcenter", name: "个人中心" },
    { path: "Recentmeetings", name: "近期会议" },
    { path: "Allmeetings", name: "全部会议" },
    { path: "Submitcontent", name: "提交纪要" },
    { path: "Expressviews", name: "提出意见" },
    { path: "UserModifyinformation", name: "修改信息" },
    { path: "Draftbox", name: "草稿箱" },
    { path: "Mystart", name: "我的收藏" },
  ];
  const Adminitems = [
    { path: "Controlcenter", name: "管理中心" },
    { path: "Handlingopinions", name: "处理意见" },
    { path: "Reviewmeeting", name: "处理纪要" },
    { path: "Modifyinformation", name: "修改信息" },
  ];
  const items = +usertype ? Useritems : Adminitems;
  return (
    <div className="top_route">
      <span className="iconfont icon-zhiyin"></span>
      {items.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? "top_route_item top_route_item_active" : ""
          }
          to={`${item.path}`}
          key={item.path}
        >
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "top_route_item top_route_item_active"
                  : "top_route_item"
              }
            >
              <span className="top_route_item_dot"> </span>
              <span className="top_route_item_name ">{item.name}</span>
            </span>
          )}
        </NavLink>
      ))}
    </div>
  );
}

export default HeaderBottom;
