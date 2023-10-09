import { useState } from "react";
import visa from "../../../asset/images/visa.png";
import master from "../../../asset/images/master.png";
import pay from "../../../asset/images/pay.png";
import applePay from "../../../asset/images/applepay.png";
function PaymentMethod() {
  return (
    <div className="pt-20 mt-5 sm:mt-0 px-8">
      <div className="sm:w-4/6 w-full mx-auto">
        <div className="history">
          <a href="" className="uppercase text-xs">
            HOME
          </a>
          &#62;
          <a href="" className="uppercase text-xs">
            product
          </a>
          &#62;
          <a href="" className="uppercase text-xs">
            LOREMIPSUM PRODUCTS
          </a>
          &#62;
          <a href="" className="uppercase text-xs">
            PAYMENT
          </a>
          &#62;
          <a href="" className="uppercase text-xs">
            PAYMENT METHOD
          </a>
        </div>
        {/* <div className="w-2/6 mx-auto py-4">
          <div className="payment-bill border border-black p-3">
            <div className="payment-bill-detail">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="radio" />
                  <label className="px-2">Credit card</label>
                </div>
                <div className="flex justify-end">
                  <img src={visa} alt="" className="px-1" />
                  <img src={master} alt="" className="px-1" />
                  <img src={pay} alt="" className="px-1" />
                  <img src={applePay} alt="" className="px-1" />
                </div>
              </div>

              <form>
                <div className="mx-auto max-w-lg">
                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Card Number</span>
                    <input
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Expiration date (MM/YY)
                      </span>
                      <input
                        placeholder=""
                        type="month"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Security Code
                      </span>
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                  </div>

                  <div className="py-1">
                    <span className="px-1 text-sm text-gray-600">Name on card</span>
                    <input
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                  <div className="py-1">
                    <input type="radio" />
                    <label className="px-2 text-sm text-gray-600">
                      Payment on delivery
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <button className="bg-white border border-black text-black uppercase py-3 w-3/6 mt-4 text-xs">
                      Cancel
                    </button>
                    <button className="bg-black border border-black text-white uppercase py-3 w-3/6 mt-4 text-xs">
                      Pay Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <form className="mt-4 my-4">
          <div className="grid grid-cols-2 gap-2 sm:w-5/6 w-full mx-auto">
            <div className="mx-auto sm:col-span-1 col-span-2 w-full px-3 border border-black my-2">
              <h2 className="text-xl">Thông tin nhận hàng</h2>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Họ và tên</span>
                <input
                  placeholder=""
                  type="text"
                  className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">
                  Số điện thoại
                </span>
                <input
                  placeholder=""
                  type="text"
                  className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Địa chỉ</span>
                <input
                  placeholder=""
                  type="text"
                  className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">
                  Tỉnh/ Thành phố
                </span>
                <select className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1">
                  <option value="1">Hà Nội</option>
                  <option value="1">Hưng Yên</option>
                </select>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">
                  Huyện, thị xã
                </span>
                <select className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1">
                  <option value="1">Thanh Xuân</option>
                </select>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Xã, phường</span>
                <select className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1">
                  <option value="1">Hạ Đình</option>
                </select>
              </div>
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Ghi chú</span>
                <input
                  placeholder=""
                  type="text"
                  className="w-full px-2 py-2 text-base border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
            </div>
            <div className="mx-auto sm:col-span-1 col-span-2 w-full px-3 my-2 border border-black">
              <div className="payment-bill p-3">
                <div className="payment-bill-detail">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="title">
                      <p className="text-base font-medium">Subtotal</p>
                    </div>
                    <div className="">
                      <p className="text-base">$123.00</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="title">
                      <p className="text-base font-medium">Shipping</p>
                    </div>
                    <div className="">
                      <p className="text-base">Calculated at next step</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="title">
                      <p className="text-base font-medium">Total</p>
                      <p className="text-xs">Including $22.27 in taxes</p>
                    </div>
                    <div className="">
                      <p className="text-base">$123.00</p>
                    </div>
                  </div>
                </div>
                <div className="payment-information py-2">
                  <h2 className="text-2xl py-2">Thương thức thanh toán</h2>
                  <div className="mx-auto max-w-lg">
                    <div className="py-1">
                      <input type="radio" />
                      <label className="px-2">Momo</label>
                    </div>
                    <div className="py-1">
                      <input type="radio" />
                      <label className="px-2">Thanh toán khi nhận hàng</label>
                    </div>
                  </div>
                  <button className="bg-black text-white uppercase py-3 px-7 mt-4 text-xs">
                    Giao hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethod;
