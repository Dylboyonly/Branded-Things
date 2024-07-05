import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../utils/baseUrl"
import Toastify from 'toastify-js'

function ProductTable({products ,fetchProducts}) {
    const navigate = useNavigate()

    async function HandleDelete(id){
        console.log(id)
        try {
            await axios.delete(`${baseUrl}/products/${id}`,{
                headers: { Authorization: `Bearer ${localStorage.access_token}` }
            });
            Toastify({
                text: "Success delete",
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
            // navigate('home')
            fetchProducts()
        } catch (error) {
            Toastify({
                text:"gagal delete",
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

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Image Url</th>
                            <th>Stock</th>
                            <th>AuthorId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            return (
                                <tr key={product.id}>
                                    <th>{product.id}</th>
                                    <th><img src={product.imgUrl} /></th>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.imgUrl}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.authorId}</td>
                                    <td>
                                        <div className="row"><button className="btn w-[75px] mb-2 bg-green-600 text-black" onClick={()=>{navigate(`/edit/${product.id}`)}}>Edit</button>
                                         <button className="btn bg-red-400 text-black" onClick={()=>{HandleDelete(product.id)}}>Delete</button>
                                        </div>
                                        </td>
                                </tr>

                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                            <td><button>Edit</button> <button>Delete</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default ProductTable