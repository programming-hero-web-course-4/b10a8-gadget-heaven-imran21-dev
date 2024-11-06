import { useContext, } from "react";
import { AssetContext } from "../../App";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  
    const [cart, wishlist,cartWishToggleBtn,cartWish] = useContext(AssetContext)
   const navigate = useNavigate();
   const backBtn = () =>{
    navigate(-1)
   }
    return (
        <div className="min-h-screen">
            <div className="bg-pColor text-center py-7">
            <div className=" md:container mx-auto flex justify-center items-center relative">
                <button onClick={backBtn} className="left-0 btn bg-pColor/0 border-none px-0 py-0 h-max rounded-full hover:bg-pColor/10 min-h-0 text-white absolute text-3xl hidden md:block"><IoArrowBackCircleOutline></IoArrowBackCircleOutline></button>

                 <h1 className="text-xl md:text-3xl text-white font-bold">Dashboard</h1>
                </div>
            <p className="text-xs w-3/4 md:w-2/5 mx-auto md:text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            <div className="pt-5 flex justify-center gap-4">
                <button onClick={()=>cartWishToggleBtn('cart')} className={cartWish.cart ? 'btn btn-outline text-pColor font-extrabold bg-white px-8 md:px-14 rounded-full py-2 text-xs md:text-[14px] md:py-3 h-max min-h-max':'btn btn-outline text-white px-8 md:px-14 rounded-full py-2 text-xs md:text-[14px] md:py-3 h-max min-h-max'}>Cart</button>
                <button onClick={()=>cartWishToggleBtn('wishlist')}  className={!cartWish.cart ? 'btn btn-outline text-pColor font-extrabold bg-white px-8 md:px-14 rounded-full py-2 text-xs md:text-[14px] md:py-3 h-max min-h-max':'btn btn-outline text-white px-8 md:px-14 rounded-full py-2 text-xs md:text-[14px] md:py-3 h-max min-h-max'}>Wishlist</button>
            </div>
            </div>

            {
             cartWish.cart ? <Cart cart={cart}></Cart> : <Wishlist wishlist={wishlist}></Wishlist>
            }
        </div>
    );
};

export default Dashboard;