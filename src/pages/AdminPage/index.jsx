import Navigate from "../../components/navigate/index";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/index";
function AdminPage() {
  return (
    <div className="layout">
      <Navigate />
      <div className="layout_rightside">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
export default AdminPage;
