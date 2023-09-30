import product from "../../../asset/images/product-item.png";
function Product() {
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
        </div>
        <h3 className="uppercase text-4xl py-4">Bộ lọc</h3>
        <div className="flex">
          <select
            id="small"
            class="block w-30 p-2 mr-3 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Mức giá</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            class="block w-30 p-2 mb-6 text-sm mr-2 text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Loại</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            class="block w-30 p-2 mb-6 text-sm mr-2 text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Kích thước</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            class="block w-30 p-2 mb-6 text-sm mr-2 text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Màu sắc</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="small"
            class="block w-50 p-2 mb-6 text-sm text-gray-900 border border-black  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Giá từ thấp đến cao</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div className="product-item py-5">
            <div className="product_item-img">
              <img src={product} alt="" height={450} />
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
        <nav aria-label="Page navigation example" className=" text-end py-3">
          <ul class="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                &#60;
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center mx-1 px-3 h-8 text-white border border-gray-300 bg-gray-700 hover:bg-black hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center mx-1 px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                &#62;
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Product;
