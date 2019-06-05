import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import todo from "./todo";
import chat from "./chat";

const Applications = ({ match }) => (
  <div className="dashboard-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/todo`} />
      <Route path={`${match.url}/todo`} component={todo} />
      <Route path={`${match.url}/chat`} component={chat} />
      <Redirect to="/error" />
    </Switch>
  </div>
);

export default Applications;
