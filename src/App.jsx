
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { createContext, useState } from 'react'

export const AssetContext = createContext([])


function App() {

const [pCost, setPcost] = useState(0)
const [cost, setCost] = useState(0);
const [cart, setCart] = useState([]);
const addCartBtn = (gadget) => {
  setCart([...cart, gadget])
  setCost(cost + gadget.price)
  setPcost(pCost + gadget.price)
}
const pCostDeleteBtn = () => {
  setPcost(0)
  
}

const removeCartbtn = (gadget) => {
   const remainingCart = cart.filter(x => x.product_id !== gadget.product_id)
   setCart(remainingCart)
   setCost(cost - gadget.price)
   setPcost(pCost - gadget.price)
}
const sortBtn = ()=> {
 const sData = [...cart].sort((a,b) => b.price - a.price)
 setCart(sData)
}
 
const purchaseBtn =()=>{
  if (cart.length > 0) {
    
    setCart([])
    document.getElementById('my_modal_5').showModal()
    setCost(0)
  }
  else{
    alert('mt')
  }

}
const [wishlist, setWishlist] = useState([]);
const addWishlistBtn = (gadget) => {
   const findDuplicate =  wishlist.find(gad => gad.product_id === gadget.product_id)
    if (!findDuplicate) {
      setWishlist([...wishlist, gadget])

      const wishBtn = document.getElementById(gadget.product_id);
      wishBtn.setAttribute('disabled',true)
    }
    else{
      alert('already added this item')
      const wishBtn = document.getElementById(gadget.product_id);
      wishBtn.setAttribute('disabled',true)
    }
 
}
const removeWishlistBtn = (gadget) => {
  const reemainingWish = wishlist.filter(gad => gad.product_id !== gadget.product_id);
  setWishlist(reemainingWish)

}
const [cartWish, setCartWish] = useState({
  cart: true,
  status: 'cart'
})
const cartWishToggleBtn = (status)=> {
  if (status === 'cart') {
    setCartWish({
      cart : true,
      status: 'cart'
    })
   
  }
  else{
    setCartWish({
      cart : false,
      status: 'cart'
    })
  }
    
}

  return (
    <>
      <AssetContext.Provider value={[cart,wishlist,cartWishToggleBtn,cartWish,removeCartbtn,removeWishlistBtn]}>
      <header className='bg-white'><Navbar></Navbar></header>
      <Outlet context={[addCartBtn,addWishlistBtn,sortBtn,cost,purchaseBtn,pCost,pCostDeleteBtn]}></Outlet>
      <Footer></Footer>
      </AssetContext.Provider>
    </>
  )
}

export default App
