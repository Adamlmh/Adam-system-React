import Navigate from "../../components/navigate/index";
import { Outlet } from "react-router-dom";
function UserPage() {
  return (
    <div>
      <Navigate />
      <Outlet />
    </div>
  );
}
export default UserPage;
