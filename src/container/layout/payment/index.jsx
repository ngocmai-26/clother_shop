import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import empty_cart from "../../../asset/images/empty-cart.png";
import { Layout } from "..";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateProduct } from "../../../slices/CartSlice";
import { useLayoutEffect, useState } from "react";
function Payment() {
  const { products } = useSelector((state) => state.cartReducer);
  const [amount, setAmount] = useState(0);
  const [t] = useTranslation("app");
  const dispatch = useDispatch();
  const handleDecrease = (id, quan) => {
    dispatch(updateProduct({ id, quantity: quan - 1 }));
  };
  const handleIncrease = (id, quan) => {
    dispatch(updateProduct({ id, quantity: quan + 1 }));
  };
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  useLayoutEffect(() => {
    let am = 0;
    products.map((pro, index) => {
      am += pro.quantity * pro.price;
    });
    setAmount(am);
  }, [products]);
  const handlePay = () => {
    console.log("hello");
  };
  return (
    <Layout>
      <div className="pt-20 mt-8 px-4" style={{ minHeight: "100vh" }}>
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
          {products.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 py-4">
              <div className="col-span-3  lg:col-span-3 xl:col-span-2 border px-2  border-black py-3">
                {products.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-8 sm:gap-3 p-2"
                    >
                      <div className="col-span-5 pe-1">
                        <div className="p-2 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark font-semibold ">
                          {t("product")}
                        </div>
                        <div className="grid flex-row grid-cols-1 sm:grid-cols-3 sm:gap-5 py-3">
                          <div>
                            <img
                              src={product.imageBanner}
                              alt="product"
                              className="w-full rounded object-cover"
                            />
                          </div>
                          <div className="sm:col-span-2 col-span-3">
                            <p className="text-sm  sm:text-xl mt-0">
                              {product.name}
                            </p>
                            <div className="product-size py-1">
                              <span className="text-xs sm:text-sm lg:text-base">
                                {t("size")}:
                              </span>
                              <span className="text-xs sm:text-sm lg:text-base">
                                {product.selectedSize.sizeName}
                              </span>
                            </div>
                            <div className="product-size py-1">
                              <span className="text-xs sm:text-sm lg:text-base">
                                Color:
                              </span>
                              <span className="text-xs sm:text-sm lg:text-base">
                                {product.selectedColor.colorName}
                              </span>
                            </div>
                            <div className="product-size py-1">
                              <span className="text-xs sm:text-sm lg:text-base">
                                {t("price")}:
                              </span>
                              <span className="text-xs sm:text-sm lg:text-base">
                                $ {product.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 ">
                        <div className="p-2 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark font-semibold ">
                          {t("quality")}
                        </div>
                        <div className="flex flex-row items-center my-auto h-full">
                          <button
                            className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-xs sm:text-sm  "
                            onClick={() => {
                              if (product.quantity - 1 >= 1) {
                                handleDecrease(product.id, product.quantity);
                              }
                            }}
                          >
                            -
                          </button>
                          <input
                            value={product.quantity}
                            className="sm:w-8 w-7 text-center border border-gray-300 py-1 text-xs sm:text-sm "
                            type="number"
                          />
                          <button
                            className="sm:px-2 px-1 py-1 border border-gray-300 text-black text-xs sm:text-sm "
                            onClick={() => {
                              handleIncrease(product.id, product.quantity);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="p-2 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark font-semibold ">
                          {t("sum_money")}
                        </div>
                        <div className="flex flex-row h-full">
                          <p className=" my-auto text-xs sm:text-sm">
                            $ {product.quantity * product.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <div className="p-2 px-1 bg-grey-lightest uppercase sm:text-sm text-xs text-grey-dark font-semibold text-end">
                          {t("delete")}
                        </div>
                        <div className="h-full flex align-center justify-end ">
                          <button
                            onClick={() => {
                              handleRemoveProduct(product.id);
                            }}
                            className="sm:p-2 p-1 my-auto"
                          >
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              className="text-xs sm:text-base"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-3 md:col-span-1 xl:col-span-1  w-full">
                <div className="payment-bill border border-black p-3">
                  <div className="payment-bill-detail">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="title">
                        <p className="text-base font-medium">
                          {t("sum_money")}
                        </p>
                      </div>
                      <div className="text-end">
                        <p className="text-base">${amount}</p>
                      </div>
                    </div>
                    <div className="w-full text-center ">
                      <button
                        onClick={handlePay}
                        className="bg-black text-white uppercase py-3 w-5/6 sm:w-3/6 px-5 mt-4 text-xs mx-auto"
                      >
                        {t("pay")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {products.length === 0 && (
            <div className="text-center py-20 ">
              <img src={empty_cart} alt="empty_cart" className="mx-auto" />
              {t("empty_cart")}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
