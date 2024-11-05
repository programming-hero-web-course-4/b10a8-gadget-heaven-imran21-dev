

const OrderItem = ({item,time}) => {
    const {brand,category,price,product_id,product_image,product_title,rating}= item

    return (
        <div className="bg-white mt-3 rounded-xl overflow-hidden grid grid-cols-7 justify-items-center content-center">
            <figure className="w-full bg-pColor">

            <img className="w-full h-32 object-cover" src={product_image} alt="" />
            </figure>
             <div className="pt-5 pl-6">
                <h1 title={product_title} className="text-base truncate w-52 font-bold">{product_title}</h1>
                <p className="text-sm">Brand: {brand}</p>
                <p className="text-sm">Rating: {rating}</p>
             </div>
        
            <div className="flex items-center">
                <h1 className="font-medium">{category}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="font-medium">#{product_id}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="font-medium">${price}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="font-medium">{time}</h1>
             </div>
             <div className="flex items-center">
                <h1 className="font-medium text-sm border bg-[#F29339]/10 rounded-full text-[#F29339] px-5 py-2">Pending</h1>
             </div>
         
        </div>
    );
};

export default OrderItem;