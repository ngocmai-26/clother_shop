import { useState } from "react";
import product from "../../../asset/images/product-item.png";
import iconDelete from "../../../asset/images/trash.png";
import { useTranslation } from "react-i18next";
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
    <div className="pt-20 mt-5 sm:mt-0 px-8">
      <div className="w-5/6 mx-auto">
        <div className="history">
          <a href="" className="uppercase text-xs px-1">
            HOME
          </a>
          &#62;
          <a href="" className="uppercase text-xs px-1">
            product
          </a>
          &#62;
          <a href="" className="uppercase text-xs px-1">
            LOREMIPSUM PRODUCTS
          </a>
          &#62;
          <a href="" className="uppercase text-xs px-1">
            PAYMENT
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-2 border-black">
            <table class="text-left w-full border-collapse text-black border">
              <thead>
                <tr>
                  <th class="py-4 px-3 bg-grey-lightest uppercase text-sm text-grey-dark " style={{width: '60%'}}>
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
                    <div className="grid grid-cols-3 gap-5 ">
                      <div className="">
                        <img src={product} alt="" height="170px" />
                      </div>
                      <div className="col-span-2 my-auto">
                        <p className="text-xl mt-0">
                          Lorem Ipsum is simply dummy text of the printing
                        </p>
                        <div className="product-size py-1">
                          <span>{t("size")} : </span>
                          <span>XXS</span>
                        </div>
                        <div className="product-size py-1">
                          <span>{t("price")} : </span>
                          <span>$130.00</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-3">
                  <div className="flex items-center ">
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      className="w-10 text-center border border-gray-300 py-1"
                      type="number"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                  </td>
                  <td class="py-4 px-3">999.999 đ</td>
                  <td>
                    <button className=" border p-2 border-zinc-400">
                    <img src={iconDelete} alt="" />
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-3">
                    <div className="grid grid-cols-3 gap-5 ">
                      <div className="">
                        <img src={product} alt="" height="170px" />
                      </div>
                      <div className="col-span-2 my-auto">
                        <p className="text-xl mt-0">
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
                    </div>
                  </td>
                  <td class="py-4 px-3">
                  <div className="flex items-center ">
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      className="w-10 text-center border border-gray-300 py-1"
                      type="number"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                  </td>
                  <td class="py-4 px-3">999.999 đ</td>
                  <td>
                    <button className=" border p-2 border-zinc-400">
                    <img src={iconDelete} alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
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
                  <button className="bg-black text-white uppercase py-3 px-5 mt-4 text-xs mx-auto">
                  {t("pay")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl pt-3">{t("user_profile")}</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="product-item py-5">
            <div className="product_item-img">
              <img src={product} alt="" style={{ height: "350px" }} />
            </div>
            <div className="product_item-name h-16 overflow-hidden">
              <p className="text-xl text-overflow overflow-ellipsis line-clamp-2 ">
                adsadsv Lorem ipsum is simply dummy text...
              </p>
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
