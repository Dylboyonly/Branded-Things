import { useState } from "react"
import DetailProduct from "../views/Detail"
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Cardrender({products}) {
  const navigate = useNavigate()   
    return (
        <>
                <div className="card-compact bg w-70 shadow-xl hover:scale-110 transition-transform border-2 border-black truncate">
                    <figure>
                        <span className="indicator-item badge badge-secondary">new</span>
                        <img
                            src={products.imgUrl}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="font italic font text-2xl text-black">{products.name}</h2>
                        <p>{products.description}</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>navigate(`/public/products/${products.id}`)}>See Detail</button>
                        </div>
                    </div>
                </div>                       

        </>
    )

}