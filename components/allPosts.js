//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm



var React = require('react');
var BlogPost = require('./blogPost.js');

function AllPosts(props){
	var blog = props.blog.map(function(item){
		return <BlogPost author = {item.author}
						date = {item.date}
						imageUrl = {item.imageUrl}
						body = {item.body}
						comments = {item.comments}
						hidden = {item.hidden}
						key = {item._id}
						id = {item._id}
						deleteBlogFromServer = {props.deleteBlogFromServer}
						getId = {props.getId}/>
	});

	return(
		<div>
			{blog}
		</div>
	)
};

module.exports = AllPosts;