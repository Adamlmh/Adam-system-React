import { useRoutes } from "react-router-dom";
import routes from "./routes";

export  function Router() {
  return useRoutes(routes);
}