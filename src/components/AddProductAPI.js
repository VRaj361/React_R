import axios from 'axios'
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AddProductAPI = () => {
    const [id, setid] = useState("")
    const addProduct = async () => {
        // const data = {
        //     "name": "iphone1",
        //     "price": 1000,
        //     "productId": 123,
        //     "qty": 122
        // }

        const data={
            "name":"iphone1",
            "email":"iphone@gmail.com",
            "password":"123456"
        }

        // await axios.post("https://healthy-me-rest-api.herokuapp.com/products", data). then(res => {
        await axios.post("https://primeflixapis.herokuapp.com/api/register", data). then(res => {
            console.log(res.data)
            if (res.status === 200) {
                
                toast.success(`${res.data.data.name} added successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setid(res.data.data._id)
                console.log(res.data.data._id)
            }
        })
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
