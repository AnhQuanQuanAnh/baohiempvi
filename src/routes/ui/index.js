import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import alerts from './alerts';
import badges from './badges';
import buttons from './buttons';
import carousel from './carousel';
import forms from './forms';
import formComponents from './form-components';
import inputGroups from './input-groups';
import jumbotron from './jumbotron';
import modal from './modal';


export default class Ui extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { match } = this.props;

        return (
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/alerts`} />
                <Route path={`${match.url}/alerts`} component={alerts} />
                <Route path={`${match.url}/badges`} component={badges} />
                <Route path={`${match.url}/buttons`} component={buttons} />
                <Route path={`${match.url}/carousel`} component={carousel} />
                <Route path={`${match.url}/forms`} component={forms} />
                <Route path={`${match.url}/form-components`} component={formComponents} />
                <Route path={`${match.url}/input-groups`} component={inputGroups} />
                <Route path={`${match.url}/jumbotron`} component={jumbotron} />
                <Route path={`${match.url}/modal`} component={modal} />
                <Redirect to="/error" />

            </Switch>
        )
    };
}