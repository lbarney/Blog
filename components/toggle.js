//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle


	var React = require('react');

	var Toggle = React.createClass({
		render: function(){
			return(
				<div>
					<button className = 'btn btn-default'onClick = {this.props.toggleActiveComponent.bind(null, 'allPosts')}> Blog Posts </button>
				</div>
				)
		}
	});

	module.exports = Toggle;