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
var AllPostsData = require('./allPostsData.js');
var Toggle = require('./toggle.js');
var BlogPostData = require('./blogPostData.js');
var EditBlogData = require('./editBlogData.js');


var BlogApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'allPosts',
			activePostId: null
		}
	},
	getId: function(component, id){
		if(component === 'editOneBlog'){
			return this.setState({activeBlogId: id, activeComponent: 'editBlog'})
		}else{
			return null;
		}
	},

	showComponent: function(){
		if(this.state.activeComponent === 'allPosts'){
			return <AllPostsData getId = {this.getId}/>
		}else if(this.state.activeComponent === 'blogPostForm'){
			return<BlogPostData toggleActiveComponent = {this.toggleActiveComponent}/>
		}else if(this.state.activeComponent === 'editBlog'){
			return <EditBlogData id = {this.state.activePostId} toggleActiveComponent = {this.toggleActiveComponent}/>
		}else{
			throw new Error('No Active Component',this.state.activeComponent)
		}
	},

	toggleActiveComponent: function(name){
		this.setState({activeComponent : name})
	},


	render: function(){
		return(
			<div id = 'blog'>
			
				<Toggle toggleActiveComponent={this.toggleActiveComponent}/>
				{this.showComponent()}
			</div>
			)
	}
});
module.exports = BlogApp;









