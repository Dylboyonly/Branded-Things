import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../utils/Baseurl";
import Toastify from 'toastify-js'
import axios from 'axios'


export default function DetailProduct() {
  let [products, setProducts] = useState([]);
  console.log(products)
  const { id } = useParams()

  async function fetchProducts() {
    try {

      const { data } = await axios.get(`${baseUrl}/public/products/${id}`);
      setProducts(data.products);
      console.log(data)

    } catch (error) {
      console.log(error)
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
    console.log('ini proses mounted, akan dijalankan sebelum pemasangan dom & react di komponen ini (saat memasuki komponen ini)');
    fetchProducts();
  }, [])




  return (
    <>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={products.imgUrl}
              className="w-[1000px] md:w-[200px]"
              />
          </figure>
          <div className="card-body">
            <div>
            <h2 className="card-title">{products.name}</h2>
            <p>{products.description}</p>
             <span className="text-3xl font-bold text-gray-900 dark:text-white justify-start">Rp{products.price}</span>
            </div>
            <div className="flex" style={{ justifyContent: "center", gap: "300px" , alignItems:"flex-end" }} >
              <div>
                <div className="flex items-center justify-end">
                  <a href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ini buat halaman detail  */}
    </>
  )
}