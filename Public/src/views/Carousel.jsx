import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/Baseurl';
import img1 from '../assets/imageAssets/Branded Things (Desktop Wallpaper)-2/11.png'
import { useNavigate} from 'react-router-dom';


export default function Carousel (){

  const navigate = useNavigate()
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


    return(
        <>
<div className="hero min-h-[50px] relative" >
<img id='image1' src={img1} alt='bg-contain'/>
  <div className="text-neutral-content absolute inset-0 flex flex-col items-center justify-end absolute mb-5">
    <div className="max-w-md">
      <div className="mt-auto">
        <button className="btn"onClick={()=>navigate('/public/products/:id')}>Get Started</button>
      </div>
    </div>
  </div>
</div>


        </>
    )
}