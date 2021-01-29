import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./components/Header";
import home from "./screens/Home";
import detailPage from "./screens/DetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={home} exact={true} />
          <Route path="/detailpage" component={detailPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
