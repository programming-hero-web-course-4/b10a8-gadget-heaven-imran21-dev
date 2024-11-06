import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useLoaderData, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Rating, ThinStar } from '@smastrom/react-rating';
import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ProductDetails = () => {
    useEffect(()=>{
        document.title = 'Gadget details | Gadget Heaven'
    },[])
    const [addCartBtn,addWishlistBtn, , , , , , , ,wishlist] = useOutletContext();
  
    const data = useLoaderData();
    const {pId} = useParams();
    
    const clickedGadget = data.find(gadget => gadget.product_id === pId)
    const {availability,description,price,product_image,product_title,rating,specification,product_id} = clickedGadget;
    const [r, setR] = useState(parseInt(rating));
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#FFEDC1'
      }
      const navigate = useNavigate();
      const backBtn = ()=> {
        navigate(-1)  
      }
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const heartBtn = wishlist.find(item => item.product_id === product_id)
      



    return (
        <div className="pb-32">
             <div className="text-center bg-pColor pt-7 pb-52 relative">
                <div className=" md:container mx-auto flex justify-center items-center relative">
                <button onClick={backBtn} className="left-0 btn bg-pColor/0 border-none px-0 py-0 h-max rounded-full hover:bg-pColor/10 min-h-0 text-white absolute text-3xl hidden md:block"><IoArrowBackCircleOutline></IoArrowBackCircleOutline></button>

                 <h1 className="text-xl md:text-3xl text-white font-bold">Product Details</h1>
                </div>
                 <p className="text-xs w-3/4 md:w-2/5 mx-auto md:text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
             </div>

             <div className="md:container -mt-48 md:-mt-40 relative mx-3 md:mx-auto flex md:flex-row flex-col bg-white md:p-8 p-3  rounded-2xl">
                <figure className="w-full md:w-1/3 ">
                    <img className="w-full rounded-xl object-cover" src={product_image} alt="" />
                </figure>
                <div className="md:w-2/3 md:pl-8">
                    <h1 className="text-lg md:text-2xl pt-3 md:pt-0 font-semibold">{product_title}</h1>
                    <p className="md:py-2 text-sm md:text-base md:font-semibold font-medium">Price: ${price}</p>
                    {
                    availability === true ?  <span className="text-[10px] md:text-xs text-[#309C00] border border-[#309C00] bg-[#309C00]/10 font-medium rounded-full px-3 py-[2px] md:py-[3px]">In Stock</span> :<span className="text-[10px] md:text-xs text-[#ff0000] border border-[#ff0000] bg-[#ff0000]/10 font-medium rounded-full px-3 py-[2px] md:py-[3px]">Out of Stock</span>
                    }
                   
                    <h2 className="text-black/60 md:py-3 md:text-base text-sm py-2">{description}</h2>
                    <h2 className="md:font-bold md:text-base text-sm font-semibold md:pb-2 pb-1">Specifications:</h2>
                    <ul className="list-decimal md:text-base text-sm list-inside text-black/60">
                        {
                        specification.map((info, idx) => <li className="pb-1" key={idx}>{info}</li>)
                        }
                    </ul>
                    <h2 className="md:font-bold md:text-base text-sm font-semibold pb-1 pt-3">Rating:</h2>
                    <div className="flex items-center gap-2 md:gap-5">
                         <Rating className="max-w-24 md:max-w-40" itemStyles={myStyles}  value={r} onChange={setR}></Rating>
                         <span className="bg-sColor/10 md:text-base text-xs rounded-full px-3 py-1">{rating}</span>
                    </div>
                    <div className="md:pt-8 pt-4 flex items-center gap-2 md:gap-5">
                        <button onClick={()=>addCartBtn(clickedGadget)} className="flex gap-1 md:gap-2 items-center bg-pColor rounded-full px-5 text-white font-semibold btn text-xs py-2 md:py-3 h-max min-h-max md:text-[14px]">Add To Cart <CiShoppingCart className="text-xl md:text-2xl"></CiShoppingCart></button>

                        <button disabled={heartBtn && true} id={product_id} onClick={()=> addWishlistBtn(clickedGadget)} className="text-xl bg-white hover:border-pColor/20 hover:bg-pColor hover:text-white btn rounded-full h-max py-2 px-2 md:py-3 md:px-3 min-h-max p-0 border border-pColor/20 "><CiHeart className=""></CiHeart></button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default ProductDetails;