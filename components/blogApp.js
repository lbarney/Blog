//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle


var React = require('react');
var AllPostsData = require('./allPostsData.js')
var Toggle = require('./toggle.js');


var BlogApp = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'allPosts',
			activePostId: null
		}
	},
	getId: function(component, id){
		if(component === 'editOnePost'){
			return this.setState({activePostId: id, activeComponent: 'editPost'})
		}else{
			return null;
		}
	},

	showComponent: function(){
		if(this.state.activeComponent === 'allPosts'){
			return <AllPostsData getId = {this.getId}/>
		}else if(this.state.activeComponent === 'postForm'){
			return<AllPostsData toggleActiveComponent={this.toggleActiveComponent}/>
		}else if(this.state.activeComponent === 'editPost'){
			return <EditPostData id = {this.state.activePostId} toggleActiveComponent = {this.toggleActiveComponent}/>
		}else{
			throw new Error('No Active Component',this.state.activeComponent)
		}
	},

	toggleActiveComponent: function(name){
		this.setState({activeComponent: name})
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









