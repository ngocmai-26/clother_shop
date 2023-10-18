import { useState } from "react";
import product from "../../../asset/images/product-item.png";
import iconDelete from "../../../asset/images/trash.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
    <div className="pt-20 mt-8">
      <div className="sm:w-5/6 w-full px-3 mx-auto">
        <div className="history">
          <Link to="/" className="uppercase text-xs px-1">
          {t("home")}
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "10px" }} />
          <Link to="/" className="uppercase text-xs px-1">
          {t("product")}
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "10px" }} />
          <Link to="/" className="uppercase text-xs px-1">
            LOREMIPSUM PRODUCTS
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "10px" }} />
          <Link to="/" className="uppercase text-xs px-1">
            {t("payment")}
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-3 lg:col-span-3 xl:col-span-2  border-black">
            <table className="text-left w-full border-collapse text-black border ">
              <thead>
                <tr >
                  <th
                    className="py-4 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark pl-3 w-[50%] sm:w-[55%] "
                  >
                    {t("product")}
                  </th>
                  <th className="py-4 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark ">
                    {t("quality")}
                  </th>
                  <th className="py-4 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark ">
                    {t("sum_money")}
                  </th>
                  <th className="py-4 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark pe-3">
                    {t("delete")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-4 px-2">
                    <div className="grid grid-cols-3 gap-5 ">
                      <div className="hidden sm:block">
                        <img src={product} alt="product" height="170px" />
                      </div>
                      <div className="sm:col-span-2 col-span-3 my-auto">
                        <p className="text-sm sm:text-xl mt-0">
                          Lorem Ipsum is simply dummy text of the printing
                        </p>
                        <div className="product-size py-1">
                          <span className="text-sm sm:text-base">{t("size")} : </span>
                          <span className="text-sm sm:text-base">XXS</span>
                        </div>
                        <div className="product-size py-1">
                          <span className="text-sm sm:text-base">{t("price")} : </span>
                          <span className="text-sm sm:text-base">$130.00</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center ">
                      <button
                        className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-sm sm:text-base hidden sm:block"
                        onClick={handleDecrease}
                      >
                        -
                      </button>
                      <input
                        className="sm:w-10 w-7 text-center border border-gray-300 py-1 text-sm sm:text-base"
                        type="number"
                        defaultValue={quantity}
                      
                      />
                      <button
                        className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-sm sm:text-base hidden sm:block"
                        onClick={handleIncrease}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 text-xs sm:text-sm">999.999 đ</td>
                  <td className="text-end md:text-start px-3">
                    <button className=" border sm:p-2 p-1 border-zinc-400 ">
                      <img src={iconDelete} alt="iconDelete" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-3 md:col-span-1 xl:col-span-1  w-full">
            <div className="payment-bill border border-black p-3">
              <div className="payment-bill-detail">
                <div className="grid grid-cols-2 gap-4">
                  <div className="title">
                    <p className="text-base font-medium">{t("sum_money")}</p>
                  </div>
                  <div className="text-end">
                    <p className="text-base">$123.00</p>
                  </div>
                </div>
                <div className="w-full text-center ">
                  <button className="bg-black text-white uppercase py-3 w-5/6 px-5 mt-4 text-xs mx-auto">
                    {t("pay")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl pt-3">{t("user_profile")}</h2>
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
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Payment;
