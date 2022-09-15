import React,{useState,useEffect} from 'react'
import userContext from './userContext'
function UserContextProvider({childer}) {
    const [user, setuser] = useState({
        name:"Vraj Patel"
    })
    
    console.log("in user")
  return (
    <userContext.Provider value={user}>
        {childer}
    </userContext.Provider>
  )
}

export default UserContextProvider