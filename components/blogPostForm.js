//BlogApp
	//AllPostsData
		//AllPosts
			//BlogPost
	//Toggle
	//BlogPostData
		//BlogPostForm

var React = require('react');

var BlogPostForm = React.createClass({
	render: function(){
		return (
			
			<div>

				<div className = 'container container-fluid'>
					<form className = 'form' onSubmit = {this.props.handleBlogSubmit}>
						<div className = 'form-group'>
							<label>Body</label>
							<input type = 'text' className = 'form-control ' placeholder = 'Body'
							onChange = {this.props.handleBodyChange}
							value = {this.props.body}/>
						</div>
						<div className = 'form-group'>
							<label>Image Url</label>
							<input type = 'text' className = 'form-control ' placeholder = 'Image Url'
							onChange = {this.props.handleImageUrlChange}
							value = {this.props.imageurl}/>
						</div>
						
						<button type = 'submit' className = 'btn btn-primary'>Publish Blog</button>	
					</form>	
				</div>
			</div>

			)
	}
});
module.exports = BlogPostForm;