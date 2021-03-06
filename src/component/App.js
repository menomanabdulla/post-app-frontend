import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PostList from './postList/postList'
import PostCreate from './postCreate/postCreate'
const API = require('../API')
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      post: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleLike = this.handleLike.bind(this)
    //this.isEmptyObj = this.isEmptyObj.bind(this)
  }

  componentDidMount(){
    //API.fetchSinglePost('/5b87d41d4b239b18d822c3e1')
    API.fetchAllPost('')
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
  }

  /*componentDidUpdate(prevProps,prevState){
    //console.log(prevState.totalPost)
    //console.log(this.state.totalPost)
    if(prevState.post != this.state.updatePost){
      API.fetchAllPost()
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
    }
  }*/
  
  /*isEmptyObj(obj) {
    for (var key in obj) {
      console.log(key.name)
        if (hasOwnProperty.call(obj, key.length === 0 )) return false;
    }
    return true;
  }*/

  handleSubmit = (newPost) =>{
    API.createPost(newPost)
    .then((res)=>{
      API.fetchAllPost()
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
    })
  }
  handleDelete = (deleteItem) =>{
    API.deletePost(`/${deleteItem}`)
    .then((res)=>{
      API.fetchAllPost()
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
    })
  }

  handleUpdate= (updateItem,updateContent) =>{
    API.updatePost(`/${updateItem}`,updateContent)
    .then((res)=>{
      API.fetchAllPost()
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
    })
  }

  handleLike= (updateItem,updateLike) =>{
    API.updatePost(`/${updateItem}`,updateLike)
    .then((res)=>{
      API.fetchAllPost()
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
    })
  }

  render(){
      return(
        <div className="App container">
          <PostCreate handleSubmit={this.handleSubmit}/>
          <PostList post = {this.state.post}
          handleDelete = {this.handleDelete}
          handleUpdate = {this.handleUpdate} 
          handleLike = {this.handleLike}
          />
        </div>
      )
  }
}

export default App;
