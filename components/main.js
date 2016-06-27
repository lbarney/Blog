var React = require('react');
var Link = require('react-router').Link;



var Main = React.createClass({
	render: function(){
		return(
		<div>
			<div >
				<nav className = 'navbar navbar-fixed-top navbar-inverse'>
					<div className = 'container-fluid'>
						<Link to = '/'>
							<button className  = ' navbar-btn '>Home</button>
						</Link>
						<Link to='/blog'>
							<button className = ' navbar-btn'>Blog</button>
						</Link>
						<Link to = '/about'>
							<button className = ' navbar-btn'>About</button>
						</Link>
						<Link to = '/contact'>
							<button className = ' navbar-btn'>Contact</button>
						</Link>
						<Link to = '/login'>
							<button className = 'pull-right navbar-btn navbar-default'>LogIn</button>
						</Link> 
						
					</div>
					
				</nav>
				
					<div className = 'container-fluid jumbotron back '>
						<h1 className = 'theTitle '>Lance Barney</h1>
						
					</div>
					{this.props.children}
			</div>
		</div>
			)
	}
});
module.exports = Main;
