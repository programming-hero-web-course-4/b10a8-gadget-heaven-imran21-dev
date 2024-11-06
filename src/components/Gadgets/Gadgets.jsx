import {  NavLink, useLoaderData, useLocation, useNavigation, } from "react-router-dom";
import Gadget from "./Gadget/Gadget";
import NotFound from "../NotFound/NotFound";
import { Watch } from "react-loader-spinner";



const Gadgets = () => {

    const {pathname} = useLocation();
    const data = useLoaderData();
    const categoryByPathname = pathname.slice(1);
    const sliceLenght = categoryByPathname.length -1;
    const categoryByPathname2 = categoryByPathname.slice(0, sliceLenght)
    const selectedGadgets = data.filter(gadget => gadget.category === categoryByPathname2)
    const navigation = useNavigation()


    return (
        <div id="main" className="pt-10 md:pt-20  pb-20 md:pb-52 md:container mx-auto">
            <h1 className="text-base md:text-2xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <section className="flex flex-col md:flex-row pt-5 md:pt-10 gap-6">
                 <div id='gadgets' className="px-3 md:px-0 md:w-1/5 rounded-xl bg-white flex flex-wrap justify-center md:flex-col items-center md:py-8 py-4 gap-2 md:gap-6 max-h-max">
               <NavLink className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/'>
               All Products
               </NavLink>
               <NavLink  className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/Smartphones/'>
               Phones
               </NavLink>
               <NavLink className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/Laptops/'>
               Laptops
               </NavLink>
               <NavLink className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/Smartwatches/'>
               Smart Watches
               </NavLink>
               <NavLink className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/Accessories/'>
               Accessories
               </NavLink>
               <NavLink className="md:py-3 py-2 h-max min-h-max hover:border-pColor  border-2  btn md:text-base text-xs font-normal rounded-full hover:bg-pColor/10 md:w-4/5" to='/Monitors/'>
               Monitors
               </NavLink>
                 
                 </div>
                 <div className="md:w-4/5 px-3 md:px-0 gap-6 grid md:grid-cols-3 grid-cols-1 relative">
                
                 {
                 navigation.state === 'loading' ? <div className=" md:col-span-3 h-56 md:h-full flex items-center justify-center"><Watch color="#9538E2"></Watch></div> :
                  pathname === '/' ? 
                  data.length > 0 ? data.map((gadget, idx) => <Gadget gadget={gadget} key={idx}></Gadget>)
                  :<NotFound></NotFound> 

                  : selectedGadgets.length > 0 ? selectedGadgets.map((gadget, idx) => <Gadget gadget={gadget} key={idx}></Gadget>)
                  :<NotFound></NotFound>
                 }
                 </div>
            </section>

        </div>
    );
};

export default Gadgets;