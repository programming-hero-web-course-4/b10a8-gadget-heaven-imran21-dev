import PropTypes from "prop-types";

import {  Link } from "react-router-dom";


const Gadget = ({gadget}) => {
    const {price,product_title,product_image,product_id} = gadget;
   
   
    return (
        <div className="bg-white md:p-5 rounded-xl">
            <img src={product_image} className=' w-full rounded-lg h-56 object-cover' alt="Product-Image" />
            <h1 title={product_title} className='pl-3 md:pl-0 md:text-xl pt-3 md:pt-5 md:pb-2 font-semibold truncate'>{product_title}</h1>
            <p className='pl-3 md:pl-0 text-black/50 text-sm md:text-base font-medium'>Price : ${price}</p>
            <Link to={`/productDetails/${product_id}`}><button id={product_id} className='ml-3 md:ml-0 mb-5 md:mb-0 btn rounded-full btn-outline h-max min-h-max py-2 text-xs md:text-sm md:py-3 border-pColor/60 font-bold border-2 md:mt-5 mt-2 px-5 hover:bg-pColor hover:border-pColor text-pColor'>View Details</button></Link>
        </div>
    );
};
Gadget.propTypes = {
    gadget: PropTypes.object.isRequired,
}
export default Gadget;