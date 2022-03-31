import React from 'react'

export const Ticketinfo = (props) => {
    console.log(props.ticket)

    var count=0;
  return (
    <div>
        
        <table className='table'>
            <tr>
                {
                    props.ticket.name===undefined?"Not found":
                
                    <>
                    
            <td>{props.ticket.name}</td>
            <td>{props.ticket.type}</td>
            <td><button onClick={()=>{props.deleteTicket(props.ticket)}}>Delete</button></td>
            </>
                }
            </tr>
        </table>

    </div>
  )
}
