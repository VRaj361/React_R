import React,{ useState } from "react";

export const ReactForm = () => {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const submit=(e)=>{
        e.preventdefault()
        console.log(firstname)
        console.log(lastname)
        console.log(firstname+" "+lastname)

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
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                <tr>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                </tr>

            </table>
        </div>
    );
};
