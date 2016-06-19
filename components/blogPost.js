//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle


var React = require('react');


var BlogPost = React.createClass({
	render:function(){
		return(
			<div>
				<div className = 'well col-md-10'>
					<h4>Author: {this.props.author} </h4>
					<h5>Date: {this.props.date}</h5>
					<p>{this.props.body}</p>
				</div>
				
			</div>
			)
	}
});
module.exports = BlogPost;