import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Hosting from "../pages/hosting";
import Pricing from "../pages/pricing";
import Vps from "../pages/vps";
import Dns from "../pages/dns";
import Domain from "../pages/domain";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hosting", element: <Hosting /> },
  { path: "/domain", element: <Domain /> },
  { path: "/dns", element: <Dns /> },
  { path: "/vps", element: <Vps /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/sign-up", element: <SignUp /> },
]);

export default router;
