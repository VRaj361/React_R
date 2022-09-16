import { Button, FormControl, MenuItem, Select,  TextField } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import { signUp } from './services/BookService'
import {toast} from 'react-toastify'
// import { Form, FormGroup, Input, Label } from 'reactstrap'

export const ReactstrapFormUseState = () => {

    //create one use state and set all the properties turn by turn
    const [user, setUser] = useState({
        name:'',
        author:'',
        price:'',
        category:''
    })

    const handleOnchange = (event,property)=>{
        setUser({...user,[property]:event.target.value})
    }

    const handleSubmit = (e)=>{
        console.log("in")
        e.preventDefault();
        // console.log(user);

        //post the data to the server
        signUp(user).then((res)=>{
            console.log(res);
            console.log("in request")
            toast.success("Add Book Successfully")
            setUser({
                name:'',
                author:'',
                price:'',
                category:''
            })
        }).catch(err=>{
            console.log(err)
            console.log("in error part")
            toast.error("Somethings went wrong")
        })

        
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
                    <TextField label="Author" variant='outlined' onChange={(e)=>handleOnchange(e,'author')} value={user.author}>Email</TextField>
                    <TextField label="Name" variant='outlined' onChange={(e)=>{handleOnchange(e,'name')}} value={user.name}>Name</TextField>
                    <TextField label="Price" variant='outlined' onChange={(e)=>{handleOnchange(e,'price')}} value={user.price}>Number</TextField>
                    <Select
                        label="Gender"
                        id="demo-simple-select"
                        defaultChecked
                        sx={{
                            margin:"7px"
                            
                        }}
                        onChange={(e)=>{
                            handleOnchange(e,'category')
                        }}
                        value={user.category}
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
