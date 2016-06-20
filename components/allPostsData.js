//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm


	var React = require('react');
	var AllPosts = require('./allPosts.js');


	var AllPostsData = React.createClass({
		getInitialState: function(){
			return {
				blog : []
			}
		},
		deleteBlogFromServer: function(id){
			var self = this;
			$.ajax({
				method: 'DELETE',
				url: '/blog/' + id
				
				
			}).done(function(){
				self.getAllPostsFromServer();
			})
		},
		getAllPostsFromServer: function(){
			var self = this;

			$.ajax({
				method: 'GET',
				url: '/blog'
			}).then(function(data){
				console.log(data);
				self.setState({blog: data})
			})
		},
		componentDidMount: function(){
			this.getAllPostsFromServer();
		},
		render: function(){
			return this.state.blog ? <AllPosts getId = {this.props.getId} deleteBlogFromServer = {this.deleteBlogFromServer} blog = {this.state.blog}/> : null;
		}
		
	});

	module.exports = AllPostsData;








