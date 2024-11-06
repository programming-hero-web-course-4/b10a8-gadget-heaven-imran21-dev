import { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { useOutletContext } from "react-router-dom";
import { AssetContext } from "../../../App";
import PropTypes from "prop-types";

const WishlistItem = ({wishlistItem}) => {
    const {description,product_image,product_title,price} = wishlistItem;
    const [addCartBtn] = useOutletContext();

     const [, , , , ,removeWishlistBtn,removeWishlistBtnFOraddToCart] = useContext(AssetContext);
    
    return (
        <div className="bg-white relative p-2 md:p-6 mt-3 md:mt-6 rounded-2xl flex gap-2 md:gap-6">
        <figure className="md:w-2/12">
         <img className="w-full rounded-xl h-20 md:h-40 object-cover" src={product_image} alt="" />
        </figure>
        <div className="flex-1">
         <h1 className="text-xs md:text-xl font-semibold">{product_title}</h1>
         <p className="md:py-2 text-sColor/50 md:text-base text-[10px]"><span className="font-bold">Description:</span> {description}</p>
         <h2 className="md:font-bold font-medium md:text-base text-[10px]">Price: ${price}</h2>
         <button onClick={()=>{addCartBtn(wishlistItem);removeWishlistBtnFOraddToCart(wishlistItem)}} className="btn bg-pColor text-white h-max min-h-max py-2 md:py-3 font-normal rounded-full md:px-6 md:text-[14px] text-[10px] md:mt-5 mt-1 w-full md:w-max">Add to Cart</button>
        </div>
        <div className="md:relative absolute -top-2 -right-0">
         <SlClose onClick={()=>removeWishlistBtn(wishlistItem)} className="text-base md:text-2xl text-[#ff0000] btn min-h-max h-max p-0 bg-pColor/0 hover:bg-sColor/0 border-none"></SlClose>
        </div>
     </div>
    );
};
WishlistItem.propTypes = {
    wishlistItem: PropTypes.object
}
export default WishlistItem;