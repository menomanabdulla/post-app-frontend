import React, { Component } from 'react'


class PostList extends Component{
    constructor(props){
        super(props)
    }

    render() {
        //console.log(this.props)
        if(this.props.post.length === 0 ){
          return(
            <h3>Loading...</h3>
          )
        }else{
          return (
            <ul>
                {   this.props.post.map( post =>
                    <li key={post._id}>
                    <h1>{post.name}</h1>
                    <p>{post.content}</p>
                    <p onClick={ () => this.props.handleDelete(post._id)}>Delete</p>
                    </li>)
                }
            </ul>
          )
        }
    }
}

export default  PostList

/* 

            {((this.props.post.length === 0) ? 
                    (
                            this.props.post.map( post =>
                            <li key={post.name}>
                                <h1>{post.name}</h1>
                                <p>{post.content}</p>
                            </li>)
                       
                    )
                    :
                    (
                        <li key={this.props.post.name}>
                            <h1>{this.props.post.name}</h1>
                            <p>{this.props.post.content}</p>
                        </li>
                    )
                )}

*/