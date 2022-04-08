import {useState} from 'react'

const UserinputHook = () => {
    const [enteredvalue, setenteredvalue] = useState('')
    const [valuevalidation, setvaluevalidation] = useState(false)
    

    const valueChangeHandler =(e)=>{

        setenteredvalue(e.target.value)
        console.log(e.target.value)
    }
    const valuevalidationhandler = ()=>{
                                                                
            if(enteredvalue.length>0){
                setvaluevalidation(true)
            }
            else{
                setvaluevalidation(false)
            }                                       

    }

    return {
        value: enteredvalue,valueChangeHandler,valuevalidation,valuevalidationhandler
    }
}
export default UserinputHook;
