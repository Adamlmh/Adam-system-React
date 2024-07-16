import UserLayoutmenu from "../user/Layout_menu/index";
import AdminLayoutmenu from "../admin/Layout_menu/index";
function Navigate() {
  const usertype = window.localStorage.getItem("usertype");
  return (
    <aside className="layout_leftside">
      <div className="side_children">
        <div className="anticon">
          <div className="logoIcon"></div>
          <div className="logoName">Adam System</div>
        </div>
        {+usertype ? <UserLayoutmenu /> : <AdminLayoutmenu />}
      </div>
    </aside>
  );
}
export default Navigate;
