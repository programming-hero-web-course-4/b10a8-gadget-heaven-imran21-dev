import PropTypes from "prop-types";

const OrderItem = ({item,time}) => {
    const {brand,category,price,product_id,product_image,product_title,rating}= item

    return (
        <div className="bg-white mt-3 rounded-xl overflow-hidden grid grid-cols-7 justify-items-center content-center">
            <figure className="w-full  bg-pColor">

            <img className="w-full h-10 md:h-32 object-cover" src={product_image} alt="" />
            </figure>
             <div className="flex flex-col md:items-start items-center pt-2 md:pt-5">
                <h1 title={product_title} className="md:text-base text-[6px] truncate md:w-52 pl-5 md:pl-0 w-20 font-bold">{product_title}</h1>
                <p className="text-[6px] md:text-sm">Brand: {brand}</p>
                <p className="text-[6px] md:text-sm">Rating: {rating}</p>
             </div>
        
            <div className="flex items-center">
                <h1 className="md:text-base text-[6px] font-medium">{category}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="md:text-base text-[6px] font-medium">#{product_id}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="md:text-base text-[6px] font-medium">${price}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="md:text-base text-center text-[6px] font-medium">{time}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="font-medium text-[6px] md:text-sm border bg-[#F29339]/10 rounded-full text-[#F29339] px-1  md:px-5 md:py-2 py-1">Pending</h1>
             </div>
         
        </div>
    );
};
OrderItem.propTypes = {
   item : PropTypes.object,
   time : PropTypes.string
}
export default OrderItem;