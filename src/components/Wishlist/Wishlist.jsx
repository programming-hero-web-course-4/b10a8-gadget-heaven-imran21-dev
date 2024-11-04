import { Link } from "react-router-dom";
import WishlistItem from "./WishlistItem/WishlistItem";
import PropTypes from "prop-types";

const Wishlist = ({wishlist}) => {
    
    return (
        <div className="md:container mx-auto pt-8">
         <div className="flex items-center ">
                 <h1 className="flex-1 text-xl font-bold py-2">Wishlist</h1> 
                 
         </div>
         <div className="pt-3">
            { wishlist.length < 1 ? <div className="text-center pt-56">
                <h1>Looks like your list is empty—add your first item to get started!</h1>
                <Link to='/' className="btn bg-pColor rounded-full text-white px-8 mt-5">Add Item</Link>
                </div> :wishlist.map((wishlist) => <WishlistItem key={wishlist.product_id} wishlistItem={wishlist}></WishlistItem>)
             
            }
        </div>        
        </div>
    );
};
Wishlist.propTypes = {
    wishlist: PropTypes.array
}
export default Wishlist;