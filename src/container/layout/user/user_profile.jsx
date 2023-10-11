import {  useState } from "react";
import iconCart from "../../../asset/images/baguser.png";
import iconUser from "../../../asset/images/user_light.png";
import iconLogout from "../../../asset/images/logout.png";
import iconEyeClose from "../../../asset/images/eye-closed.png";
import iconEye from "../../../asset/images/eye.png";
import { useTranslation } from "react-i18next";
function UserProfile({setAccountUser}) {
  const [t] = useTranslation("app");
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  

  const togglePasswordVisibility =() => {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handLogout = () => {
    setAccountUser({})
  }
  return (
    <div className="pt-20  mt-5 sm:mt-0  px-8">
      <div className="lg:w-5/6 w-full mx-auto">
        <div className="history">
          <a href="" className="uppercase text-xs px-1">
            HOME
          </a>
          &#62;
          <a href="" className="uppercase text-xs px-1">
            USER
          </a>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-4">
          <div className=" ...">
            <ul>
              <li>
                <a href="/user-profile" className="flex py-2">
                  <img src={iconUser} alt="" />
                  <span className="px-2">{t("user_profile")}</span>
                </a>
              </li>
              <li>
                <a href="/orders" className="flex py-2">
                  <img src={iconCart} alt="" />
                  <span className="px-2 text-neutral-400">{t("orders")}</span>
                </a>
              </li>
              <li>
                <button onClick={handLogout} className="flex py-2" type="reset" >
                  <img src={iconLogout} alt="" />
                  <span className="px-2 text-red-500">{t("logout")}</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3 xl:col-span-2 ">
            <div className="user-profile p-3">
              <h2 className="text-3xl py-2">{t("user_profile")}</h2>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="user-profile-detail">
                <form>
                  <h2 className="text-2xl py-2">{t("general_information")}</h2>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <div className="title">
                      <p className="text-base font-normal">{t("your_name")}</p>
                      <p className="text-sm text-neutral-400">Your full name</p>
                    </div>
                    <div className="col-span-2">
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <div className="title">
                      <p className="text-base font-normal">Email</p>
                    </div>
                    <div className="col-span-2">
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <div className="title">
                      <p className="text-base font-normal">{t("contact")}</p>
                    </div>
                    <div className="col-span-2">
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl py-3">{t("security")}</h2>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <div className="title">
                      <p className="text-base font-normal">{t("phone")}</p>
                    </div>
                    <div className="col-span-2">
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-2">
                    <div className="title">
                      <p className="text-base font-normal">{t("password")}</p>
                    </div>
                    <div className="col-span-2 relative">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder=""
                        className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                      <button
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                        type="button"
                      >
                        {isPasswordVisible ? (
                          <img src={iconEye} alt="" />
                        ) : (
                          <img src={iconEyeClose} alt="" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 py-2">
         
                    <div className="col-span-2 lg:col-end-4">
                      <div className="flex justify-between">
                      <button className="bg-black border border-black text-white uppercase py-3 md:w-5/12 w-6/12 mt-3 me-2 text-xs">
                      {t("change_phone")}
                        </button>
                        <button className="bg-black border border-black text-white uppercase py-3 md:w-5/12 w-5/12 mt-3 text-xs">
                        {t("change_password")}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
