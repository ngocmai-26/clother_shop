import { useState } from "react";
import iconCart from "../../../asset/images/baguser.png";
import iconUser from "../../../asset/images/user_light.png";
import iconLogout from "../../../asset/images/logout.png";
import no_Order from "../../../asset/images/E-Commerce.png";
import product from "../../../asset/images/product-item.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Orders() {
  const [t] = useTranslation("app");
  const [orderProduct, setOrderProduct] = useState([]);
  return (
    <div className="pt-20 lg:px-8 px-4">
      <div className="lg:w-5/6 w-full mx-auto">
        <div className="history">
          <Link to="\" className="uppercase text-xs px-1">
            HOME
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '10px'}} />
          <Link to="\" className="uppercase text-xs px-1">
            USER
          </Link>
        </div>
        <div className="grid  md:grid-cols-4 grid-cols-1 gap-2 py-4">
          <div className=" ...">
            <ul>
              <li>
                <Link to="/user-profile" className="flex py-2">
                  <img src={iconUser} alt="" />
                  <span className="px-2">{t("user_profile")}</span>
                </Link>
              </li>
              <li>
                <Link to="/orders" className="flex py-2">
                  <img src={iconCart} alt="" />
                  <span className="px-2 text-neutral-400">{t("orders")}</span>
                </Link>
              </li>
              <li>
                <Link to="\" className="flex py-2">
                  <img src={iconLogout} alt="" />
                  <span className="px-2 text-red-500">{t("logout")}</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <div className="orders p-3 w-11/12">
              <h2 className="text-3xl py-2">{t("orders")}</h2>
              <p className="text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {orderProduct.length === 0 ? (
                <div className="order-detail text-center ">
                  <img src={no_Order} alt="" className="mx-auto" />
                  <p>Your orders is empty. Place a few items.</p>
                </div>
              ) : (
                <div className="order-detail py-5">
                  <div className="product-item border border-black">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-0 p-3">
                      <div className="">
                        <img src={product} alt="" height="170px" />
                      </div>
                      <div className="col-span-3 ">
                        <p className="text-xs">ORDER21345 - 09:41 13/13/2023</p>
                        <p className="product-name text-xl py-2">
                          Lorem Ipsum is simply dummy text of the printing
                        </p>
                        <div className="product-size py-1">
                          <span>Size : </span>
                          <span>XXS</span>
                        </div>
                        <div className="product-size py-1">
                          <span>Price : </span>
                          <span>$130.00</span>
                        </div>
                      </div>
                      <div className=" my-auto">
                        <div className="grid grid-cols-4 gap-3">
                          <div className="w-6 h-6 border border-black rounded-2xl flex align-center ">
                            <div className="w-4 h-4 bg-black rounded-xl m-auto my-auto"></div>
                          </div>
                          <div className="col-span-3 text-sm">Ordered</div>
                        </div>
                        <div className="line w-0.5 h-4 bg-black"></div>
                        <div className="grid grid-cols-4 gap-3 ">
                          <div className="w-6 h-6 border border-black rounded-2xl flex align-center ">
                            <div className="w-4 h-4 bg-black rounded-xl m-auto my-auto"></div>
                          </div>
                          <div className="col-span-3 text-sm">Confirmed</div>
                        </div>
                        <div className="line w-0.5 h-4 bg-black"></div>
                        <div className="grid grid-cols-4 gap-3 ">
                          <div className="w-6 h-6 border border-black rounded-2xl flex align-center ">
                            {/* <div className="w-4 h-4 bg-black rounded-xl m-auto my-auto"></div> */}
                          </div>
                          <div className="col-span-3 text-sm">
                            Out of delivery
                          </div>
                        </div>
                        <div className="line w-0.5 h-4 bg-black"></div>
                        <div className="grid grid-cols-4 gap-3 ">
                          <div className="w-6 h-6 border border-black rounded-2xl flex align-center ">
                            {/* <div className="w-4 h-4 bg-black rounded-xl m-auto my-auto"></div> */}
                          </div>
                          <div className="col-span-3 text-sm">Delivered</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
