import React,{useState} from 'react'
import { useGetUserData,useGetUserData1 } from './UseQueryDemo'


import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';

export const UseQuery = () => {

    // const query=new QueryClient()
    // const [user1, setuser1] = useState("")
    // const [user2, setuser2] = useState("")

    // const respo1=useGetUserData();
    // const respo2=useGetUserData1();
    // const [loading, setloading] = useState(false)
    // console.log(respo1)
    // const rep1=async()=>{
        
        
    //     // console.log(respo1.isLoading)

    //     if(respo1.isLoading){
    //         setloading(true)
            
    //     }
    //     else if (respo1.error){
    //         return <div>Error</div>
    //     }else{
            
    //         setloading(false)
    //         setuser1(respo1.data.data.data)
    //     }
        
        
    // }
    // const rep2=async()=>{
    //     console.log(respo2)
    //     if(respo2.isLoading){
    //         // setloading(true)
    //         console.log("in ",loading)
    //     }
    //     else if (respo2.error){
    //         return <div>Error</div>
    //     }else{
    //         // setloading(false)
    //         setuser2(respo2.data.data.data)
    //     }
    // }
    
    // const [first]=useMutation(useGetUserData())
    // const repo= async()=>{
        
    // }
    return (
      
        <div className='container'>
            {/* onClickCapture={()=>{rep1()}} */}
            {/* <button onClick={repo}>Click user1</button> */}
             <Link className="btn btn-primary m-4" to="/usequery1">user1</Link>
             <Link className='btn btn-primary m-4' to="/usequery2">User2</Link>
             
            
        </div>
    )
}
