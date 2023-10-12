import { useState } from "react";
import product from "../../../asset/images/product-item.png";
import { listProduct } from "../../../data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Product() {
  const [products, setProducts] = useState(listProduct);
  console.log(products);
  return (
    <div className="pt-20 mt-5 sm:mt-0 px-8">
      <div className="sm:w-5/6 w-full mx-auto">
        <div className="history">
          <Link to="\" className="uppercase text-xs px-1">
            HOME
          </Link>
          <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '10px'}} />
          <Link to="\" className="uppercase text-xs px-1">
            product
          </Link>
        </div>
        <h3 className="uppercase text-4xl py-4">Bộ lọc</h3>
        <div className="grid lg:grid-cols-6 xl:grid-cols-6 md:grid-cols-5 grid-cols-3  gap-2">
          <select
            id="small"
            className="block w-30 p-2 mr-3 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Mức giá</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            className="block w-30 p-2 mb-6 text-sm mr-2 text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Loại</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            className="block w-50 p-2 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Giá từ thấp đến cao</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-3">
          {products.map((item, index) => (
            <div className="product-item py-5">
              <Link to="/product-detail">
                <div className="product_item-img rounded overflow-hidden">
                  <img src={item.image} alt="" style={{height: '350px'}} className="w-full object-cover" />
                </div>
              </Link>

              <div className="product_item-name max-h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 "
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
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
                &#60;
              </Link>
            </li>
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
                1
              </Link>
            </li>
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
                2
              </Link>
            </li>
            <li>
              <Link to="\"
                aria-current="page"
                className="flex items-center justify-center mx-1 px-3 h-8 text-white border border-gray-300 bg-gray-700 hover:bg-black hover:text-white"
              >
              3
              </Link>
            </li>
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
                4
              </Link>
            </li>
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
                5
              </Link>
            </li>
            <li>
              <Link to="\"
                className="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white"
              >
               <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '10px'}} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Product;
