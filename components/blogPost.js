//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle


var React = require('react');


var BlogPost = React.createClass({
	render: function(){
		return(
			<div>
				<div className = 'well col-md-10'>
					<h3>Author: {this.props.author} </h3>
					<h4>Date:{this.props.date}</h4>
					<p>{this.props.body}</p>
					<div>
						<p>{this.props.comments}</p>
					</div>
				</div>
			</div>
			)
	}
});
module.exports = BlogPost;