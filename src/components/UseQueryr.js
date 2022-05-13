import { LocalConvenienceStoreOutlined } from '@material-ui/icons'
import React from 'react'
import { useFetchData } from './UseDemor'
export const UseQueryr = () => {
    const res=useFetchData()
    console.log(res)
    const addUser=()=>{
        res.refetch()
        console.log(res)
    }
  return (
    <div>
        <button className='btn-outline-primary btn' onClick={addUser}>Click</button>
    </div>
  )
}
