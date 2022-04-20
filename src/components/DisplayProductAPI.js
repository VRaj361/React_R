import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UpdateProduct} from './UpdateProduct';
import {Link} from "react-router-dom";
export const DisplayProductAPI = () => {
    // const [product, setproduct] = useState([])
    const [accesstoken, setaccesstoken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWE1ZTRmMWQzZWM3NDhjMDRlODY5YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTAyNjM4NTYsImV4cCI6MTY1MDUyMzA1Nn0.06JzRDU_NxltYKRPG4v8WmfDSxVF_jacswhaEwvjLKw")
    const config ={
        headers: {
            "token":accesstoken
        }
    };
    const getProduct = async () => {
        // await axios.get("primeflixapis.herokuapp.com/api").then(res => {

        await axios.get("https://primeflixapis.herokuapp.com/api/getusers",config).then(res => {

            console.log(res)
            // setproduct(res.data.data)
        })
    
    }
    // getProduct()
    useEffect(() => {
        getProduct()
        return () => {

        }
    }, [])

    // const deleteProduct = async (id) => {
    //     console.log(id)
    //     await axios.delete("https://healthy-me-rest-api.herokuapp.com/products/" + id).then(res => {
    //         console.log(res.status)
    //         if (res.status === 500) {
    //             toast.success('Successfully deleted!', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         } else {
    //             toast.error('Something went wrong!', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         }
    //         getProduct()
    //     })
    // }
    // var id=-1;
    // const updateProduct=(id)=>{
    //     // id=id
    //     console.log(id)
        
    //     {<UpdateProduct id={id}/>}
        
    // }
    

    return (
        <div>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />*/
            {/* <button className="btn btn-primary" onClick={getProduct}>Get Data</button> */}
            // <table className="table table-dark">
            //     <thead>
            //         <tr>
            //             <th scope="col">ID</th>
            //             <th scope="col">Name</th>
            //             <th scope="col">Qty</th>
            //             <th scope="col">Price</th>
            //             <th scope="col">Delete</th>
            //             <th scope="col">Update</th>

            //         </tr>
            //     </thead>
            //     <tbody>
            //         {
            //             product.map((pro) => {
            //                 return (<tr>
            //                     <th scope="row">{pro.productId}</th>
            //                     <td>{pro.name}</td>
            //                     <td>{pro.qty}</td>
            //                     <td>{pro.price}</td>
            //                     <td><button className="btn btn-danger" onClick={() => { deleteProduct(pro.productId) }}>Delete Product</button></td>
            //                     <td><Link className="btn btn-danger" to={`/updateproduct/${pro.productId}`} >Update Button</Link></td>
                                
            //                 </tr>
            //                 )
            //             })
            //         }
            //     </tbody>
            //</table> 
        }
        </div>
    )
}

