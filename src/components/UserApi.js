import React, { useState } from 'react'
import axios from 'axios'

export const UserApi = () => {
    const [user, setuser] = useState([])
    const [name, setname] = useState("")
    const [job, setjob] = useState("")

    const getApi = () => {
        axios.get("https://reqres.in/api/users?page=2").then(res => {
            console.log(res.data.data)
            setuser(res.data.data)
        })
    }
    const postApi = () => {
        var data = {
            "name": "kartik",
            "job": "crickter"
        }
        axios.post("https://reqres.in/api/users", data).then(res => {
            console.log(res.data)
            alert("success")
        })
    }

    const deleteApi = () => {
        axios.delete("https://reqres.in/api/users/2").then(res => {
            console.log(res.status)
            if (res.status == 204) {
                alert("delete")
            } else {
                alert("delete not ")
            }
        })
    }

    const submit = (e) => {
        e.preventDefault();
        var data = {
            name: name,
            job: job
        }
        axios.post("https://reqres.in/api/users", data).then(res => {
            alert("Submitted")
        })
    }




    return (
        <div>
            <h1>UserApi</h1>
            <button onClick={getApi}>CLICK</button>
            <button onClick={postApi}>POST</button>
            <button onClick={deleteApi}>delete</button>

            {
                user.length > 0 ?
                    <div>

                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((user) => {
                                        return (<tr>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                        </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>

                    </div>
                    : "NO DATA"
            }
            <form onSubmit={submit}>
                <input type="text" placeholder="Enter your name" onChange={(e) => { setname(e.target.value) }} />
                <input type="text" placeholder="Enter your job" onChange={(e) => { setjob(e.target.value) }} />
                <input type="submit" value="submit" />
            </form>


        </div>
    )
}
