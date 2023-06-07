import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

const Root = () => {
  const history = useHistory();
  return (
    <div>
      <div>
        <button onClick={() => history.goBack()}>Go</button>
        <button onClick={() => history.goForward()}>Back</button>
      </div>
      <Switch>
        <Route path="/" component={Navbar} />
        <Route path="/home" component={Navbar} />
        <Route path="/contact" component={Navbar} />
        <Route path="/info" component={Navbar} />
      </Switch>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/info" component={Info} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path={"*"}>
          <h1>Not Founnd</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Root;
