import Logo from "./../../assets/OliveTree dental logo (2).png";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navbar = () => {
  const NavLinks =
    <>
      <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
      <li>
        <details>
          <summary className="nav-links">Our Shop</summary>
          <ul className="p-2 w-40">
            <li><NavLink to="/all" className="nav-link">All</NavLink></li>
            <li><NavLink to="/flower" className="nav-link">Flower Trees</NavLink></li>
            <li><NavLink to="/fruit" className="nav-link">Fruit Trees</NavLink></li>
            <li><NavLink to="/vegitable" className="nav-link">Vegitable Trees</NavLink></li>
          </ul>
        </details>
      </li>
      <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
      <li><NavLink to="/about" className="nav-link">About US</NavLink></li>
      <li><NavLink to="/contact" className="nav-link">Contact US</NavLink></li>
      <li><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
    </>

  return (
    <div className="fixed top-0 w-full h-[80px] z-20 bg-[#b3d9b7]">
      <div className="navbar">
        <div className="navbar-start">
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
              {NavLinks}
            </ul>
          </div>
          <div className="w-[400px]">
            <Link to="/" className="flex justify-start items-center gap-0 w-full">
              <img src={Logo} alt="" className="w-32 object-contain lg:w-16 py-3 h-16 " />
              <h2 className="text-2xl text-[#008037] font-medium">Trees Store</h2>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {NavLinks}
            </ul>
          </div>
          <div className="flex justify-end items-center gap-2">
            <div className="hidden md:block dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  {<FaRegHeart size={25} />}

                  <span className="badge badge-sm indicator-item bg-[#008037] text-white w-5 h-5 text-md">6</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-center w-full text-xl">8 Items</span>
                  <div className="card-actions">
                    <Link to="/viewWishlist" className="btn bg-[#008037] text-white btn-block">
                      View Wishlist
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  {<MdOutlineShoppingCart size={30} />}
                  <span className="badge badge-sm indicator-item bg-[#008037] text-white w-5 h-5 text-md">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-[#008037]">Subtotal: $999</span>
                  <div className="card-actions">
                    <Link to="/viewCart" className="btn bg-[#008037] text-white btn-block">
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="block md:hidden" href="/viewCart">View Cart</a>
                </li>
                <li>
                  <a className="block md:hidden" href="/viewWishlist">View Wishlist</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <div className="bg-[#008037] hover:bg-[#2d8453] hover:shadow-md px-6 py-2 flex justify-center items-center rounded-full text-lg font-bold text-white">
              <Link to="login" className="text-center">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
