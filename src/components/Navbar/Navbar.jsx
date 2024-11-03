import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = () => {
  const {pathname} = useLocation()

    return (
        <div className={pathname === '/' ? 'navbar pt-7 md:container mx-auto relative z-50 ':'navbar md:container mx-auto relative z-50 bg-white'}>
        <div className={pathname === '/' ? 'navbar-start text-white': 'navbar-start'}>
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
              <li><a>Home </a></li>
            <li><a>Statistics</a></li>
           <li><a>Dashboard</a></li>
            </ul>
          </div>
          <a className="font-bold text-xl flex items-center">
            <img src={logo} className='w-8' alt="" />
            <span>Gadget Heaven</span></a>
        </div>
        <div className={pathname === '/' ? 'navbar-center hidden lg:flex text-white' :'navbar-center hidden lg:flex'}>
          <ul className="menu menu-horizontal px-1">
            <li><a>Home </a></li>
            <li><a>Statistics</a></li>
           <li><a>Dashboard</a></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
         <button className='border bg-white border-pColor/20 rounded-full w-9 h-9 flex items-center justify-center text-xl'><CiShoppingCart></CiShoppingCart></button>
         <button className='border bg-white border-pColor/20 rounded-full w-9 h-9 flex items-center justify-center text-xl'><CiHeart></CiHeart></button>
        </div>
      </div>
    );
};

export default Navbar;