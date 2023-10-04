import { useState } from "react";
import product from "../../../asset/images/product-item.png";
function Payment() {
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
    <div className="pt-20 px-8">
      <div className="w-5/6 mx-auto">
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
        </div>
        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="col-span-2 ...">
            <div className="product-item border border-black">
              <div className="grid grid-cols-5 gap-5 p-3">
                <div className="...">
                  <img src={product} alt="" height="170px" />
                </div>
                <div className="col-span-3 my-auto">
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
                <div className="col-span-1 my-auto">
                  <div className="flex items-center ">
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      className="w-16 text-center border border-gray-300 py-1"
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
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="payment-bill border border-black p-3">
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
                <h2 className="text-2xl py-2" >Shipping Address</h2>
                <form>
                  <div className="mx-auto max-w-lg">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Your name *</span>
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">
                        Phone Number *
                      </span>
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Email *</span>
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Address *</span>
                      <input
                        placeholder=""
                        type="text"
                        className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                      />
                    </div>
                    <button className="bg-black text-white uppercase py-3 px-2 mt-4 text-xs">
                     Continue to Shipping
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl pt-3">OTHER PRODUCTS</h2>
        <div className="grid grid-cols-4 gap-4">
          
          <div className="product-item py-5">
            <div className="product_item-img">
              <img src={product} alt="" style={{height: '450px'}} />
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
