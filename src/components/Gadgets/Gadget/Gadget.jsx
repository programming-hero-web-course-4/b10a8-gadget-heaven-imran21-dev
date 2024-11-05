import PropTypes from "prop-types";

import {  Link } from "react-router-dom";


const Gadget = ({gadget}) => {
    const {price,product_title,product_image,product_id} = gadget;
   
   
    return (
        <div className="bg-white p-5 rounded-xl">
            <img src={product_image} className='w-full rounded-lg h-56 object-cover' alt="Product-Image" />
            <h1 title={product_title} className='text-xl pt-5 pb-2 font-semibold truncate'>{product_title}</h1>
            <p className='text-black/50 font-medium'>Price : ${price}</p>
            <Link to={`/productDetails/${product_id}`}><button id={product_id} className='btn rounded-full btn-outline border-pColor/60 font-bold border-2 mt-5 px-5 hover:bg-pColor hover:border-pColor text-pColor'>View Details</button></Link>
        </div>
    );
};
Gadget.propTypes = {
    gadget: PropTypes.object.isRequired,
}
export default Gadget;