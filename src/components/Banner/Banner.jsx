import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner.jpg'
import Gadgets from '../Gadgets/Gadgets';
import { useEffect } from 'react';


const Banner = () => {
    useEffect(()=>{
        document.title = 'Home | Gadget Heaven'
    },[])
    return (
        <>
        
        <div className="bg-pColor mx-2 md:mx-5 text-center text-white rounded-3xl pt-[72px] md:pt-24 pb-44 md:pb-64 relative z-0 -mt-14 md:-mt-[70px]">
            <h1 className="text-lg md:text-5xl font-bold md:leading-[60px]">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-xs w-3/4 md:w-1/3 mx-auto md:text-sm font-normal pt-2 md:pt-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            <Link to='/Dashboard'>
            <button className="btn text-sm md:text-base rounded-full h-max min-h-max py-2 md:py-3 px-8 text-pColor mt-5 md:mt-8  font-bold">Shop Now</button>
            </Link>

           
        </div>
        <div className='-mt-36 md:-mt-56 relative z-50'>
                <figure className='mx-5 md:w-2/4 border-2 border-white p-3 md:p-5 rounded-[32px] md:mx-auto bg-white/20'>
                    <img className='w-full rounded-3xl h-[230px] md:h-[450px] object-cover' src={bannerImg} alt="" />
                </figure>
            </div>
      <Gadgets></Gadgets>
        </>
    );
};

export default Banner;