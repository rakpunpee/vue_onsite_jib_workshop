import { ProductController } from "./controller/ProductController";
import { UserController } from "./controller/UserController";

const authRoutes = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "register",
  },
  {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login",
  },
];

export const Routes = [
  ...authRoutes,
  {
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "all",
  },
];
