import React, { Component } from 'react'
import './postCreate.css'
class PostCreate extends Component{
    constructor(props){
        super(props)
        this.state = {
            newPost: {
                name: '',
                content: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.createPost = this.createPost.bind(this)
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            newPost:{
                ...this.state.newPost,
                [e.target.name]: e.target.value
            }
        })
    }

    createPost(e){
        e.preventDefault()
        this.props.handleSubmit(this.state.newPost)
        this.setState({
            ...this.state,
            newPost: {
                name: '',
                content: ''
            }
        })
    }
    render() {
        return(
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="post-create-block">
                        <form className="form" onSubmit={this.createPost}>
                            <div className="form-group">
                                <input className="form-control" type="text" name="name" placeholder="Enter name" value={this.state.newPost.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" cols="50" name="content" placeholder="What's on your mind?" value={this.state.newPost.content} onChange={this.handleChange}>
                                </textarea>
                            </div>
                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary post-btn">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCreate 