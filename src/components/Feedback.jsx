import React, { useState } from 'react'
import feedbackData from '../test_task_resources/feedback_data.json'
import Button from './Button'

const Feedback = () => {
  
  const [state, setState] = useState(0)

  const {name, instagram_username, text} = feedbackData[state]

  const Next = () => {
    setState((state + 1) % feedbackData.length)
  }

  const Prev = () => {
    const newState = state - 1
    if (newState < 0) {
      setState(feedbackData.length - 1)
    } else {
      setState(state - 1)
    }
  }

  return (
    <section className="feedback">

      <div className="feedback__content">

        <div className="review">
          { window.screen.width > 321
            ? text.length > 270 ? text.slice(0, 270) + '...' : text
            : text.length > 190 ? text.slice(0, 190) + '...' : text
          }
        </div>

        <div className="author">
          <div className="author_name">{name}</div>
          { window.screen.width > 321
            ? <div className="author_instagram_username">, {instagram_username}</div>
            : <div className="author_instagram_username">{instagram_username}</div>
          }         
        </div>
        
      </div>

      <div className="feedback__navigation">
        <div className="circle">
        </div>
        <div className="buttons">
          <Button className="left" onClick={Prev}/>
          <Button className="right" onClick={Next}/>          
        </div>
      </div>

  </section>
  )
}

export default Feedback