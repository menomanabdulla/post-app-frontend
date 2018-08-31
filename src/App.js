import React, { Component } from 'react';
import './App.css';
const API = require('./API')
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      post: []
    }
  }

  componentDidMount(){
    API.fetchSinglePost('/5b87da606bc7f61a34ffc6a9')
      .then(res =>{
        this.setState({
          ...this.state,
          post: res
        })
      })
  }
  render() {
    console.log(this.state.post.name)
    if(this.state.post.length === 0 ){
      return(
        <h3>Loading...</h3>
      )
    }else{
      return (
        <div className="App">
            <ul>
              {
                (this.state.post.length <= 1 ? 
                    (
                      this.state.post.map( post =>
                        <li key={post.name}>
                          <h1>{post.name}</h1>
                          <p>{post.content}</p>
                        </li>
                      )):(
                    <li key={this.state.post.name}>
                      <h1>{this.state.post.name}</h1>
                      <p>{this.state.post.content}</p>
                      </li>
                    )
                )
              }
            </ul>
        </div>
      )
    }
  }
}

export default App;
