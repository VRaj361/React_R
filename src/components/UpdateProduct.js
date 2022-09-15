import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const UpdateProduct = () => {

    const productid = useParams().id;
    // console.log(pr)
    const [product, setproduct] = useState("")
    const [name, setname] = useState(product.name)
    const [qty, setqty] = useState(product.qty)
    const [price, setprice] = useState(product.price)
    
    const getProduct = () => {
        axios.get("https://healthy-me-rest-api.herokuapp.com/products/" + productid).then((res) => {
            console.log(res.data.data)
            setproduct(res.data.data)
            setname(res.data.data.name)
            setqty(res.data.data.qty)
            setprice(res.data.data.price)
        })
    }


    useEffect(() => {
        getProduct()

        return () => {

        }
    }, [])

    const submit=async(e)=>{
        e.preventDefault()
        const obj={
            productId:parseInt(productid),
            name:name,
            qty:parseInt(qty),
            price:parseInt(price)
        }
        console.log(obj)
        await axios.put("https://healthy-me-rest-api.herokuapp.com/products",obj).then(res=>{
            console.log(res.data)
        })
    }
    

    return (
        <div className='container'>
            <h1>hellop</h1>


            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Name</label>
                    <input type="text" className="form-control text-danger" id="exampleInputPassword1" defaultValue={product.name} onChange = {(e)=>setname(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Qty</label>
                    <input type="text" className="form-control text-danger" id="exampleInputPassword1" defaultValue={product.qty} onChange = {(e)=>setqty(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control text-danger" id="exampleInputPassword1" defaultValue={product.price} onChange = {(e)=>setprice(e.target.value)} />
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
        </div>
    )
}
