import React from 'react'

const Button = ({className, onClick}) => {

  const buttonClassName = "buttons_" + className
  const arrowClassName = "arrow arrow_" + className

  return (
    <button onClick={onClick} className={buttonClassName}>
      <div className={arrowClassName}></div>
    </button>
  )
}

export default Button