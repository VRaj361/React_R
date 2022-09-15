import React,{useState , createContext } from 'react'
import { UserContext2 } from './UserContext2'

const userContextD = createContext()
export const UserContext1 = () => {
    const [user, setuser] = useState({
        name:"Vraj Patel"
    })
  return (
    <div>
        <userContextD.Provider value={user}>
            <UserContext2/>
        </userContextD.Provider>
    </div>
  )
}
export {userContextD};

//if you export any default think which is only exists in one in the file
//if you export multiple values then you should user {value} and export it