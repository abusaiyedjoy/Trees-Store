import { FaHome, FaFileAlt, FaList, FaNetworkWired, FaSearch, FaBell, FaCreditCard, FaUnlock } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiShoppingBag, FiZap, FiSend } from 'react-icons/fi';

function Sidebar() {
  return (
    <section className="min-h-screen bg-gray-50 z-10">
      <nav
        className="fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0"
      >
        <div className="flex items-center px-4 py-5">
          <img src="/brand/kutty-logo-white.png" alt="Kutty Logo" className="w-20" />
        </div>
        <nav className="text-sm font-medium text-gray-500" aria-label="Main Navigation">
          <div
            className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
          >
            <FaHome className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
            <span>Home</span>
          </div>
          <div
            className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
          >
            <FaFileAlt className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
            <span>Articles</span>
          </div>
          <div
            className="flex items-center px-4 py-3 text-gray-200 transition bg-gray-800 cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
          >
            <FaList className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300" />
            <span>Collections</span>
          </div>
          <div
            className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
          >
            <AiOutlineCheckCircle className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
            <span>Checklists</span>
          </div>
          <div>
            <div
              className="flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200"
              role="button"
            >
              <div className="flex items-center">
                <FaNetworkWired className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
                <span>Integrations</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200">
                <FiShoppingBag className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
                <span>Shopify</span>
              </div>
              <div className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200">
                <FiZap className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
                <span>Zapier</span>
              </div>
              <div className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200">
                <FiSend className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" />
                <span>SendGrid</span>
              </div>
            </div>
          </div>
        </nav>
        <div className="px-4 mt-8">
          <button
            className="flex items-center px-4 py-3 space-x-2 text-xs text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            <FaUnlock className="shrink-0 w-4 h-4 text-gray-500" />
            <span>Unlock full Kutty</span>
          </button>
        </div>
      </nav>
      <div className="flex flex-col justify-between min-h-screen bg-gray-50 md:ml-60">
        <header className="py-10 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="relative flex items-center space-x-4">
              <div className="flex-1">
                <div className="text-2xl font-semibold text-gray-900">Dashboard</div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaSearch className="w-4 h-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 pl-10 pr-4 text-sm border rounded-md border-gray-300 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 space-x-2 text-sm bg-white rounded-md">
                  <FaBell className="shrink-0 w-4 h-4 text-gray-500" />
                  <span>Notifications</span>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 space-x-2 text-sm bg-white rounded-md">
                  <FaCreditCard className="shrink-0 w-4 h-4 text-gray-500" />
                  <span>Billing</span>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center px-4 py-2 space-x-2 text-sm bg-white rounded-md">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="/path/to/avatar.jpg"
                    alt="User Avatar"
                  />
                  <span>John Doe</span>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Sidebar;
