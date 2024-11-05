import { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { useOutletContext } from "react-router-dom";
import { AssetContext } from "../../../App";


const WishlistItem = ({wishlistItem}) => {
    const {description,product_image,product_title,price} = wishlistItem;
    const [addCartBtn,addWishlistBtn,sortBtn,cost] = useOutletContext();
     const [cart,wishlist,cartWishToggleBtn,cartWish,removeCartbtn,removeWishlistBtn] = useContext(AssetContext);
    
    return (
        <div className="bg-white p-6 mt-6 rounded-2xl flex gap-6">
        <figure className="w-2/12">
         <img className="w-full rounded-xl h-48 object-cover" src={product_image} alt="" />
        </figure>
        <div className="flex-1">
         <h1 className="text-xl font-semibold">{product_title}</h1>
         <p className="py-2 text-sColor/50"><span className="font-bold">Description:</span> {description}</p>
         <h2 className="font-bold">Price: ${price}</h2>
         <button onClick={()=>{addCartBtn(wishlistItem);removeWishlistBtn(wishlistItem)}} className="btn bg-pColor text-white font-normal rounded-full px-6 mt-5">Add to Cart</button>
        </div>
        <div>
         <SlClose onClick={()=>removeWishlistBtn(wishlistItem)} className="text-2xl text-[#ff0000] btn min-h-max h-max p-0 bg-pColor/0 hover:bg-sColor/0 border-none"></SlClose>
        </div>
     </div>
    );
};

export default WishlistItem;