//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm


	var React = require('react');

	var Toggle = React.createClass({
		render: function(){
			return(
				<div>
					<div>
					
					<div>
						<button className = 'btn btn-xs btn-default btn-block 'onClick = {this.props.toggleActiveComponent.bind(null,'allPosts')}>blog posts</button>
						<button className = 'btn btn-default btn-xs btn-block 'onClick = {this.props.toggleActiveComponent.bind(null,'blogPostForm')}>Post to the Blog</button>
					</div>
					</div>
				</div>
				)
		}
	});

	module.exports = Toggle;