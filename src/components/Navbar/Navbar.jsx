import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useContext } from 'react';
import { AssetContext } from '../../App';


const Navbar = () => {
  const {pathname} = useLocation()
  const [cart,wishlist,cartWishToggleBtn] = useContext(AssetContext)
 
    return (
 
          <div id='nav' className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar pt-11 md:container mx-auto relative z-50 ':'navbar md:container mx-auto relative z-50 '}>
        <div className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar-start text-white': 'navbar-start'}>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to='/'><li>Home </li></NavLink>
           <NavLink to='/Statistics'> <li>Statistics</li></NavLink>
           <NavLink to='/Dashboard'><li>Dashboard</li></NavLink>
            </ul>
          </div>
          <a className="font-bold text-xl flex items-center">
            <img src={logo} className='w-8' alt="" />
            <span>Gadget Heaven</span></a>
        </div>
        <div className={pathname === '/' || pathname === '/Smartphones/' || pathname === '/Laptops/' || pathname === '/Smartwatches/' || pathname === '/Accessories/' || pathname === '/Monitors/' ? 'navbar-center  hidden lg:flex text-white' :'navbar-center hidden lg:flex'}>
          <ul className="menu menu-horizontal px-1">
            <NavLink className='px-3 font-normal' to='/'><li>Home </li></NavLink>
           <NavLink className='px-3 font-normal' to='/Statistics'> <li>Statistics</li></NavLink>
           <NavLink className='px-3 font-normal' to='/Dashboard'><li>Dashboard</li></NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
        <Link to='/Dashboard'>
        <button onClick={()=>cartWishToggleBtn('cart')} className="text-xl bg-white hover:border-white hover:bg-pColor/50 hover:text-white btn rounded-full h-9 w-9 min-h-max p-0 border border-pColor/20 relative"><CiShoppingCart></CiShoppingCart>{cart.length > 0 && <span className='absolute -top-1 -right-1 text-[9px] bg-[#ff0000] w-[18px] h-[18px] flex items-center justify-center rounded-full text-white'>{cart.length > 99 ? <>99 <sup>+</sup> </>: cart.length}</span>}</button>
        </Link>

        <Link to='/Dashboard'>
        <button onClick={()=>cartWishToggleBtn('wishlist')} className="text-xl bg-white hover:border-white hover:bg-pColor/50 hover:text-white btn rounded-full h-9 w-9 min-h-max p-0 border border-pColor/20 relative"><CiHeart></CiHeart>{wishlist.length > 0 && <span className='absolute -top-1 -right-1 text-[9px] bg-[#ff0000] w-[18px] h-[18px] flex items-center justify-center rounded-full text-white'>{wishlist.length > 99 ? <>99 <sup>+</sup> </>: wishlist.length}</span>}</button>
        </Link>
        </div>
      </div>
       
    );
};

export default Navbar;