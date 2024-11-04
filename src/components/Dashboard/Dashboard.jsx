import { useContext } from "react";
import { AssetContext } from "../../App";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";


const Dashboard = () => {
    const [cart, wishlist,cartWishToggleBtn,cartWish] = useContext(AssetContext)
 
    return (
        <div className="min-h-screen">
            <div className="bg-pColor text-center py-7">
            <h1 className="text-3xl text-white font-bold">Dashboard</h1>
            <p className="text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
            <div className="pt-5 flex justify-center gap-4">
                <button onClick={()=>cartWishToggleBtn('cart')} className={cartWish.cart ? 'btn btn-outline text-pColor font-extrabold bg-white px-14 rounded-full py-3 h-max min-h-max':'btn btn-outline text-white px-14 rounded-full py-3 h-max min-h-max'}>Cart</button>
                <button onClick={()=>cartWishToggleBtn('wishlist')}  className={!cartWish.cart ? 'btn btn-outline text-pColor font-extrabold bg-white px-14 rounded-full py-3 h-max min-h-max':'btn btn-outline text-white px-14 rounded-full py-3 h-max min-h-max'}>Wishlist</button>
            </div>
            </div>

            {
             cartWish.cart ? <Cart cart={cart}></Cart> : <Wishlist wishlist={wishlist}></Wishlist>
            }
        </div>
    );
};

export default Dashboard;