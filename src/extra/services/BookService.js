import { myAxios } from "./URLMapping";

export const signUp = (user)=>{
    return myAxios.post("book",user)
}

