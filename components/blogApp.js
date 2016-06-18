//blogApp
var React = require('react');

var Blog = React.createClass({
	getInitalState: function(){
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
		
	},


















	render: function(){
		return(
			<div id = 'blog'>
				<p> My Blog Goes HERE</p>
			</div>
			)
	}
});
module.exports = Blog;