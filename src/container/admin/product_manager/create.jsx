import HeaderAdmin from "../component/header";

function ProductCreate() {
  return (
    <div class="w-10/12 bg-slate-700 text-white h-screen  flex flex-col overflow-y-hidden ">
      <HeaderAdmin />
      <main class="w-full flex-grow p-6">
        <h1 class="w-full text-3xl pb-6">Thêm sản phẩm</h1>

        <div class="flex flex-wrap">
          <div class="w-full  my-6 pr-0 lg:pr-2">
            <div class="leading-loose">
              <form class="p-10 bg-white rounded shadow-xl">
                <div class="">
                  <label class="block text-sm text-gray-600" for="name">
                    Mã sản phẩm
                  </label>
                  <input
                    class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded outline-0"
                    id="txtCode"
                    name="txtCode"
                    type="text"
                    required=""
                    placeholder="Nhập vào mã sản phẩm"
                    aria-label="txtCode"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="price">
                    Tên sản phẩm
                  </label>
                  <input
                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded outline-0"
                    id="txtName"
                    name="txtName"
                    type="text"
                    required=""
                    placeholder="Nhập vào tên sản phẩm"
                    aria-label="txtName"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="price">
                    Giá
                  </label>
                  <input
                    class="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded outline-0"
                    id="txtPrice"
                    name="txtPrice"
                    type="text"
                    required=""
                    placeholder="Nhập vào giá sản phẩm"
                    aria-label="txtPrice"
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="price">
                    Màu sắc
                  </label>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex ">
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="vue-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="vue-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Blue
                        </label>
                      </div>
                    </li>
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="react-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="react-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Green
                        </label>
                      </div>
                    </li>
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="angular-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="angular-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          White
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Brown
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Black
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Pink
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Orange
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Red
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          Purple
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="price">
                    Kích thước
                  </label>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex ">
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="vue-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="vue-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          S
                        </label>
                      </div>
                    </li>
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="react-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="react-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          M
                        </label>
                      </div>
                    </li>
                    <li class="w-full ">
                      <div class="flex items-center pl-3">
                        <input
                          id="angular-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="angular-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          L
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          XL
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          XXL
                        </label>
                      </div>
                    </li>
                    <li class="w-full dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          id="laravel-checkbox-list"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                        />
                        <label
                          for="laravel-checkbox-list"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                        >
                          3XL
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="message">
                    Miêu tả
                  </label>
                  <textarea
                    class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded outline-0"
                    id="message"
                    name="message"
                    rows="6"
                    required=""
                    placeholder="Nhập miêu tả"
                    aria-label="Email"
                  ></textarea>
                </div>
                <div class="mt-6 text-right">
                  <button
                    class="px-4 py-1 text-white font-light tracking-wider  rounded"
                    style={{ backgroundColor: "black" }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductCreate;
