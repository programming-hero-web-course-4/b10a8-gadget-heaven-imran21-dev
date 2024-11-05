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
                <button onClick={backBtn} className="left-0 btn bg-pColor/0 border-none px-0 py-0 h-max rounded-full hover:bg-pColor/10 min-h-0 text-white absolute text-3xl"><IoArrowBackCircleOutline></IoArrowBackCircleOutline></button>

                 <h1 className="text-3xl text-white font-bold">Product Details</h1>
                </div>
                 <p className="text-sm pt-4 text-white/90">Explore the latest gadgets that will take your experience to the next level. <br /> From smart devices to the coolest accessories, we have it all!</p>
             </div>

             <div className="md:container -mt-40 relative mx-auto flex bg-white p-8 rounded-2xl">
                <figure className="w-1/3 ">
                    <img className="w-full rounded-xl object-cover" src={product_image} alt="" />
                </figure>
                <div className="w-2/3 pl-8">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p className="py-2 font-semibold">Price: ${price}</p>
                    {
                    availability === true ?  <span className="text-xs text-[#309C00] border border-[#309C00] bg-[#309C00]/10 font-medium rounded-full px-3 py-[3px]">In Stock</span> :<span className="text-xs text-[#ff0000] border border-[#ff0000] bg-[#ff0000]/10 font-medium rounded-full px-3 py-[3px]">Out of Stock</span>
                    }
                   
                    <h2 className="text-black/60 py-3">{description}</h2>
                    <h2 className="font-bold pb-2">Specifications:</h2>
                    <ul className="list-decimal list-inside text-black/60">
                        {
                        specification.map((info, idx) => <li className="pb-1" key={idx}>{info}</li>)
                        }
                    </ul>
                    <h2 className="font-bold pb-1 pt-3">Rating:</h2>
                    <div className="flex items-center gap-5">
                         <Rating itemStyles={myStyles} style={{ maxWidth: 150 }} value={r} onChange={setR}></Rating>
                         <span className="bg-sColor/10 rounded-full px-3 py-1">{rating}</span>
                    </div>
                    <div className="pt-8 flex items-center gap-5">
                        <button onClick={()=>addCartBtn(clickedGadget)} className="flex items-center bg-pColor rounded-full px-5 text-white font-semibold btn">Add To Cart <CiShoppingCart className="text-2xl"></CiShoppingCart></button>

                        <button disabled={heartBtn && true} id={product_id} onClick={()=> addWishlistBtn(clickedGadget)} className="text-xl bg-white hover:border-pColor/20 hover:bg-pColor hover:text-white btn rounded-full h-12 w-12 min-h-max p-0 border border-pColor/20 "><CiHeart className=""></CiHeart></button>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default ProductDetails;