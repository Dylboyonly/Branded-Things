import { useEffect, useState } from 'react';
// import NavBar from '../components/NavigationBar';
import ProductTable from './ProductList';
import axios from 'axios';
// import AddProduct from './AddProduct';
import { baseUrl } from '../utils/baseUrl';




export default function HomeCMS() {

    let [products, setProducts] = useState([]);
    // const [search, setSearch] = useState('')
    async function fetchProducts() {
        try {
           
            // setLoading(true)
            const response  = await axios.get(`${baseUrl}/products?sort=&category=&author=&search=`,{
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });

            setProducts(response.data.products);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('ini proses mounted, akan dijalankan sebelum pemasangan dom & react di komponen ini (saat memasuki komponen ini)');
        fetchProducts();
    }, [])

    // useEffect(() => {
    //     console.log('ini adalah watchers, akan dijalankan sebelum pemasangan dom & react di komponen ini dan ketika state yg di pantau dalam dependencies(parameter kedua) berubah');
    //     fetchProducts();
    // }, [])

    return (
        <>
            <div className='justify-center w-[100%] mt-10'>
            <ProductTable products={products} fetchProducts={fetchProducts}/>
            </div>
      
        </>
    )
}