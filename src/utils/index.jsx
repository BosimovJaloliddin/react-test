import Contact from "../components/contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Login from "..//components/Login";
import Sign from "../components/Sign";

export const navbar = [
  {
    id: 1,
    title: "",
    path: "/",
    element: <Home />,
    isPrive: true,
  },
  {
    id: 2,
    title: "Home",
    path: "/home",
    element: <Home />,
    isPrive: true,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    element: <Contact />,
    isPrive: true,
  },
  {
    id: 4,
    title: "Info",
    path: "/info",
    element: <Info />,
    isPrive: false,
  },
  {
    id: 5,
    title: "Login",
    path: "/login",
    element: <Login />,
    isPrive: true,
  },
  {
    id: 6,
    title: "Sign",
    path: "/home/:id",
    element: <Sign />,
    isPrive: true,
  },
];
