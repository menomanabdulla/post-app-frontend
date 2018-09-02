import React from 'react'
import SinglePost from './singlePost/singlePost'

 const PostList = (props) =>{
    
    if(props.post.length === 0 ){
        return(
          <h3>Loading...</h3>
        )
    }else{
        //console.log(props.post)
        return(
            <div className="single-post-block-area row">
                <div className="col-md-8 offset-md-2">
                {
                    props.post.map(post=>{
                        //console.log(post);
                       return <SinglePost key={post._id} 
                            singlePost={post}
                        handleDelete={props.handleDelete}
                        handleUpdate={props.handleUpdate}
                        />
                    })
                }
                </div>
            </div>
        )
    }
   
}

export default PostList


/*class PostList extends Component{
    constructor(props){
        super(props)
        this.state ={
            isEditableContent: true,
            content: null
        }
        this.inputChange = this.inputChange.bind(this)
        this.keyPressHandler = this.keyPressHandler.bind(this)
        this.blurHandler = this.blurHandler.bind(this)
    }

    inputChange(event){
        this.setState({
            ...this.state,
            content: event.target.value
        })
    }

    keyPressHandler(event){
       if(event.key === 'Enter'){
           this.setState({
               ...this.state,
               isEditableContent: false
           })
       }
    }
    blurHandler(event){
        this.setState({
            ...this.state,
            isEditableContent: false
        })
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
                    <h1>{
                            ((this.state.isEditableContent)? 
                                (<input 
                                className="form-controll"
                                onChange = {(event) => this.inputChange(event)}
                                onKeyPress = {(event) => this.keyPressHandler(event)}
                                onBlur = {(event)=> this.blurHandler(event)}
                                type="text" value={
                                    this.state.title
                                } />) :

                                post.name
                            ) 
                        }</h1>
                    <p>{post.content}</p>
                    <p onClick={ () => this.props.handleDelete(post._id)}>Delete</p>
                    </li>)
                }
            </ul>
          )
        }
    }
}

export default  PostList*/
