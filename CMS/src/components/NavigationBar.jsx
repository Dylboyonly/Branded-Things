
import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { baseUrl } from '../utils/baseUrl';
// import Categories from '../views/Categories';

function NavBar() {
    // console.log(cate,"fathan cabul")
    // const [categories, setCategories] = useState([]);
    const navigate = useNavigate()

    
    function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

    function addProductPage(){
        navigate('/add')
    }

    // async function fetchCategories() {
    //     try {
    //         const { data } = await axios.get(`${baseUrl}/categories`, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.access_token}`,
    //             },
    //         });

    //         setCategories(data.categories);
    //     } catch (error) {
    //         Toastify({
    //             text: "text error",
    //             duration: 2000,
    //             newWindow: true,
    //             close: true,
    //             gravity: "top",
    //             position: "left",
    //             stopOnFocus: true,
    //             style: {
    //                 background: "#EF4C54",
    //                 color: "#17202A",
    //                 boxShadow: "0 5px 10px black",
    //                 fontWeight: "bold"
    //             }
    //         }).showToast();
    //     }
    // }



    // useEffect(() => {
    //     console.log('ini adalah watchers, akan dijalankan sebelum pemasangan dom & react di komponen ini dan ketika state yg di pantau dalam dependencies(parameter kedua) berubah');
    //     fetchCategories();
    // }, [ ])

    return (
        <>
            <nav className="bg-gray-800 p-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-white text-lg font-semibold">Branded Things</span>
                </div>

                <div className="flex justify-between" style={{ justifyContent: "space-between", gap: "20px" }}>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }}>Categories</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {/* {Categories} */}
                            <li><a></a></li>
                        </ul>
                    </div>
                    {/* <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }} >Filter</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>By Id</a></li>
                            <li><a></a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1 bg-blue text-white" style={{ width: "120px" }}>Sort</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Created At</a></li>
                            <li><a>Price </a></li>
                        </ul>
                    </div> */}
                <div className="flex gap-5 align-center">
                <div className="flex">
                    {/* Add Product Button */}
                    <button onClick={addProductPage} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add Product</button>
                </div>
                <div className="flex">
                    {/* Login Button */}
                    <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Log out</button>

                </div>
                </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar