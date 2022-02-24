import React, { useEffect, useState } from 'react'
import blogPosts from '../test_task_resources/blog_posts.json'
import PostItem from './PostItem'

// Assets

const PostList = ({isReadMore}) => {
  
  let [posts, setPosts] = useState([
    {
      "title": "Instagram FAQ — All You Need To Know", 
      "url": "https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b", 
      "date": "2032-02-23"
    },
    {
      "title": "DMEXCO 2019 — Meet Combin in Cologne", 
      "url": "https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63", 
      "date": "2022-01-01"
    },
    {
      "title": "Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1", 
      "url": "https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7", 
      "date": "2021-09-26"
    },
  ])

  const postsBasic = posts

  useEffect(() => {
    loadPosts(isReadMore)
    }, [isReadMore])
  
  const loadPosts = (isReadMore) => {
    const sortedPosts = [...posts, ...blogPosts].sort((a, b) => {
      return +b.date.split('-').join('') - +a.date.split('-').join('')
    })
  
    if (isReadMore) {
      setPosts(sortedPosts)
    } else setPosts(postsBasic)
    
  }
 
  return (
    <div className="posts_wrapper">
      {posts.map((post, index) => 
          <PostItem key={index} post={post} id={index + 1} />          
      )},
    </div>
    )

}

export default PostList