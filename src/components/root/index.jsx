import React from "react";
import Navbar from "../Navbar";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "../Home";
import About from "../About";
import Contact from "../contact";
import Info from "../Info";
import Notfound from "../Notfound";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/info"} component={Info} />
          <Route path={"/"}>
            <Redirect to={"home"} />
          </Route>
          <Route path={"*"}>
            <Notfound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Root;
