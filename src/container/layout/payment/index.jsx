import { useState } from "react";
import product from "../../../asset/images/product-item.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import empty_cart from "../../../asset/images/empty-cart.png";
import { Layout } from "..";
function Payment() {
  const [t] = useTranslation("app");
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Layout>
      <div className="pt-20 mt-8 px-4">
        <div className="lg:w-5/6 w-full px-3 mx-auto">
          <div className="history">
            <Link to="/" className="uppercase text-xs px-1">
              {t("home")}
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "10px" }}
            />
            <Link to="/" className="uppercase text-xs px-1">
              {t("product")}
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "10px" }}
            />
            <Link to="/" className="uppercase text-xs px-1">
              LOREMIPSUM PRODUCTS
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "10px" }}
            />
            <Link to="/" className="uppercase text-xs px-1">
              {t("payment")}
            </Link>
          </div>
          {/* <div>
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="col-span-3 border-black">
                <table class="text-left w-full border-collapse text-black border">
                  <thead>
                    <tr>
                      <th
                        class="py-4 px-3 bg-grey-lightest uppercase text-sm text-grey-dark "
                        style={{ width: "60%" }}
                      >
                        {t("product")}
                      </th>
                      <th class="py-4 px-3 bg-grey-lightest uppercase text-sm text-grey-dark ">
                        {t("quality")}
                      </th>
                      <th class="py-4 px-3 bg-grey-lightest uppercase text-sm text-grey-dark ">
                        {t("sum_money")}
                      </th>
                      <th class="py-4 px-3 bg-grey-lightest uppercase text-sm text-grey-dark ">
                        {t("delete")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-4 px-3">
                        <div className="flex flex-col sm:flex-row grid-cols-4 gap-5 ">
                          <div className="">
                            <img src={product} alt="" height="170px" />
                          </div>
                          <div className="col-span-3 my-auto">
                            <p className="text-sm  sm:text-xl mt-0">
                              Lorem Ipsum is simply dummy text of the printing
                            </p>
                            <div className="product-size py-1">
                              <span className="text-xs sm:text-sm lg:text-base">
                                {t("size")} :{" "}
                              </span>
                              <span className="text-xs sm:text-sm lg:text-base">
                                XXS
                              </span>
                            </div>
                            <div className="product-size py-1">
                              <span className="text-xs sm:text-sm lg:text-base">
                                {t("price")} :{" "}
                              </span>
                              <span className="text-xs sm:text-sm lg:text-base">
                                $130.00
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-3">
                        <div className="flex items-center ">
                          <button
                            className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-xs sm:text-sm  "
                            onClick={handleDecrease}
                          >
                            -
                          </button>
                          <input
                            className="md:w-8 w-7 text-center border border-gray-300 py-1 text-xs sm:text-sm "
                            type="number"
                            value={quantity}
                          />
                          <button
                            className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-xs sm:text-sm "
                            onClick={handleIncrease}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className=" my-auto text-xs md:text-sm">999.999 đ</td>
                      <td className=" text-end pe-4">
                        <button className=" border p-2 border-zinc-400">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            className="text-xs sm:text-base"
                          />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="payment-bill flex justify-end">
              <div className="payment-bill-detail border border-black p-3 w-full sm:w-4/12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="title">
                    <p className="text-base font-medium">Tổng tiền</p>
                  </div>
                  <div className="text-end">
                    <p className="text-base">$123.00</p>
                  </div>
                </div>
                <div className="w-full text-center ">
                  <button className="bg-black text-white uppercase py-3 px-5 mt-4 text-xs mx-auto">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="text-center py-20 ">
            <img src={empty_cart} alt="empty_cart" className="mx-auto" />
            {t("empty_cart")}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl pt-3">
            {t("user_profile")}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail">
                  <img
                    src={product}
                    alt="product"
                    style={{ height: "350px" }}
                    className="object-cover w-full "
                  />
                </Link>
              </div>
              <div className="product_item-name max-h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-sm sm:text-base lg:text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium "
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-xs sm:text-sm lg:text-base">$ 420.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
