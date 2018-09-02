import React, { Component } from 'react'
import './singlePost.css';
class SinglePost extends Component{
    constructor(props){
        super(props)
        this.state ={
            isEditableName: false,
            isEditableContent: false,
            updatePost:{
                name: this.props.singlePost.name,
                content: this.props.singlePost.content
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.keyPressHandler = this.keyPressHandler.bind(this)
        this.blurHandler = this.blurHandler.bind(this)
        this.nameEditHandelar = this.nameEditHandelar.bind(this)
    }
    handleChange(e) {
        this.setState({
            ...this.state,
            updatePost:{
                ...this.state.updatePost,
                [e.target.name]: e.target.value
            }
        })
    }
    keyPressHandler(e){
        if(e.key === 'Enter'){
            this.setState({
                ...this.state,
                [e.currentTarget.dataset.name]: false
            })
        }
        this.props.handleUpdate(this.props.singlePost._id,this.state.updatePost)
    }
    blurHandler(e){
        this.setState({
            ...this.state,
            [e.currentTarget.dataset.name]: false
        })
        this.props.handleUpdate(this.props.singlePost._id,this.state.updatePost)
    }
    nameEditHandelar(e){
        this.setState({
            ...this.state,
            [e.currentTarget.dataset.name]: true
        })
    }
    render() {
          return (
                <div className="single-post-block">
                    <div className="single-post-block-inner">
                        <div className="inner-left-block">
                            <span className="avater-block">
                                {this.props.singlePost.name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className="inner-right-block">
                            <div className="title-block">
                            {
                                ((this.state.isEditableName)? 
                                    (<input 
                                    className="form-controll"
                                    name="name"
                                    onChange={this.handleChange}
                                    onKeyPress = {(event) => this.keyPressHandler(event)}
                                    onBlur = {(event)=> this.blurHandler(event)}
                                    type="text" value={
                                        this.state.updatePost.name
                                    } 
                                    data-name="isEditableName"
                                    />) :
                                    <div className="name-avatar-block">
                                        <h1>{this.props.singlePost.name}</h1>
                                    </div>
                                ) 
                                }
                                <span onClick={ (event)=>this.nameEditHandelar(event) } 
                                data-name="isEditableName"
                                className="edit-icon">
                                    <i className="fas fa-pencil-alt"></i>
                                </span>
                            </div>
                                <div className="content-block">
                                    {
                                        ((this.state.isEditableContent)? 
                                            (<textarea rows="4" cols="50" 
                                                className="form-controll"
                                                name="content" 
                                                onChange={this.handleChange}
                                                onKeyPress = {(event) => this.keyPressHandler(event)}
                                                onBlur = {(event)=> this.blurHandler(event)}
                                                value={this.state.updatePost.content} 
                                                data-name="isEditableContent"
                                                >
                                            </textarea>):
                                            <p>{this.props.singlePost.content}</p>
                                        ) 
                                    }
                                    <span onClick={ (event)=>this.nameEditHandelar(event) } 
                                    data-name="isEditableContent"
                                    className="edit-icon">
                                        <i className="fas fa-pencil-alt"></i>
                                    </span>
                                </div>
                                <button onClick={ () => this.props.handleDelete(this.props.singlePost._id)} className="btn btn-danger delete-btn">Delete</button>
                        </div>
                    </div>
                </div>
          )
    }
}
export default SinglePost