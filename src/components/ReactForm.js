import React,{ useState } from "react";
import { AddEmpl } from "./AddEmpl";

export const ReactForm = () => {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [id, setId] = useState('')
    const [obj, setobj] = useState([])
    
    const submit=(e)=>{
        e.preventDefault()
        console.log(firstname)
        console.log(lastname)
        console.log(firstname+" "+lastname)
        var obj1={firstname:firstname,lastname:lastname,id:id}

        setobj([...obj,obj1])
        console.log(obj);
    }
    const firstnameHandler=(e)=>{
        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    return (
        <div>
            <h1>React Form </h1>
            <form onSubmit={submit}>
                <div>
                <label for="id">Id</label>
                    <input type="text" onChange={(e)=>setId(e.target.value)} />
                    {id}
                </div>
                <div>
                    <label for="firstname">Firstname</label>
                    <input type="text" onChange={(e)=>firstnameHandler(e)} />
                    {firstname}
                </div>
                <div>
                    <label for="lastname">lastname</label>
                    <input type="text" onChange={(e)=>setlastname(e.target.value)} />
                    {lastname}
                </div>
                <input type="submit" value="submit"></input>
            </form>
            <AddEmpl obj={obj}/>
            
            {/* {
                obj.map((obj)=>{
                    return(
                        <AddEmpl obj={obj}/>
                    )
                }) 
            } */}
            
            {/* <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                <tr>
                    // <td>{firstname}</td>
                    // <td>{lastname}</td>
                </tr>

            </table> */}
        </div>
        
    );
};
