
// import axios from "axios";
// import { baseUrl } from "../utils/baseUrl";
// import { useEffect , useState} from "react";
// import NavBar from "../components/NavigationBar";


// function Categories(){
//     const [categories, setCategories] = useState([]);
//     // console.log(categories,"<<<<<")
//     async function fetchCategories() {
//         try {
//             const { data } = await axios.get(`${baseUrl}/categories`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.access_token}`,
//                 },
//             });
//             console.log(data.categories,"<<<<<<<<<<<")
//             setCategories(data.categories);
//         } catch (error) {
//             Toastify({
//                 text: "text error",
//                 duration: 2000,
//                 newWindow: true,
//                 close: true,
//                 gravity: "top",
//                 position: "left",
//                 stopOnFocus: true,
//                 style: {
//                     background: "#EF4C54",
//                     color: "#17202A",
//                     boxShadow: "0 5px 10px black",
//                     fontWeight: "bold"
//                 }
//             }).showToast();
//         }
//     }
    
//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     return(
//         <>
//         <NavBar cate={fetchCategories} />
//         </>
//     )
    
// }


// export default Categories


