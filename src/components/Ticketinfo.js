import React from 'react'

export const Ticketinfo = (props) => {
    console.log(props.ticket)
    
    console.log("count"+props.count)
  return (
    <div>
        
        <table className='table'>
            <tr>
                {
                    props.tickets.length+1===1?"Not found":
                
                    <>
                    
            <td>{props.ticket.name}</td>
            <td>{props.ticket.type}</td>
            
            <td><button onClick={()=>{props.deleteTicket(props.ticket); props.countVal(1);console.log("length"+props.tickets.length)}}>Delete</button></td>
            </>
                }
            </tr>
        </table>

    </div>
  )
}
