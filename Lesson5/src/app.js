import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import PageNotFound from './app/pages/PageNotFound';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Main} />
			<Route path="users" component={Users}>
				<Route path=":userId" component={User} />
			</Route>
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('root'));


