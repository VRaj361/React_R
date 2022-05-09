import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import { useGetUserData1 } from './UseQueryDemo'
export const UseQuery2 = () => {
    const re=useGetUserData1()
    if(re.isLoading){
        return <div> <SyncLoader size={5} margin={2} color={"#E4598B"} /></div>
    }
    console.log(re.data.data.data)
  return (
    <div>
        <h1>Usequery2</h1>
    </div>
  )
}
