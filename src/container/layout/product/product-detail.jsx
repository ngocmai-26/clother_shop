import Slideshow from "../component/slideshow";
import product_1 from "../../../asset/images/product_1.png";
import product_2 from "../../../asset/images/product_2.png";
import product_3 from "../../../asset/images/product_3.png";
import product_4 from "../../../asset/images/product_4.png";
import { useState } from "react";
import SlideProduct from "../component/slide_product";
import { comments } from "../../../data";

function ProductDetail() {
  const images = [product_1, product_2, product_3];
  const [quantity, setQuantity] = useState(1);
  const [commentUser, setCommentUser] = useState(comments);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value, 10)); // Chuyển đổi giá trị thành số nguyên
  };

  const handComment = () => {
    // Sử dụng giá trị rating và comment tại đây
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div className="pt-20 px-8">
      <div className="sm:w-5/6 w-full mx-auto">
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
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-7 gap-2  py-10">
          <div className="xl:col-span-4">
            <Slideshow images={images} />
          </div>
          <div className="xl:col-span-3">
            <div className="product-title">
              <h1 className="xl:text-4xl text-3xl font-medium">
                Lorem Ipsum is simply dummy text of the printing
              </h1>
            </div>
            <div className="product-information py-2">
              <div className="product-information-title">
                <h4 className="text-xl uppercase py-1 font-medium">Information</h4>
                <ul>
                  <li>
                    Material: <span>Cotton</span>.
                  </li>
                  <li>Relaxed Fit.</li>
                  <li>
                    The print on the front and back of the shirt uses
                    silk-screen printing technology.
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-color py-2">
              <h4 className="text-xl uppercase py-1 font-medium">Colors</h4>
              <div className="grid grid-cols-3 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-6 gap-2">
                <button className="bg-slate-900 text-white py-1 px-3 mx-1 border uppercase">
                  Blue
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  Green
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  White
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  Brown
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  Black
                </button>
              </div>
            </div>
            <div className="product-size py-2">
              <h4 className="text-xl uppercase py-1 font-medium">Size</h4>
              <div className="grid grid-cols-6 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-9 gap-1">
                <button className="bg-slate-900 text-white py-1 px-3 mx-1 border uppercase">
                  S
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  M
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  L
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  XL
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  XXL
                </button>
                <button className="bg-white hover:bg-slate-900 hover:text-white text-black py-1 px-3 mx-1 border uppercase">
                  3XL
                </button>
              </div>
            </div>
            <div className="product-quantity py-2">
              <h4 className="text-xl uppercase py-1 font-medium">quantity</h4>
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

        <div className="review">
          <h1 className="text-4xl ">Reviews</h1>
          <div className="flex">
            <div className="avatar">
              <img src={product_1} className="rounded-full w-10 h-10" alt="" />
            </div>
            <div className="info px-3">
              <h6 className="font-medium">Duy Scott</h6>
              <p className="text-xs font-normal">UX/UI Design</p>
            </div>
          </div>
          <div className="thinks-product">
            <div className="thinks-product-title">
              <h5 className="text-xl font-medium my-3">
                What do you think about our products?
              </h5>
              <div className="comment">
                <form action="">
                  <div
                    className="flex flex-row-reverse"
                    style={{ justifyContent: "left" }}
                  >
                    <input
                      class="star star-1"
                      id="star-1"
                      type="radio"
                      name="star"
                      value={1}
                      checked={rating === 1}
                      onChange={handleRatingChange}
                    />
                    <label class="star star-1" for="star-1"></label>
                    <input
                      class="star star-2"
                      id="star-2"
                      type="radio"
                      name="star"
                      value={2}
                      checked={rating === 2}
                      onChange={handleRatingChange}
                    />
                    <label class="star star-2" for="star-2"></label>
                    <input
                      class="star star-3"
                      id="star-3"
                      type="radio"
                      name="star"
                      value={3}
                      checked={rating === 3}
                      onChange={handleRatingChange}
                    />
                    <label class="star star-3" for="star-3"></label>
                    <input
                      class="star star-4"
                      id="star-4"
                      type="radio"
                      name="star"
                      value={4}
                      checked={rating === 4}
                      onChange={handleRatingChange}
                    />
                    <label class="star star-4" for="star-4"></label>
                    <input
                      class="star star-5"
                      id="star-5"
                      type="radio"
                      name="star"
                      value={5}
                      checked={rating === 5}
                      onChange={handleRatingChange}
                    />
                    <label class="star star-5" for="star-5"></label>
                  </div>
                  <textarea
                    name=""
                    id=""
                    rows={5}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border border-black w-full p-3"
                  ></textarea>
                  <button type="button" style={{backgroundColor: 'black'}} onClick={handComment} className="bg-black border border-black text-white uppercase py-3 px-5 mt-4 text-xs">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-talk py-3">
          <h5 className="text-xl font-medium my-3">
            What customers talk about us?
          </h5>
          <SlideProduct comments={commentUser} />
        </div>
        <h2 className="text-4xl pt-3">OTHER PRODUCTS</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4">
          <div className="product-item py-5">
            <div className="product_item-img">
              <img
                src={product_1}
                alt=""
                style={{ height: "450px" }}
                className="w-full"
              />
            </div>
            <div className="product_item-name h-16 overflow-hidden">
              <p className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium">
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

export default ProductDetail;
