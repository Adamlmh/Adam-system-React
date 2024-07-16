import Navigate from "../../components/navigate/index";
import { Outlet } from "react-router-dom";
function AdminPage() {
  return (
    <div>
      <Navigate />
      <Outlet />
    </div>
  );
}
export default AdminPage;
