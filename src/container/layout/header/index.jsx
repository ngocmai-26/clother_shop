import { Link } from "react-router-dom";
import Logo from "../../../asset/images/Logo.png";
import iconCart from "../../../asset/images/bag.png";
import LogoDefault from "../../../asset/images/Logo_footer.png";
import iconUser from "../../../asset/images/user.png";
import { useEffect, useState } from "react";

function Header({ accountUser }) {
  // const [userAccount, setUserAccount] = useState(JSON.parse(localStorage.getItem("account")));
  const [userLogin, setUserLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // useEffect(()=> {
  //   localStorage.setItem('account', JSON.stringify({}))
  // })
  useEffect(() => {
    // const account = JSON.parse(localStorage.getItem("account"));
    // if (account) {
    //   setUserLogin(account);
    // }
    Object.keys(accountUser).length !== 0
      ? setUserLogin(false)
      : setUserLogin(true);
    // console.log( Object.keys(account).length)
  }, [accountUser]);

  // useEffect(() => {
  //   if (userLogin) {
  //     setUserLogin(false);
  //   }
  // }, [userAccount])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header class="fixed z-50 right-0 left-0 top-0 shadow-lg px-4 py-2 bg-white">
      <nav class="flex justify-between">
        <div class="grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 items-center gap-3 justify-between w-full">
          <div
            className={`navLinks duration-500 z-40 ${
              menuOpen
                ? "md:static md:w-auto w-full absolute"
                : "hidden md:block lg:block xl:block "
            }  md:h-auto bg-white flex md:items-center gap-[1.5vw] ${
              menuOpen ? "top-[100%] left-0" : "top-[-100%] left-[-100%]"
            } lg:px-5 md:py-0 py-5 px-5 sm:px-0`}
          >
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-3">
              <li class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/">HomePage</Link>
              </li>
              <li class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="/product">Products</Link>
              </li>
              <li class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <Link to="">About us</Link>
              </li>
            </ul>
          </div>
          <div class="w-[130px] md:w-[200px] flex items-center mx-auto">
            <img src={Logo} alt="LOGO" srcset="" />
          </div>

          <div class="flex gap-0 justify-end ">
            <form className="lg:w-8/12 mx-2">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full outline-0 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            {userLogin ? (
              <Link
                to="/login"
                type="button"
                style={{ backgroundColor: "black" }}
                class="font-medium text-white px-4 py-2 rounded-full active:bg-black hover:bg-gray-500  "
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to="/user-profile"
                  type="button"
                  className="inline-flex items-center px-2 text-sm font-medium text-gray-900 bg-white border-0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                  <div className="w-8 h-8  rounded-full bg-black p-2">
                    <img src={iconUser} alt="" />
                  </div>
                </Link>
                <Link
                  to="/orders"
                  className="inline-flex items-center px-2 text-sm font-medium text-gray-900  border-0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                  <div className="w-8 h-8  rounded-full bg-black p-2">
                    <img src={iconCart} alt="" />
                  </div>
                </Link>
              </>
            )}

            <button onClick={toggleMenu} className="px-2 block sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
