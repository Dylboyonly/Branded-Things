import { useEffect, useState } from 'react';
import Cardrender from "../components/Card";
import Carousel from "./Carousel";
import NavBar from "../components/Navbar";
import Pagination from "./pagination";
import axios from 'axios';
import { baseUrl } from '../utils/Baseurl';



export default function AppHome() {

    // console.log(ur)
    let [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
    async function fetchProducts() {
        try {
            // setLoading(true)
            const { data } = await axios.get(`${baseUrl}/public/products?sort=createdAt&category=&author=&search=${search}&page[data]=&page[number]=`);
            setProducts(data.data);
            // console.log(data)
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
            <div className="bg-white">
                
                <hr className="" />
                <Carousel />
                <div className="flex items-center mx-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg text-white px-4 py-2 rounded-lg focus:outline-none w-[100%] mt-5 mb-10"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="ml-1 bg text-black px-4 py-2 rounded-lg mt-5 mb-10 bg-white hover:bg-slate-200 border-2 border-black">Search</button>
                </div>
                <hr className="border-2 border-grey" />
                <main className="flex grid grid-cols-4 gap-7 ml-20 p-10 w-[90%]">
                    {products.map((product, index) => {
                        return <Cardrender key={index} products={product} />
                    })}
                </main>
                <Pagination />
            </div>
        </>

    )

}