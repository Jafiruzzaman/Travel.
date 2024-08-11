import React from 'react'

const Common = ({divStyle,spanText,headingText,headingStyle}) => {
  return (
    <div className={`${divStyle}`}>
      <span className={`text-orangePrimary uppercase font-semibold`}>{spanText}</span>
      <h2 className={`text-heading capitalize ${headingStyle} my-3 font-merriweather text-3xl font-extrabold`}>{headingText}</h2>
    </div>
  )
}

export default Common