import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useContext } from 'react';
import { AssetContext } from '../../App';


const Navbar = () => {
  const {pathname} = useLocation()
  const [cart,wishlist,cartWishToggleBtn] = useContext(AssetContext)
 
    return (
 
          <div id='nav' className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar px-5 md:px-0 pt-4 md:pt-11 md:container mx-auto relative z-50 ':'navbar px-5 md:px-0 md:container mx-auto relative z-50 '}>
        <div className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar-start w-max md:w-2/4 flex-1 md:flex-auto  text-white': 'navbar-start w-max md:w-2/4 flex-1 md:flex-auto '}>
          
          <Link to='/'>
          <h1 className="font-bold text-sm md:text-xl flex items-center">
            <img src={logo} className='w-4 md:w-8' alt="" />
            <span>Gadget Heaven</span></h1>
          </Link>
        </div>
        <div className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar-center  hidden lg:flex text-white' :'navbar-center hidden lg:flex'}>
          <ul className="menu menu-horizontal px-1">
            <NavLink style={({ isActive }) => {
             return isActive ? { color: "white", textDecoration: 'underline', fontWeight: 'bold' } : {};
             }}
  className='px-3 font-normal' to='/'><li>Home </li></NavLink>
           <NavLink className='px-3 font-normal' to='/Statistics'> <li>Statistics</li></NavLink>
           <NavLink className='px-3 font-normal' to='/Dashboard'><li>Dashboard</li></NavLink>
           <NavLink className='px-3 font-normal' to='/Orders'><li>Orders</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end  w-max  md:w-2/4 flex gap-1 md:gap-3">
        <Link to='/Dashboard'>
        <button onClick={()=>cartWishToggleBtn('cart')} className="text-xl bg-white hover:border-white hover:bg-pColor/50 hover:text-white btn rounded-full md:h-9 h-7 md:w-9 w-7 min-h-max p-0 border border-pColor/20 relative"><CiShoppingCart></CiShoppingCart>{cart.length > 0 && <span className='absolute -top-1 -right-1 text-[7px] md:text-[9px] bg-[#ff0000] w-3 md:w-[18px] h-3 md:h-[18px] flex items-center justify-center rounded-full text-white'>{cart.length > 99 ? <>99 <sup>+</sup> </>: cart.length}</span>}</button>
        </Link>

        <Link to='/Dashboard'>
        <button onClick={()=>cartWishToggleBtn('wishlist')} className="text-xl bg-white hover:border-white hover:bg-pColor/50 hover:text-white btn rounded-full md:h-9 h-7 md:w-9 w-7 min-h-max p-0 border border-pColor/20 relative"><CiHeart></CiHeart>{wishlist.length > 0 && <span className='absolute -top-1 -right-1 text-[7px] md:text-[9px] bg-[#ff0000] w-3 md:w-[18px] h-3 md:h-[18px] flex items-center justify-center rounded-full text-white'>{wishlist.length > 99 ? <>99 <sup>+</sup> </>: wishlist.length}</span>}</button>
        </Link>
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-white px-0 h-7 w-7 min-h-max rounded-full lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 rotate-180 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-xs space-y-1 menu-sm dropdown-content bg-white rounded-box z-50 mt-1 w-max p-2 shadow -left-12">
             <NavLink to='/'><li>Home </li></NavLink>
           <NavLink to='/Statistics'> <li>Statistics</li></NavLink>
           <NavLink to='/Dashboard'><li>Dashboard</li></NavLink>
           <NavLink to='/Orders'><li>Orders</li></NavLink>
            </ul>
          </div>
        </div>
      </div>
       
    );
};

export default Navbar;