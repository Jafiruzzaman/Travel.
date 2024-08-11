import React from 'react'

const Button = ({
  text,style
}) => {
  return (
    <button className={`${style} px-5 py-2 capitalize font-semibold rounded-md`}>{text}</button>
  )
}

export default Button