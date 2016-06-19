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
					<button className = 'btn btn-warning'onClick = {this.props.toggleActiveComponent.bind(null,'blogPostForm')}>Post to the Blog</button>
				</div>
				)
		}
	});

	module.exports = Toggle;