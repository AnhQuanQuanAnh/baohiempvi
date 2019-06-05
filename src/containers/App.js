import React, { Component, Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router-dom';
import { IntlProvider} from 'react-intl';

import ContactBar from 'Components/ContactBar'
import {  NotificationContainer} from "Components/ReactNotifications";

import { defaultStartPath } from 'Constants/defaultValues'

import { connect } from "react-redux";

import AppLocale from '../lang';
import MainRoute from 'Routes';
import login from 'Routes/layouts/login'
import register from 'Routes/layouts/register'
import error from 'Routes/layouts/error'
import forgotPassword from 'Routes/layouts/forgot-password'

import About from "Routes/landing-pages/about";
import AuthLogin from "Routes/landing-pages/auth-login";
import AuthRegister from "Routes/landing-pages/auth-register";
import Home from "Routes/landing-pages/home";
import Contact from "Routes/landing-pages/contact";
import Content from "Routes/landing-pages/content";
import TaiNan from "Routes/landing-pages/tainan";
import PVICareEnterprise from "Routes/landing-pages/pvi-care-enterprise";
import PVICarePersonal from "Routes/landing-pages/pvi-care-personal";
import OtoTNDS from "Routes/landing-pages/oto-tnds";
import OtoVatChat from "Routes/landing-pages/oto-vatchat";


import 'Assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';


const InitialPath = ({ component: Component, ...rest, authUser }) =>
	<Route
		{...rest}
		render={props =>
			authUser
				? <Component {...props} />
				: <Redirect
					to={{
						pathname: '/login',
						state: { from: props.location }
					}}
				/>}
	/>;

class App extends Component {
	render() {
		const { location, match, user, locale } = this.props;
		const currentAppLocale = AppLocale[locale];
		if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
			return (<Redirect to={defaultStartPath} />);
		}
		return (
			<Fragment>
				<IntlProvider
					locale={currentAppLocale.locale}
					messages={currentAppLocale.messages}
				>

					<Fragment>
  						<NotificationContainer />
						<Switch>
							<InitialPath
							path={`${match.url}app`}
							authUser={user}
							component={MainRoute}
						/>
        					<Route path={`/about`} component={About} />
        					<Route path={`/auth-login`} component={AuthLogin} />
        					<Route path={`/auth-register`} component={AuthRegister} />
        					<Route path={`/home`} component={Home} />
        					<Route path={`/lien-he`} component={Contact} />
        					<Route path={`/content`} component={Content} />
							<Route path={`/bao-hiem-oto-tnds`} component={OtoTNDS} />
							<Route path={`/bao-hiem-oto-vat-chat`} component={OtoVatChat} />
							<Route path={`/tin-tuc`} component={Home} />
							<Route path={`/gioi-thieu`} component={Home} />
							<Route path={`/bao-hiem-tai-nan`} component={TaiNan} />
							<Route path={`/bao-hiem-du-lich`} component={TaiNan} />
							<Route path={`/bao-hiem-suc-khoe-doanh-nghiep`} component={PVICareEnterprise} />
							<Route path={`/bao-hiem-suc-khoe-ca-nhan`} component={PVICarePersonal} />

							<Route path={`/login`} component={login} />
							<Route path={`/register`} component={register} />
							<Route path={`/forgot-password`} component={forgotPassword} />
							<Route path={`/error`} component={error} />
							<Redirect to="/error" />
						</Switch>
						<ContactBar />
					</Fragment>
				</IntlProvider>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ authUser, settings }) => {
	const { user } = authUser;
	const { locale } = settings;
	return { user, locale };
};

export default connect(mapStateToProps, { })(App);

