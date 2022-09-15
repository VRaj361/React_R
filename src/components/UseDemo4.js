import React, { useState } from 'react'
import { useAddData } from './UseQuery4'


export const UseDemo4 = () => {
  const res = useAddData()
  const [resdata, setresdata] = useState("")
  const [isloading, setisloading] = useState(false)

  const submit = async() => {
    var data = {
      name: "rocky",
      surname: "bhai"
    }

    res.mutate(data, { onSettled: (resdat) => { setresdata(resdat); } })
    setisloading(true)
  }
  console.log("responce ", resdata)
  return (
    <div className='container'>
      {resdata === "" && isloading === false ? <button className='btn btn-primary' onClick={submit}>Load</button> : resdata === "" && isloading === true ? <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
      </button> : <button className="btn btn-success" disabled>Loaded</button>}
    </div>
  )
}
