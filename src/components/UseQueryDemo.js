import axios from "axios";
import { useQuery } from "react-query";

export function useGetUserData(){
    return useQuery('demo',async()=>{
        return await axios.get("https://reqres.in/api/users?delay=3");
    })
}//if you don't write use in the name of the function it will give an error
export function useGetUserData1(){
    return useQuery("fun2",async()=>{
        return await axios.get("https://reqres.in/api/user?page=2");
    })
}