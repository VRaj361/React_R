import React,{useEffect} from 'react'
import { useService3, useService3a } from './UseService3'

export const UseQuery3 = () => {
    const res1=useService3("demo1")
    const res2=useService3a("demo2")
    useEffect(() => {
      console.log(res1)
      console.log(res2)
    
      
    }, [res1,res2])
    
  return (
    <div>
        <button className='btn btn-outline-primary ' onClick={()=>{res1.refetch()}}>first</button>
        <button className='btn btn-outline-primary ' onClick={()=>{res2.refetch()}}>second</button>
    </div>
  )
}
