import { Link } from "react-router-dom";
import HeaderAdmin from "../component/header";
import { useTranslation } from "react-i18next";


function ProductManager() {
  const [t] = useTranslation("app");
  return (
    <div class="w-10/12 bg-slate-700 text-white h-screen  flex flex-col overflow-y-hidden ">
      <HeaderAdmin />
      <main class="w-full flex-grow p-6">
        <h1 class="text-3xl pb-6">{t("product_manager")}</h1>
        <div className="flex justify-between">
          <Link to='/admin/product-create'  className="border border-sky-600 text-white uppercase py-2 text-base px-10 bg-sky-600 rounded-full mt-3">
          {t("add")}
          </Link>
          <form className="lg:w-4/12 mx-2 pt-3 ">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full outline-0 p-2  pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
        <div class="w-full mt-12">
          <p class="text-xl pb-3 flex items-center">
            <i class="fas fa-list mr-3"></i> Table Example
          </p>
          <div class="bg-white overflow-auto ">
            <table class="text-left w-full border-collapse text-black">
              <thead>
                <tr>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    STT
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Tên sản phẩm
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Giá
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Hình Ảnh
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Thông tin
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                  <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    622322662
                  </td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    jonsmith@mail.com
                  </td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a className="border border-yellow-400 text-white uppercase py-2 px-3 bg-yellow-400 rounded-lg mt-3 mx-1 text-xs">{t("see_more")}</a>
                    <a  className="border border-rose-600 text-white uppercase py-2 px-3 bg-rose-600 rounded-lg mt-3 mx-1 text-xs">{t("delete")}</a>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">Lian</td>
                  <td class="py-4 px-6 border-b border-grey-light">Smith</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    622322662
                  </td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    jonsmith@mail.com
                  </td>
                  <td class="py-4 px-6 border-b border-grey-light">
                    <a className="border border-yellow-400 text-white uppercase py-2 px-3 bg-yellow-400 rounded-lg mt-3 mx-1 text-xs">{t("see_more")}</a>
                    <a  className="border border-rose-600 text-white uppercase py-2 px-3 bg-rose-600 rounded-lg mt-3 mx-1 text-xs">{t("delete")}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductManager;
