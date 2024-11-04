import { SlClose } from "react-icons/sl";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AssetContext } from "../../../App";


const CartItem = ({cartItem}) => {
    const [cart,wishlist,cartWishToggleBtn,cartWish,removeCartbtn] = useContext(AssetContext)
    const {description,product_image,product_title,price} = cartItem;
    
    return (
        <div className="bg-white p-6 mt-6 rounded-2xl flex gap-6">
           <figure className="w-2/12">
            <img className="w-full rounded-xl h-40 object-cover" src={product_image} alt="" />
           </figure>
           <div className="flex-1">
            <h1 className="text-xl font-semibold">{product_title}</h1>
            <p className="py-2 text-sColor/50"><span className="font-bold">Description:</span> {description}</p>
            <h2 className="font-bold">Price: ${price}</h2>
           </div>
           <div>
            <SlClose onClick={()=>removeCartbtn(cartItem)} className="text-2xl text-[#ff0000] btn min-h-max h-max p-0 bg-pColor/0 hover:bg-sColor/0 border-none"></SlClose>
           </div>
        </div>
    );
};
CartItem.propTypes = {
    cartItem: PropTypes.object,
}
export default CartItem;