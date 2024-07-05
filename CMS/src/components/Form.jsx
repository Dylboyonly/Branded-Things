import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import Toastify from 'toastify-js'


export default function PageForm ({handleSubmit, product, propName}){
    // console.log(product,"<<<<<<")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImgUrl] = useState("");
    const [stock, setStock] = useState(0);
    const [categoryId, setCategoryId] = useState(1);
    const [categories, setCategories] = useState([]);
    // const ct = ["male", 'female', 'trasngender']

    useEffect(()=>{
        if(product){
            setName(product.name),
            setDescription(product.description),
            setPrice(product.price),
            setImgUrl(product.imgUrl),
            setStock(product.stock),
            setCategoryId(product.categoryId)
        }
    },[product])

    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${baseUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });
            console.log(data,"??????????")
            setCategories(data.categories);
        } catch (error) {
            Toastify({
                text: "text error",
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
        fetchCategories();
    }, []);

    return(
        <>
         <div className=" h-screen bg-[url('https://www.datocms-assets.com/39109/1611068182-1608667299707262-pinterest-boards-fashion-aesthetics-quarantine-gen-z.jpg?auto=format%2Ccompress&cs=srgb')] bg-contain blur-sm">
            </div>
            <div className="mx-5 flex items-center justify-center absolute top-[200px] w-[90%] overflow-hidden ml-[60px]">
                <div className="container max-w-screen-lg mx-auto">
                    <div className="bg-slate-300 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="flex justify-end gap-[30px]">
                                <div className="text-black ml-0 border-e-gray-500">
                                    <p className="font-medium text-lg mb-1">Product Preview</p>
                                    <div className="card bg-base-100 w-[250px] h-[380px] shadow-xl">
                                        <figure className="bg-auto">
                                            <img
                                                src={imgUrl}

                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-white">
                                                {name}
                                                <div className="badge badge-secondary text-white">NEW</div>
                                            </h2>
                                            {/* <p className="text-white">{description}</p> */}
                                            <div className="card-actions justify-end h-[20px]">
                                                <button className="btn bg-slate-800 text-white hover:bg-slate-500">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="text-black ml-0 h-[200px]"></div>
                            </div>

                            <form className="lg:col-span-2" onSubmit={(e) =>handleSubmit (e,name,description,price,imgUrl ,stock,categoryId)}>
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div className="md:col-span-5 text-black">
                                        <label>Product Name</label>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                            placeholder="..."
                                            value={name}
                                        />
                                    </div>


                                    <div className="md:col-span-5 text-black mb-3">
                                        <label>Image Url</label>
                                        <input
                                            onChange={(e) => setImgUrl(e.target.value)}
                                            type="text"
                                            name=""
                                            id=""
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                            placeholder="https//..."
                                            value={imgUrl}
                                        />
                                    </div>

                                    <div className="md:col-span-5 text-black mb-3">
                                        <label>Description</label>
                                        <input
                                            onChange={(e) => setDescription(e.target.value)}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                            defaultValue=""
                                            placeholder="...."
                                            value={description}
                                        />
                                    </div>
                                    <div className="flex w-[100%]">
                                        <div className="md:col-span-3 text-black">
                                            <label>Price</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    name=""
                                                    id=""
                                                    placeholder="Rp...."
                                                    className="appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                    defaultValue=""
                                                    value={price}
                                                // placeholder="Rp...."
                                                />
                                            </div>

                                        </div>

                                    </div>
                                    <div className="md:col-span-2 text-black">
                                        <label>Stock</label>
                                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                            <input
                                                onChange={(e) => setStock(e.target.value)}
                                                name=""
                                                id=""
                                                placeholder="0"
                                                className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                                defaultValue=""
                                                value={stock}
                                            // placeholder="0"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 text-black mb-3">
                                        <label>Category</label>
                                        <select
                                            className="w-full input input-bordered  bg-gray-50"
                                            name=""
                                            id=""
                                            onChange={(e) => setCategoryId(e.target.value)}
                                            value={categoryId}
                                        >
                                            {categories.map((c) => {
                                                return (
                                                    <option key={c.id} value={c.id}>
                                                        {c.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="md:col-span-5 text-right mt-4">
                                    <div className="inline-flex items-end pt-6">
                                        <button className="btn bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            {propName}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}