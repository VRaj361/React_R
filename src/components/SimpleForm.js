import React, { useRef, useState } from 'react'

export const SimpleForm = () => {
    const [first, setfirst] = useState("")
    const [email, setemail] = useState("")
    const password = useRef();
    const [emailerror, setemailerror] = useState(false)
    const [firsterror, setfirsterror] = useState(false)
    const [passworderror, setpassworderror] = useState(false)

    const firstnameHandlor = (e) => {
        if (e.target.value.length < 5 || e.target.value == null) {
            setfirsterror(false)
        } else {
            setfirsterror(true)
            setfirst(e.target.value)
        }
    }
    const emailHandlor = (e) => {
        if (e.target.value.length < 5 || e.target.value == null) {
            setemailerror(false)
        } else {

            setemailerror(true)
            setemail(e.target.value)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        if (password.current.value == null || password.current.value.length < 4) {
            setpassworderror(false)
        } else {
            console.log(first, email, password.current.value)
            setpassworderror(true)
        }

    }

    return (
        <div className='container'>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">First name</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name"
                        onChange={firstnameHandlor}
                    />
                    <div className="text-danger">{firsterror == false ? "Please enter name" : ""}</div>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"
                        onChange={emailHandlor}
                    />
                    <div className="text-danger">{emailerror == false ? "Please enter email" : ""}</div>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        ref={password}
                    />
                    <div className="text-danger">{passworderror == false ? "Please enter password" : ""}</div>
                </div>

                <button type="submit" disabled={emailerror == true && firsterror == true ? "" : "true"} className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}
