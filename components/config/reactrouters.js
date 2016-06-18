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
var Projects = require('./../projects');


ReactDOM.render(
		<Router history = {hashHistory}>
			<Route path = '/' component = {Main}>
				<IndexRoute component = {Home}/>
				<Route path = '/blog' component = {Blog}/>
				<Route path = '/projects' component = {Projects}/>
				<Route path = '/contact' component = {Contact}/>
				<Route path = '/about' component = {About}/>
			</Route>
		</Router>,

		document.getElementById('app')

	);
