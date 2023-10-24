import { useEffect, useLayoutEffect, useState } from "react";
import { listProduct } from "../../../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Pagination from "../component/pagination";
import { Layout } from "..";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../../../thunks/ProductThunk";
function Product() {
  const [t] = useTranslation("app");
  const { categories } = useSelector((state) => state.categoryReducer);
  const { products, totalPage, page } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(filterProduct({ page: 0 }));
  }, []);
  useLayoutEffect(() => {}, [totalPage, page]);
  return (
    <Layout>
      <div className="mt-0 sm:mt-20">
        <div className="sm:w-5/6 w-full mx-auto sm:mt-10">
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
          </div>
          <h3 className="uppercase text-4xl my-6">{t("Product Filter")}</h3>
          <div className="grid lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-5 grid-cols-3  gap-2">
            <select
              id="small"
              className="block w-30 py-2 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
            >
              <option selected>{t("categories")}</option>
              {categories
                .filter((val) => val.isPrimary == null || !val.isPrimary)
                .map((category) => {
                  return <option value={category.id}>{category.name}</option>;
                })}
            </select>
            <select
              id="small"
              className="block w-30 py-2 mb-6 text-sm mr-2 text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
            >
              <option selected>{t("Price")}</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <select
              id="small"
              className="block w-50 py-2 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
            >
              <option selected>{t("price_from_low_to_high")}</option>
              <option selected>{t("price from high to low")}</option>
            </select>
          </div>
          <div className="grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((item, index) => (
              <div className="product-item py-2">
                <Link to="/product-detail">
                  <div className="product_item-img rounded overflow-hidden">
                    <img
                      src={item.imageBanner}
                      alt="product"
                      style={{ height: "350px" }}
                      className="w-full object-cover"
                    />
                  </div>
                </Link>

                <div className="product_item-name max-h-16 overflow-hidden">
                  <Link
                    to="/product-detail"
                    className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium text-gray-700"
                  >
                    {item.name}
                  </Link>
                </div>
                <div className="product_item-pride">
                  <p className="text-base">$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <nav aria-label="Page navigation example" className=" text-end py-3">
            {/* <Pagination
              totalPage={totalPage}
              setPage={onChangePage}
            ></Pagination> */}
          </nav>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
