import React from 'react'
import PostContent from './MyPosts/myPosts'

const Posts = (props) => {

  let MyPosts = props.postData.map ( postData => <PostContent like={postData.like_count} post={postData.postContent} /> );
 
  return (
    <div className='UsersPosts'>

      <textarea></textarea>

      <button>Post</button>

      <div className='userPosts'>
              {
                MyPosts
              }
      </div>

    </div>
  )
}

export default Posts;