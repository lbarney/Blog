//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm
	//EditBlogData
		//EditBlogForm

var React = require('react');
var EditBlogForm = require('./editBlogForm.js');

var EditBlogData = React.createClass({
	getInitialState: function(){
		return{
			author: null,
			date: null,
			body: null,
			comments: null,
			imageUrl: null,
			hidden: null
		}
	},
	loadOneBlogFromServer: function(){
		var self = this;
		$.ajax({
			url: '/blog/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				author: data.author,
				date: data.date,
				body: data.body,
				comments: data.comments,
				imageUrl: data.imageUrl,
				hidden: data.hidden
			})
		})
	},
	updateBlog: function(blog){
		$.ajax({
			url: '/blog/' + this.props.id,
			method: 'PUT',
			dataType: 'json',
			data: blog,
			success: function(data){
				this.props.toggleActiveComponent('allPosts');
				this.loadOneBlogFromServer();
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/blog/' + this.props.id, status, err.toString());
			}.bind(this)
		})
	},
	handleEditBlogSubmit: function(event){
		event.preventDefault();
		var author = this.state.author;
		var date = this.state.date;
		var body = this.state.body;
		var comments = this.state.comments;
		var imageUrl = this.state.imageUrl;
		var hidden = this.state.hidden;
		this.updateBlog({author: author, date: date, body: body, comments: comments, imageUrl: imageUrl, hidden: hidden})
	},
	onAuthorChange: function(event){
		this.setState({author: event.target.value});
	},
	onDateChange: function(event){
		this.setState({date: event.target.value});
	},
	onBodyChange: function(event){
		this.setState({body: event.target.value});
		},
	onCommentsChange: function(){
		this.setState({comments: event.target.value});
	},
	onImageUrlChange: function(){
		this.setState({imageurl: event.target.value});
	},
	onHiddenChange: function(){
		this.setState({hidden: event.target.value});
	},

	render: function(){
		return (
			<div>
				<div>
			<EditBlogForm
			author = {this.state.author}
			date = {this.state.date}
			body = {this.state.body}
			comments = {this.state.comments}
			imageUrl = {this.state.imageUrl}
			hidden = {this.state.hidden}/>
				</div>
			</div>
			);
	}
});
module.exports = EditBlogData;
















