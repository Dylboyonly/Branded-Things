import { Outlet } from "react-router-dom";
import NavigateBar from "../components/Navbar";




export default function BaseLayout(){

    return(
        <>
        <NavigateBar/>
        <Outlet />
        </>
    )
}