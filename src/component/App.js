import React, { Component } from 'react';
import './App.css';
import PostList from './postList/postList'
import PostCreate from './postCreate/postCreate'
const API = require('../API')
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      post: [],
      totalPost: null,
      updatePost:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.isEmptyObj = this.isEmptyObj.bind(this)
  }

  componentDidMount(){
    //API.fetchSinglePost('/5b87d41d4b239b18d822c3e1')
    API.fetchAllPost('')
      .then(res =>{
        this.setState({
          ...this.state,
          post: res,
          updatePost: res
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
    /*if(this.isEmptyObj(newPost)){
     
    }
     console.log(this.state.totalPost)
    */
  }

  render(){
      return(
        <div className="App">
          <PostCreate handleSubmit={this.handleSubmit}/>
          <PostList post = {this.state.post}/>
        </div>
      )
  }
}

export default App;