import React from 'react'

const PostItem = ({post, id}) => {

  const returnImageCSSClass = (id) => {
    return id === 1 ? 'post_image post_image_1' : id === 2 ? 'post_image post_image_2' : 'post_image post_image_3'
  }

  return (
  <div key={id}>
    <a 
      href={post.url} 
      target="_blank" 
      rel="noreferrer"
      className="post__link"
    >
        <div className="post">
          <div className={returnImageCSSClass(id)}/>
          <div className="post_description">{
            post.title.length > 49 ? post.title.slice(0, 49) + '...' : post.title
          }</div>
        </div>
    </a>
  </div>
  )
}

export default PostItem