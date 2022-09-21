import React, { useContext } from 'react'
import userContext from './userContext'

export const UserDemo = () => {
    console.log("in")
    // const {user} = useContext(userContext)
  return (
    <>
        {/* {user[0].name} */}
        <userContext.Consumer>
            {
                (user)=>{
                   return( <h1>My name is : </h1>)
                }
            }
        </userContext.Consumer>
    </>
  )
}
