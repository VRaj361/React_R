import { Button, FormControl, MenuItem, Select,  TextField } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'

// import { Form, FormGroup, Input, Label } from 'reactstrap'

export const ReactstrapFormUseState = () => {

    //create one use state and set all the properties turn by turn
    const [user, setUser] = useState({
        name:'',
        email:'',
        number:'',
        gender:''
    })

    const handleOnchange = (event,property)=>{
        setUser({...user,[property]:event.target.value})
    }

    const handleSubmit = (e)=>{
        console.log("in")
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <h1>User Registration form</h1>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
            >
                <FormControl>
                    <TextField label="Email" variant='outlined' onChange={(e)=>handleOnchange(e,'email')} value={user.email}>Email</TextField>
                    <TextField label="Name" variant='outlined' onChange={(e)=>{handleOnchange(e,'name')}} value={user.name}>Name</TextField>
                    <TextField label="number" variant='outlined' onChange={(e)=>{handleOnchange(e,'number')}} value={user.number}>Number</TextField>
                    <Select
                        label="Gender"
                        id="demo-simple-select"
                        defaultChecked
                        sx={{
                            margin:"7px"
                            
                        }}
                        onChange={(e)=>{
                            handleOnchange(e,'gender')
                        }}
                        value={user.gender}
                    >
                        <MenuItem value={"male"}>Male</MenuItem>
                        <MenuItem value={"female"}>Female</MenuItem>
                    </Select>

                    <Button variant="outlined" type="submit" onClick={(e)=>{handleSubmit(e)}}>Submit</Button>

                </FormControl>
            </Box>
        </>
    )
}
