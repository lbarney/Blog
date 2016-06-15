var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('./../main');
var About = require('./../about');
var Home = require('./../home');
var Blog = require('./../blogapp');
var Contact = require('./../contact');
var Project = require('./../projects');


ReactDom.render(
		<Router history = {hashHistory}>
			<Route path = '/' component = {Main}>
				<IndexRoute component = {Home}/>
				<Route path = '/blog' component = {Blog}/>
				<Route path = '/projects' component = {Project}/>
				<Route path = '/contact' component = {Contact}/>
			</Route>
		</Router>,

		document.getElementById('app')

	);
