//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm


var React = require('react');
var BlogPostForm = require('./blogPostForm.js');

var BlogPostData = React.createClass({
	getInitialState: function(){

		return {
			//author: null,
			//date: null,
			body: null,
			imageUrl: null,
			comments: null,
			hidden: null
			}
		},
		handleAuthorChange: function(event){
			this.setState({author: event.target.value})
		},
		handleDateChange: function(event){
			this.setState({date: event.target.value})
		},
		handleBodyChange: function(event){
			this.setState({body: event.target.value})
		},
		handleImageUrlChange: function(event){
			this.setState({imageUrl: event.target.value})
		},
		handleCommentsChange: function(event){
			this.setState({comments: event.target.value})
		},
		handleHiddenChange: function(event){
			this.setState({hidden: event.target.value})
		},
		handleBlogSubmit: function(event){
			event.preventDefault();
			var blog = {};
			blog.author = this.state.author;
			blog.date = this.state.date;
			blog.body = this.state.body;
			blog.imageUrl = this.state.imageUrl;
			blog.comments = this.state.comments;
			blog.hidden = this.state.hidden;

			this.handleNewBlogPost(blog);
			this.setState({author: '', date: '', body: '', imageUrl: '', comments: '', hidden: ''});

	},

		handleNewBlogPost: function(blog){
			$.ajax({
				url: '/blog',
				method: 'POST',
				dataType: 'json',
				data: blog,
				success: function(data){
					this.props.toggleActiveComponent('allPosts');
				}.bind(this),
				error: function(xhr, status,err){
					console.error('/blog', status, err.toString())
				}.bind(this)
			})
		},
		render: function(){

			return(
					<div>
						<div>
						<h3>Publish Blogs Here</h3>
						<BlogPostForm handleBlogSubmit = {this.handleBlogSubmit}
									  handleAuthorChange = {this.handleAuthorChange}
									  handleDateChange = {this.handleDateChange}
									  handleBodyChange = {this.handleBodyChange}
									  handleCommentsChange = {this.handleCommentsChange}
									  handleImageUrlChange = {this.handleImageUrlChange}
									  handleHiddenChange = {this.handleHiddenChange}
									  />
						</div>
					</div>
				)
		}
});
module.exports = BlogPostData;













