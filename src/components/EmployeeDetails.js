import React from 'react'
import { useLocation, useParams } from 'react-router-dom'


export const EmployeeDetails = () => {
    var obj=useLocation()
    var o=obj.state
  return (
    <div>EmployeeDetails

        {/* <h2>{obj.id}</h2> */}
        
        <h2>{o}</h2>
        {/* <h2>{obj.firstname}</h2> */}
        {/* <h2>{obj.lastname}</h2> */}

    </div>
  )
}
