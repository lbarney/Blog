//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle


var React = require('react');


var BlogPost = React.createClass({
	render:function(){
		console.log(this.props);
		return(
			<div>
				<div className = 'well col-md-12 '>
					<h4>Author: {this.props.author} </h4>
					<h5>Date: {this.props.date}</h5>
					<p> {this.props.body} </p>
					<img src ={this.props.imageUrl}/>

						
					<button className = 'btn btn-sucess' onClick = {this.props.getId.bind(null, 'editOneBlog', this.props.id)}>EDIT</button>
					<button className = 'btn btn-danger' onClick = {this.props.deleteBlogFromServer.bind(null, this.props.id)}>DELETE</button>
				
				</div>
				
			</div>
			)
	}
});
module.exports = BlogPost;