import axios from 'axios'
import React from 'react'

export const GetRequest = () => {
    const get=async()=>{
        axios.get("http://localhost:1337/api/products").then((data)=>{
            console.log(data)
        })
    }
  return (

    
    <div className='container'>
        <button onClick={get}>Fetch</button>
        
    </div>
  )
}
