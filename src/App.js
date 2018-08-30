import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      post: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/post')
      .then(res=> res.json())
      .then( post =>{
        console.log(post.result)
        this.setState({
          ...this.state,
          post: post.result
        })
    });

    console.log(this.state.post)
  }
  render() {
    return (
      <div className="App">
          <ul>
            {
              this.state.post.map(post =>
                <li key={post.name}>
                  <h1>{post.name}</h1>
                  <p>{post.content}</p>
                </li>
              )
            }
          </ul>
      </div>
    );
  }
}

export default App;
