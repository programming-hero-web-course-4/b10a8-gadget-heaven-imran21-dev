
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <header className='bg-white'><Navbar></Navbar></header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
