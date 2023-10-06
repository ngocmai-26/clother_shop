import Logo from "../../../asset/images/Logo.png";
import iconCart from "../../../asset/images/bag.png";
import iconUser from "../../../asset/images/user_light.png";
import LogoDefault from "../../../asset/images/Logo_footer.png";
import { Link } from "react-router-dom";

function HeaderDefault() {
  return (
    <header className="relative  px-4  bg-transparent z-10">
      <div className="grid grid-flow-row-dense grid-cols-3 p-4 absolute top-0 left-0 right-0 w-11/12 mx-auto">
        <div className="menu xl">
          <ul className="flex">
            <li className="px-2">
              <a href="#" className="underline-0 text-xl text-white">
                Homepage
              </a>
            </li>
            <li className="px-2">
              <a href="#" className="underline-0 text-xl text-white">
                Products
              </a>
            </li>
            <li className="px-2">
              <a href="#" className="underline-0 text-xl text-white">
                About us
              </a>
            </li>
          </ul>
        </div>
        <div className="logo lg:w-100 mx-auto">
          <img src={LogoDefault} alt="" width={200} />
        </div>
        <div className="flex justify-end">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-text-white sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-white border border-white rounded-full bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-0"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <button
            type="button"
            className="inline-flex items-center px-4 text-sm font-medium text-white bg-white border-0  hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <div className="w-8 h-8  rounded-full bg-white p-2 hover:bg-gray-200">
              <Link to="/user-profile">
                <img src={iconUser} alt="" />
              </Link>
            </div>
          </button>
          <button
            className="inline-flex items-center px-2 text-sm font-medium text-white  border-0  hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <div className="w-8 h-8  rounded-full bg-black p-2 hover:bg-gray-800">
              <img src={iconCart} alt="" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderDefault;
