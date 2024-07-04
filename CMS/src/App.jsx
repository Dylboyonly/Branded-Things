import { useEffect, useState } from 'react'
import './App.css'
import HomeCMS from './components/Home'
import ProductTable from './components/ProductList'
import LoginForm from './components/Login'




export default function App() {

  const [page, setPage] = useState('login')
  let url = "https://phase2-aio.vercel.app"
  let token = localStorage.access_token

  useEffect(() => {
    if (token) {
      setPage('home')
    } else {
      setPage('login')
    }
  }, [])

  return (
    <>
      {page === 'home' && <HomeCMS url={url} setPage={setPage} />}
      {page === 'login' && <LoginForm setPage={setPage} url={url} />}
    </>
  )
}


