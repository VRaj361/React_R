import React from 'react'
import { Ticketinfo } from './Ticketinfo'
export const TicketDetails = (props) => {
  return (
    <div> 

        <h1>Ticket Details</h1>
        {props.tickets.map((ticket)=>{
            return <Ticketinfo ticket={ticket} deleteTicket={props.deleteTicket} countVal={props.countVal} count={props.count} tickets={props.tickets}/>
        })}

    </div>
  )
}
