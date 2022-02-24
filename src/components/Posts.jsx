// Libraries
import React, { useState } from 'react'

// Components
import PostList from './PostList'

// Assets
import readMoreImg from '../test_task_resources/static/image/readMore.svg'

const Posts = () => {

  const [isReadMore, setIsReadMore] = useState(false)

  const readLink  = 'Read more'



  return (
    <div className="posts_layout">
      <PostList isReadMore={isReadMore}/>,

      <div className="read-more">
        { !isReadMore
          ? <button onClick={() => setIsReadMore(true)} className="read-more_button">{readLink} <img className="read-more-img" src={readMoreImg} alt=''/></button>
          : <div/>
        }
      </div>
    </div>
  )
}

export default Posts