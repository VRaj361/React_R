import React from 'react'

export const LocalStorageBasic = () => {
    var obj={
        name:"vraj",
        email:"vraj@gmail.com"

    }
    const submit=()=>{
        localStorage.setItem("name",obj.name)
        localStorage.setItem("email",obj.email)
    }
  return (
    <div>
        <button className='btn btn-primary' onSubmit={submit()}>Submit</button>
    </div>
  )
}
