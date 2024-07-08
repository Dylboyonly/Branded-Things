
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { useEffect, useState } from "react";
// import NavBar from "../components/NavigationBar";
import '../App.css'


function Categories() {
    let [categories, setCategories] = useState([]);
    console.log(categories, "<<<<<ppppp")
    async function fetchCategories() {
        try {
            const { data } = await axios.get(`${baseUrl}/categories`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });
            console.log(data.categories, "<<<<<<<<<<<kkkkk")
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

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Created Date</th>
                            <th>Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((el , index) =>{
                            return(
                        <tr>
                            <td>{index}</td>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.createdAt.split('T')[0]}</td>
                            <td>{el.updatedAt.split('T')[0]}</td>
                        </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>
        </>
    )

}


export default Categories


