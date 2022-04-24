import axios from 'axios'
import React,{useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Protectedrouting = () => {
    var nav=useNavigate()
    const login = async () => {
        // const formdata=new FormData()
        // formdata.append("name","iPhone 12")
        await axios.get("https://healthy-me-rest-api.herokuapp.com/products").then(res=>{
            console.log(res.data)
            //setArr(res.data.data)
          
            res.data.data.map((obj)=>{
                // console.log("in")
                // console.log(obj.name)
                
                // console.log(obj.name==="string")
                if( obj.name== "string"){
                    // console.log("in")
                    sessionStorage.setItem("name",obj.name)
                    nav("/home")
                }
            })
            
        })
    }
    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    )
}
