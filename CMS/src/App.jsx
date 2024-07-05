// import { useEffect, useState } from 'react'
// import './App.css'
// import HomeCMS from './views/Home'
// import LoginForm from './views/Login'
// import AddProduct from './views/AddProduct'

import { RouterProvider } from "react-router-dom";
import router from "./routers/router";



export default function App() {

  // const [page, setPage] = useState('home')
  // let url = "https://server.yoelk20.tech"


  // useEffect(() => {
  //   if (token) {
  //     setPage('home')
  //   } else {
  //     setPage('login')
  //   }
  // }, [])

  return (
    <>
      {/* {page === 'home' && <HomeCMS url={url} setPage={setPage} />}
      {page === 'login' && <LoginForm setPage={setPage} url={url} />}
      {page === 'add' && <AddProduct setPage={setPage} url={url}/>} */}
      {/* <React.StrictMode> */}
        <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </>
  )
}




