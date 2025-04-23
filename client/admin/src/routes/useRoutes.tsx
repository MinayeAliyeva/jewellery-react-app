import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import { RouteObject, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouting from "./PrivateRouting";
type TypeRouteObject = RouteObject & { auth?: boolean };
const routes: TypeRouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
];
const authMap = (routes: TypeRouteObject[]) => {
  return routes?.map((route: TypeRouteObject) => {
    if (route.auth) {
      route.element = <PrivateRouting>{route.element}</PrivateRouting>;
    }
    if (route.children) route.children = authMap(route.children);
    return route;
  });
};

export const useCustomRoutes = () => {
  return useRoutes(authMap(routes));
};
