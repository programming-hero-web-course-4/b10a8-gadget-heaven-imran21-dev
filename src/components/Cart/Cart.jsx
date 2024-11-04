import { SlEqualizer } from "react-icons/sl";
import CartItem from "./CartItem/CartItem";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import verify from '../../assets/Group.png'

const Cart = ({cart}) => {
   const [addCartBtn,addWishlistBtn,sortBtn,cost,purchaseBtn,pCost,pCostDeleteBtn] = useOutletContext();
    
    return (
        <div className="md:container mx-auto pt-8">
         <div className="flex items-center">
                 <h1 className="flex-1 text-xl font-bold py-2">Cart</h1> 
                 <h1 className="text-xl font-bold">Total cost: ${cost}</h1> 
                 <button onClick={sortBtn} className="flex items-center border border-pColor min-h-max h-max py-3 text-pColor font-normal  btn rounded-full mx-5">Sort by Price <SlEqualizer></SlEqualizer></button>  
                 <button onClick={purchaseBtn} className="btn bg-pColor rounded-full min-h-max h-max py-3 border-pColor text-white font-normal px-5">Purchase</button>
         </div>
         <div className="pt-3">
            { cart.length < 1 ? <div className="text-center pt-56">
                <h1>Looks like your list is empty—add your first item to get started!</h1>
                <Link to='/' className="btn bg-pColor rounded-full text-white px-8 mt-5">Add Item</Link>
                </div> :cart.map((cart,idx) => <CartItem key={idx} cartItem={cart}></CartItem>)
             
            }
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box flex flex-col items-center">
    <img src={verify} alt="" className="pt-3" />
    <h3 className="font-bold text-xl border-b-2 border-pColor/10 pb-3 pt-5 w-2/4 text-center">Payment Successfully</h3>
    <p className="py-4">Thanks for purchasing</p>
    <p className="py-0">Total: ${pCost}</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link to='/'><button onClick={pCostDeleteBtn} className="btn px-20 rounded-full bg-pColor/20 border-none">Close</button></Link>
      </form>
    </div>
  </div>
</dialog>        
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array
}
export default Cart;