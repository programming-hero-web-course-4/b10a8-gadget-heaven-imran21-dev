import bannerImg from '../../assets/banner.jpg'
import Gadgets from '../Gadgets/Gadgets';


const Banner = () => {
    return (
        <>
        
        <div className="bg-pColor mx-5 text-center text-white rounded-3xl pt-24 pb-64 relative z-0 -mt-[70px]">
            <h1 className="text-5xl font-bold leading-[60px]">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-sm font-normal pt-5">Explore the latest gadgets that will take your experience to <br/> the next level. From smart devices to the coolest accessories, we have it all!</p>

            <button className="btn text-base rounded-full px-8 text-pColor mt-8  font-bold">Shop Now</button>

           
        </div>
        <div className='-mt-56 relative z-50'>
                <figure className='w-2/4 border-2 border-white p-5 rounded-[32px] mx-auto bg-white/20'>
                    <img className='w-full rounded-3xl h-[450px] object-cover' src={bannerImg} alt="" />
                </figure>
            </div>
      <Gadgets></Gadgets>
        </>
    );
};

export default Banner;