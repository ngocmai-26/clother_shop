import Slideshow from "../component/slideshow";
import product_1 from "../../../asset/images/product_1.png";
import { useLayoutEffect, useState } from "react";
import SlideProduct from "../component/slide_product";
import { comments } from "../../../data";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Layout } from "..";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentByProduct,
  getProductById,
} from "../../../thunks/ProductThunk";
import { setAlert } from "../../../slices/AlertSlice";

function ProductDetail() {
  const { id } = useParams();
  const [t] = useTranslation("app");
  const [quantity, setQuantity] = useState(1);
  const [commentUser, setCommentUser] = useState(comments);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [productSize, setProductSize] = useState([]);
  const dispatch = useDispatch();
  const { singleProduct, singleProductComment } = useSelector(
    (state) => state.productReducer
  );
  const { user } = useSelector((state) => state.authReducer);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleRatingChange = (e) => {
    console.log("here");
    setRating(parseInt(e.target.value, 10)); // Chuyển đổi giá trị thành số nguyên
  };

  const handComment = () => {
    if (rating <= 0) {
      dispatch(
        setAlert({ type: "error", content: "Hãy đánh giá ít nhất 1 sao" })
      );
      return;
    }
    if (comment.trim() === "") {
      dispatch(setAlert({ type: "error", content: "Hãy đánh giá gì đó" }));
      return;
    }
    const data = { star: rating, content: comment, product: { id: id } };
    dispatch(addComment(data));
    setComment("");
    setRating(0);
  };

  useLayoutEffect(() => {
    if (id) {
      dispatch(getProductById(id));
      dispatch(getCommentByProduct(id));
    }
  }, []);
  useLayoutEffect(() => {}, [singleProduct]);
  useLayoutEffect(() => {
    setProductSize(selectedColor?.productSizes);
  }, [selectedColor]);

  const handleBuyNow = () => {};
  const handleAddToCart = () => {};

  return (
    <Layout>
      {singleProduct && (
        <div className="mt-20 px-4">
          <div className="sm:w-5/6 w-full mx-auto">
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
                {singleProduct.name}
              </Link>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-7 gap-2  py-10">
              <div className="xl:col-span-4">
                <Slideshow images={singleProduct.productImages} />
              </div>
              <div className="xl:col-span-3 md:px-2">
                <div className="product-title">
                  <h1 className="xl:text-3xl text-3xl font-normal pb-1 h-19 overflow-hidden line-clamp-2">
                    {singleProduct.name}
                  </h1>
                </div>
                <div className="product-color py-1">
                  <h4 className="text-base uppercase py-3 font-medium">
                    {t("color")}
                  </h4>
                  <div className="grid grid-cols-3 xl:grid-cols-6 lg:grid-cols-7 md:grid-cols-6 gap-2">
                    {singleProduct.productColors?.map((color, index) => {
                      return (
                        <button
                          onClick={() => {
                            setSelectedColor(color);
                          }}
                          className={`text-xs font-medium ${
                            selectedColor?.id == color.id
                              ? "bg-black text-white"
                              : " bg-white"
                          } hover:bg-slate-900 hover:text-white text-black py-2 px-3 mx-1 border uppercase`}
                        >
                          {color.colorName}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="product-size py-1">
                  <h4 className="text-base uppercase py-3 font-medium">
                    {t("size")}
                  </h4>
                  <div className="grid grid-cols-6 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-9 gap-1">
                    {productSize?.map((val) => {
                      return (
                        <button
                          onClick={() => {
                            setSelectedSize(val);
                          }}
                          className={`text-xs font-medium ${
                            selectedSize?.id == val.id
                              ? "bg-slate-900 text-white"
                              : "bg-white"
                          } py-1 px-3 mx-1 border uppercase`}
                        >
                          {val.sizeName}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="product-quantity py-1">
                  <h4 className="text-base uppercase py-3 font-medium">
                    {t("quality")}
                  </h4>
                  <div className="flex items-center ">
                    <button
                      className="px-3 py-1 border border-gray-300 text-black "
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      className="w-14 pl-3 text-center border border-gray-300 py-1"
                      type="number"
                      value={quantity}
                      min={1}
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
                <div className="product-btn flex justify-between pt-5 sm:pt-2">
                  <div className="w-3/6 pe-3">
                    <button className="bg-black text-white py-2 w-full border ">
                      {t("buy_now")}
                    </button>
                  </div>
                  <div className="w-3/6 pl-3">
                    <button className=" py-2 w-full border">
                      {t("add_cart")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="product-information py-1">
                <div className="product-information-title text-base">
                  <h4 className="text-base uppercase py-3 font-medium">
                    {t("information")}
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: singleProduct.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {Object.keys(user).length > 0 && (
              <div className="review">
                <h1 className="text-4xl my-5 py-3"> {t("review")}</h1>
                <div className="flex">
                  <div className="avatar">
                    <img
                      src={product_1}
                      className="rounded-full w-10 h-10"
                      alt="product"
                    />
                  </div>
                  <div className="info px-3">
                    <h6 className="font-medium">{user?.fullname}</h6>
                    <p className="text-xs font-normal">{user?.email}</p>
                  </div>
                </div>
                <div className="thinks-product">
                  <div className="thinks-product-title">
                    <h5 className="text-xl font-medium my-3 pt-2 ">
                      {t("about_think")}
                    </h5>
                    <div className="comment">
                      <form action="">
                        <div
                          className="flex flex-row-reverse"
                          style={{ justifyContent: "left" }}
                        >
                          <input
                            className="star star-1"
                            id="star-1"
                            type="radio"
                            name="star"
                            value={1}
                            checked={rating === 1}
                            onChange={handleRatingChange}
                          />
                          <label
                            className="star star-1"
                            htmlFor="star-1"
                          ></label>
                          <input
                            className="star star-2"
                            id="star-2"
                            type="radio"
                            name="star"
                            value={2}
                            checked={rating === 2}
                            onChange={handleRatingChange}
                          />
                          <label
                            className="star star-2"
                            htmlFor="star-2"
                          ></label>
                          <input
                            className="star star-3"
                            id="star-3"
                            type="radio"
                            name="star"
                            value={3}
                            checked={rating === 3}
                            onChange={handleRatingChange}
                          />
                          <label
                            className="star star-3"
                            htmlFor="star-3"
                          ></label>
                          <input
                            className="star star-4"
                            id="star-4"
                            type="radio"
                            name="star"
                            value={4}
                            checked={rating === 4}
                            onChange={handleRatingChange}
                          />
                          <label
                            className="star star-4"
                            htmlFor="star-4"
                          ></label>
                          <input
                            className="star star-5"
                            id="star-5"
                            type="radio"
                            name="star"
                            value={5}
                            checked={rating === 5}
                            onChange={handleRatingChange}
                          />
                          <label
                            className="star star-5"
                            htmlFor="star-5"
                          ></label>
                        </div>
                        <textarea
                          name=""
                          id=""
                          rows={5}
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="border border-black w-full p-3"
                        ></textarea>
                        <button
                          type="button"
                          style={{ backgroundColor: "black" }}
                          onClick={handComment}
                          className="bg-black border border-black text-white uppercase py-3 px-5 mt-4 text-xs"
                        >
                          {t("send")}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {singleProductComment.length > 0 && (
              <div className="customer-talk py-3">
                <h5 className="text-xl font-medium my-3 ">
                  {t("custom_about_think")}
                </h5>
                <SlideProduct comments={singleProductComment} />
              </div>
            )}

            <h2 className="text-4xl pt-3"> {t("other_product")}</h2>
            {/* <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4">
          <div className="product-item py-5">
            <div className="product_item-img rounded overflow-hidden">
              <Link to="/product-detail">
                <img
                  src={product_1}
                  alt="product"
                  style={{ height: "350px" }}
                  className="w-full object-cover"
                />
              </Link>
            </div>
            <div className="product_item-name h-16 overflow-hidden">
              <Link to="/product-detail">
                <p className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium">
                  adsadsv Lorem ipsum is simply dummy text...
                </p>
              </Link>
            </div>
            <div className="product_item-pride">
              <p className="text-base">$ 420.000</p>
            </div>
          </div>
        </div> */}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default ProductDetail;
