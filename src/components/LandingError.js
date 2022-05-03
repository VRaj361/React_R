import React from 'react'

export const LandingError = ({props}) => {
    if(props==="fire"){
        throw new Error("fire is error")
    }
  return (
    <div>
        <div>{props}</div>
    </div>
  )
}
