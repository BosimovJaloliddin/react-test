import Contact from "../components/contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Login from "../components/Login";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    title: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: 4,
    title: "Info",
    path: "/info",
    element: <Info />,
  },
  {
    id: 5,
    title: "Login",
    path: "/login",
    element: <Login />,
  },
];
