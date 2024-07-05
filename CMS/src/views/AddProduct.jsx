import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
import { useNavigate } from "react-router-dom";
import PageForm from "../components/Form";
import Toastify from 'toastify-js'

function AddProduct() {
    const navigate = useNavigate()
    async function handleSubmit(e , name , description , price , stock , imgUrl , categoryId) {
        console.log(e);
        e.preventDefault();
        const newData = {
            name,
            description,
            price: Number(price),
            stock: Number(stock),
            imgUrl,
            categoryId,
        };
        console.log(newData)
        try {
            const { data } = await axios.post(`${baseUrl}/products`, newData, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`,
                },
            });

            console.log(data);
            Toastify({
                text: "Success add new data",
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
            navigate('/home')
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

    return (
        <>
            {/* Hello world */}
            <PageForm handleSubmit={handleSubmit} propName= "Submit"/>
        </>
    )
}

export default AddProduct