import Home from "../Home";
import Cars from "../Cars";

export const data = [
  {
    id: 1,
    title: "home",
    path: "/",
    element: <Home />,
    hidden: true,
  },
  {
    id: 2,
    title: "Cars",
    path: "/cars",
    element: <Cars />,
    child: true,
    children: [
      {
        id: "2-1",
        title: "Bmw",
        path: "/cars/bmw",
        element: <h1>bmw</h1>,
        hidden: true,
      },
      {
        id: "2-2",
        title: "Audi",
        path: "/cars/audi",
        element: <h1>Audi</h1>,
        hidden: true,
      },
    ],
  },
  {
    id: 3,
    title: "Compyuter",
    path: "/compyuter",
    element: <h1>Compyuter</h1>,
  },
  {
    id: 4,
    title: "City",
    path: "/city",
    element: <h1>City</h1>,
  },
];
