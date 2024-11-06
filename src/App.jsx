
import { Outlet, } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { createContext,  useState } from 'react'
import { toast, ToastContainer,Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




export const AssetContext = createContext([])
function App() {



const [time , setTime] = useState('---')
const [defaultOrder, setDefaultOrder] = useState([]); 
const [orderCart, setOrderCart] = useState([]);
const [pCost, setPcost] = useState(0);
const [cost, setCost] = useState(0);
const [cart, setCart] = useState([]);
const addCartBtn = (gadget) => {
  if (gadget.availability) {
    if (cost < 20000) {
      setCart([...cart, gadget])
    setOrderCart([...orderCart, gadget])
  setCost(cost + gadget.price)
  setPcost(pCost + gadget.price)
  toast.success('Item added to your Cart!',{
    style: {
      padding:'10px 20px',
      color: "#000",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: 'Sora',
      borderRadius: '50px',
      
    },
    position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,

  })
    }
    else{
      toast.error("Maximum spending limit of $20,000 reached.",{
        style: {
          padding:'10px 20px',
          color: "#000",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: 'Sora',
          borderRadius: '50px',
        },
        position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
    
      })
    }
 
  }
  else{
    toast.error('Sorry, this item is currently out of stock',{
      style: {
        padding:'10px 20px',
        color: "#000",
        fontSize: "14px",
        fontWeight: "500",
        fontFamily: 'Sora',
        borderRadius: '50px',
      },
      position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
    })
  }
  
}
const pCostDeleteBtn = () => {
  setPcost(0)
  setOrderCart([])
  
}
   const removeCartbtn = (gadget) => {
   const remainingCart = cart.filter(x => x.product_id !== gadget.product_id)
   const remainingOrderCart = orderCart.filter(x => x.product_id !== gadget.product_id)
   setCart(remainingCart)
   setOrderCart(remainingOrderCart)
   setCost(cost - gadget.price)
   setPcost(pCost - gadget.price)
   toast.warning('Item removed from your Cart.',{
    style: {
      padding:'10px 20px',
      color: "#000",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: 'Sora',
      borderRadius: '50px',
    },
    position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
  })
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
    setDefaultOrder([...defaultOrder,...orderCart])
   const currentTime = new Date().toLocaleString()
   setTime(currentTime)
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
      toast.success('Item added to your Wishlist!',{
        style: {
          padding:'10px 20px',
          color: "#000",
          fontSize: "14px",
          fontWeight: "500",
          fontFamily: 'Sora',
          borderRadius: '50px',
        },
        position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Zoom,
      })
     
    }
   
 
}
const removeWishlistBtn = (gadget) => {
  const reemainingWish = wishlist.filter(gad => gad.product_id !== gadget.product_id);
  setWishlist(reemainingWish)
  toast.warning('Item removed from your Wishlist.',{
    style: {
      padding:'10px 20px',
      color: "#000",
      fontSize: "14px",
      fontWeight: "500",
      fontFamily: 'Sora',
      borderRadius: '50px',
    },
    position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Zoom,
  })
}

const removeWishlistBtnFOraddToCart = (gadget) => {
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
     
      <AssetContext.Provider value={[cart,wishlist,cartWishToggleBtn,cartWish,removeCartbtn,removeWishlistBtn,removeWishlistBtnFOraddToCart]}>
      
      <header className='bg-white'><Navbar></Navbar></header>
  

       <Outlet context={[addCartBtn,addWishlistBtn,sortBtn,cost,purchaseBtn,pCost,pCostDeleteBtn,defaultOrder,time,wishlist]}></Outlet>
    
      
      <Footer></Footer>
      </AssetContext.Provider>
      <ToastContainer/>
    </>
  )
}

export default App
