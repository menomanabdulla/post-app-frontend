import React, { Component } from 'react'

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
            <div className="post-create-block">
                <form onSubmit={this.createPost}>
                    <input type="text" name="name" placeholder="Enter name" value={this.state.newPost.name} onChange={this.handleChange}/>
                    <textarea rows="4" cols="50" name="content" placeholder="What's on your mind?" value={this.state.newPost.content} onChange={this.handleChange}>
                    </textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}

export default PostCreate 