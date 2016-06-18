var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return(
		<div>
			<div>
				<div className = 'navigation'>
				<Link to = '/'>
					<button className = 'btn '>Home</button>
				</Link>
				<Link to='/blog'>
					<button className = 'btn'>Blog</button>
				</Link>
				<Link to = '/about'>
					<button className = 'btn'>About</button>
				</Link>
				<Link to = '/contact'>
					<button className = 'btn'>Contact</button>
				</Link>
				</div>
				<div id = 'box'></div>
					<div className = 'container jumbotron back'>
						<h1 className = 'theTitle'>Lance Barney</h1>
						
					</div>
					{this.props.children}
			</div>
		</div>
			)
	}
});
module.exports = Main;
