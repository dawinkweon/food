import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes as _routes } from "./page/routes";
import { toReactRouterRoutes } from "./utils/routerUtils";

const routes = toReactRouterRoutes(_routes);
const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
