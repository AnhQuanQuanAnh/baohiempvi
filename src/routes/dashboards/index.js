import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import contentDash from './content';

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
            <Route path={`${match.url}/content`} component={contentDash} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Dashboards;