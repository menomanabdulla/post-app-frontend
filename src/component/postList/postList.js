import React from 'react'
import SinglePost from './singlePost/singlePost'

 const PostList = (props) =>{
    
    if(props.post.length === 0 ){
        return(
          <h3>Loading...</h3>
        )
    }else{
        return(
            <div className="single-post-block-area row">
                <div className="col-md-8 offset-md-2">
                {
                    props.post.map(post=>{
                       return <SinglePost key={post._id} 
                            singlePost={post}
                        handleDelete={props.handleDelete}
                        handleUpdate={props.handleUpdate}
                        handleLike = {props.handleLike}
                        />
                    })
                }
                </div>
            </div>
        )
    }
}

export default PostList
