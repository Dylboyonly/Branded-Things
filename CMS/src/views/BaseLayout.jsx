import NavBar from '../components/NavigationBar';
import { Outlet } from "react-router-dom";



function BaseLayout(){
    return(
        <>
        <NavBar />
        <Outlet />
        </>

    )
}

export default BaseLayout