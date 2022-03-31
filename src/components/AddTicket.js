import React,{useState} from 'react'

export const AddTicket = (props) => {
    const [name, setname] = useState('')
    const [type, settype] = useState('')
    const submit=(e)=>{
        e.preventDefault()
        var obj={
            name:name,
            type:type
        }
        props.addTicket(obj)
    }
  return (
    <div>
         <form onSubmit = {submit}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type = "text" onChange = {(e)=>{setname(e.target.value)}} />
            </div>
            <div class="form-group">
                <label for="type">Desc</label>
                <input type = "text" onChange = {(e)=>{settype(e.target.value)}} />
            </div>
            <button type="submit">Submit</button>
        </form>
        
    </div>

  )
}
