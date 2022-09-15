import React from 'react'

export const SessionStorageBasic = () => {
    var obj={
        name:"vraj",
        email:"vraj@gmail.com"

    }//turn by turn and whole object

    //session is only save when browser is open
    const submit=()=>{
        sessionStorage.setItem("name",obj.name);
        sessionStorage.setItem("email",obj.email);
        console.log(sessionStorage.getItem("name"))
        console.log(sessionStorage.getItem("email"))
        sessionStorage.setItem("obj",JSON.stringify(obj))
        console.log(JSON.parse( sessionStorage.getItem("obj")).name)
    }
  return (
    <div>
        <button className='btn btn-primary' onSubmit={submit()}>Save in SessionStorage</button>    
    </div>
  )
}
