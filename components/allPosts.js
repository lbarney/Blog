//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle



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
						key = {item.id}
						id = {item.id}
						deletePostFromServer = {props.deletePostFromServer}
						getId = {props.getId}/>
	});

	return(
		<div>
			{blog}
		</div>
	)
};

module.exports = AllPosts;