import {  NavLink, useLoaderData, useLocation, } from "react-router-dom";
import Gadget from "./Gadget/Gadget";
import NotFound from "../NotFound/NotFound";


const Gadgets = () => {
    const {pathname} = useLocation();
    const data = useLoaderData();
    const categoryByPathname = pathname.slice(1);
    const sliceLenght = categoryByPathname.length -1;
    const categoryByPathname2 = categoryByPathname.slice(0, sliceLenght)
    const selectedGadgets = data.filter(gadget => gadget.category === categoryByPathname2)
   
    return (
        <div className="pt-20  pb-52 md:container mx-auto">
            <h1 className="text-2xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <section className="flex pt-10 gap-6">
                 <div id='gadgets' className="w-1/5 rounded-xl bg-white flex flex-col items-center py-8 gap-6 max-h-max">
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/'>
               All Products
               </NavLink>
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/Smartphones/'>
               Phones
               </NavLink>
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/Laptops/'>
               Laptops
               </NavLink>
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/Smartwatches/'>
               Smart Watches
               </NavLink>
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/Accessories/'>
               Accessories
               </NavLink>
               <NavLink className="py-3 hover:border-pColor  border-2  btn text-base font-normal rounded-full hover:bg-pColor/10 w-4/5" to='/Monitors/'>
               Monitors
               </NavLink>
                 
                 </div>
                 <div className="w-4/5 gap-6 grid grid-cols-3 relative">
                
                 {
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