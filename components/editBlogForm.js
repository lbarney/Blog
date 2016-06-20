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

var EditBlogForm = React.createClass({
	render: function(){
		return(
			<div>
				<div className = 'container'>
				<form className = 'form-inline' onSubmit = {this.props.handleEditBlogSubmit}>
					<div className = 'form-group'>
						<label>Author</label>
						<input type = 'text' className = 'form-control' placeholder = 'Author'
						onChange = {this.props.onAuthorChange}
						value = {this.props.author}/>
					</div>
					<div className = 'form-group'>
						<label>Date</label>
						<input type = 'text' className = 'form-control' placeholder = 'Date'
						onChange = {this.props.onDateChange}
						value = {this.props.date}/>
					</div>
					<div className = 'form-group'>
						<label>Body</label>
						<input type = 'text' className = 'form-control' placeholder = 'Body'
						onChange = {this.props.onBodyChange}
						value = {this.props.body}/>
					</div>
					<div className = 'form-group'>
						<label>ImageUrl</label>
						<input type = 'text' className = 'form-control' placeholder = 'ImageUrl'
						onChange = {this.props.onImageUrlChange}
						value = {this.props.imageUrl}/>
					</div>
					<div className = 'form-group'>
						<label>Comments</label>
						<input type = 'text' className = 'form-control' placeholder = 'Comments'
						onChange = {this.props.onCommentsChange}
						value = {this.props.comments}/>
					</div>
					<div className = 'form-group'>
						<label>Hidden</label>
						<input type = 'boolean' className = 'form-control' placeholder = 'Hidden'
						onChange = {this.props.onHiddenChange}
						value = {this.props.hidden}/>
					</div>
						<button type = 'submit' className = 'btn btn-primary'> Update this blog post </button>

					
				</form>
				</div>
			</div>
			)
	}
});
module.exports = EditBlogForm;

