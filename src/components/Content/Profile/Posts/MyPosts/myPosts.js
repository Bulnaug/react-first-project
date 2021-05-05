import React from 'react'

const PostContent = (props) => {

  return (
    <div className='myPosts' >
      <div>{props.post}</div>
      <div>likes: {props.like}</div>
    </div>
  )
}

export default PostContent;