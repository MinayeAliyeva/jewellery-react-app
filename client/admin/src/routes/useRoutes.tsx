import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouting from "./PrivateRouting";
import Products from "../pages/Products";
type TypeRouteObject = RouteObject & { auth?: boolean };
export enum RoutePaths {
  MAIN = "/",
  REGISTER = "/register",
  LOGIN = "/login",
  PRODUCT_DETAIL = "/product/detail/:id",
  CONTACT = "/contact",
  SHOP = "/shop",
  ABOUT = "/about",
  FAVORITE = "/favorite",
  PRODUCTS = "/products",
  FAG = "/fag",
  PROFILE = "/profile",
  ERROR = "*",
}

const routes: TypeRouteObject[] = [
  {
    path: RoutePaths.MAIN,
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Navigate to={RoutePaths.PRODUCTS} />,
      },
      {
        path: RoutePaths.PRODUCTS,
        element: <Products />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
];
/*

<Routes>      

    <Route path="/" element={<PrivateRouting><MainLayout/></PrivateRouting>}> 
      <Navigate index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
    </Route>
    <Route path="/login" element={<AuthLayout/>}>
     <Route index element={<Login/>}/>
    </Route>

</Routes>
 */
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
