
import axios from 'axios'
import Toastify from 'toastify-js'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import PageForm from '../components/Form';
import { baseUrl } from '../utils/baseUrl';


function EditProduct(){
    let [products, setProducts] = useState([]);
    let {id} = useParams()
    // console.log(id, '<<<><><><><><><><>')
    const navigate = useNavigate();
    async function fetchProducts() {
        try {
            // setLoading(true)
            const response  = await axios.get(`${baseUrl}/products/${id}`,{
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });

            console.log(response)
            setProducts(response.data.products);
            // console.log(products)
        } catch (error) {
            Toastify({
                text: error.response.data.error,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
        }
    }

    useEffect(() => {
        console.log('ini adalah watchers, akan dijalankan sebelum pemasangan dom & react di komponen ini dan ketika state yg di pantau dalam dependencies(parameter kedua) berubah');
        fetchProducts();
    }, [])

    async function handleSubmit(e, name, description, price, imgUrl, stock, categoryId){
        e.preventDefault()
        try {
            const editedData = {
                name,
                description,
                price: Number(price),
                imgUrl,
                stock: Number(stock),
                categoryId}
            // console.log(editedData,"<<<<<<<<<<<<<<<<<<<<<<<")
                await axios.put(`${baseUrl}/products/${id}`,editedData,{
                    headers:{
                        Authorization:`Bearer ${localStorage.access_token}`
                    }
                })

                Toastify({
                    text: "Success edit product",
                    duration: 2000,
                    newWindow: true,
                    close: true,
                    gravity: "top",
                    position: "left",
                    stopOnFocus: true,
                    style: {
                        background: "#00B29F",
                        color: "#17202A",
                        boxShadow: "0 5px 10px black",
                        fontWeight: "bold"
                    }
                }).showToast();
    
                navigate('/home')
        } catch (error) {
            Toastify({
                text: "heleh",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "#EF4C54",
                    color: "#17202A",
                    boxShadow: "0 5px 10px black",
                    fontWeight: "bold"
                }
            }).showToast();
            
        }
    }

    return(

        <>
         <PageForm handleSubmit={handleSubmit} propName="Edit" product={products}/>
        </>
    )

}

export default EditProduct