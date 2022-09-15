import axios from "axios";
import { useQuery } from "react-query";

export function useService3(r1){
    return useQuery(["demo1",r1],async()=>{
        return await axios.get("https://reqres.in/api/users?delay=3")
    },{
        enabled:false
    })

}
export function useService3a(r2){
    return useQuery(["demo2",r2],async()=>{
        return await axios.get("https://reqres.in/api/users/2")
    },{
        enabled:false
    })

}