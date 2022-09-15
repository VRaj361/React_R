import React from 'react'
import { userContextD } from './UserContext1'
export const UserContext3 = () => {
    
  return (
    <>
        <userContextD.Consumer>
            {
                (user)=>{
                    return (<><h1>My name is {user.name}.</h1></>)
                }
            }
        </userContextD.Consumer>
    </>
  )
}
