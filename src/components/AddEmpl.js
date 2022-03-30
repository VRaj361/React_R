import React from 'react'
import {Link} from 'react-router-dom'
import { EmployeeDetails } from './EmployeeDetails'
export const AddEmpl = (props) => {
  

  return (
    <div>
      <h1>AddEmpl</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        {props.obj.map((obj) => {
          return (
            <tr>
              {/* <Link to={`/employeeDetails`} state={obj}  ><td>{obj.id}</td></Link> */}
              <td id="cli">{obj.id}</td>            
              <td>{obj.firstname}</td>
              <td>{obj.lastname}</td>
            </tr>
          )
        })}

      </table>


    </div>
  )
}
