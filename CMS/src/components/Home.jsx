import { useEffect, useState } from 'react';
import NavBar from './NavigationBar';
import ProductTable from './ProductList';
import axios from 'axios';
import AddProduct from './AddProduct';




export default function HomeCMS({ url, setPage }) {

    // const [page, setPage] = useState('home')
    let [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
    async function fetchProducts() {
        try {
            // setLoading(true)
            const { data } = await axios.get(`${url}/apis/pub/branded-things/products?q=${search}&limit=8&page=1&sort=ASC`);
            setProducts(data.data.query);
            // let product = data.data.query
            console.log(data.data.query)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('ini proses mounted, akan dijalankan sebelum pemasangan dom & react di komponen ini (saat memasuki komponen ini)');
        fetchProducts();
    }, [])

    useEffect(() => {
        console.log('ini adalah watchers, akan dijalankan sebelum pemasangan dom & react di komponen ini dan ketika state yg di pantau dalam dependencies(parameter kedua) berubah');
        fetchProducts();
    }, [search])

    return (
        <>
            <NavBar setPage={setPage} />

            <div className="flex items-center mx-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none w-[100%] mt-5 mb-10"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 mb-10">Search</button>
            </div>
            <div className='justify-center w-[80%] ml-[120px]'>
            <ProductTable products={products} />
            </div>
            <div>
                <AddProduct />
            </div>

            

        </>
    )
}