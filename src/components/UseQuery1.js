import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import { useGetUserData } from './UseQueryDemo'
export const UseQuery1 = () => {
    const re=useGetUserData()
    if(re.isLoading){
        return <div> <SyncLoader size={5} margin={2} color={"#123abc"} /></div>
    }
    console.log(re.data.data.data)
  return (
    <div>
        <h1>usequery 1</h1>
        
    </div>
  )
}
