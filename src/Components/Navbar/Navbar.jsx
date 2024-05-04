import { IoSearch } from "react-icons/io5";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-16 shadow-md bg-white">
      <div className="flex justify-between items-center h-full px-4">
        <div className="">
          <Link to="/">
          <img src={Logo} alt="" className="w-40 lg:w-48 pb-3 h-40 " />
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-0 w-full h-8">
          <input
            className="h-full w-80 outline-none border rounded-l-full pl-3 focus-within:shadow"
            type="text"
            placeholder="Please search here..."
          />
          <div className="bg-green-500 text-white w-12 flex justify-center items-center text-xl font-bold h-full focus-within:shadow rounded-r-full">
            <IoSearch />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item bg-green-500 text-white w-5 h-5 text-md">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
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
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className="bg-green-500 hover:bg-green-600 hover:shadow-md px-6 py-2 flex justify-center items-center rounded-full text-lg font-bold text-white">
            <Link to="login" className="text-center">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
