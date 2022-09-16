import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserProfile = () => {
    const isLogin = true;
    if(isLogin){
        return <Outlet></Outlet>
    }else{
        return "Please login first"
    }
  return (
    <>
        {/* <div>UserProfile</div>
        <Outlet/> */}
        <h1>User Profile checking for user login or not to access the dashboard directly and getting result</h1>
    </>
  )
}
