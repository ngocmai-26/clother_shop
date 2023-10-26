import { useTranslation } from "react-i18next";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavbarMini from "../component/nav_mini";
import { Layout } from "..";
import { useState } from "react";

function AddressManager({ setAccountUser }) {
  const [t] = useTranslation("app");
  const [hidden, setHidden] = useState(true)
  const handModalAddress = () => {
    setHidden(!hidden)
  };
  return (
    <Layout>
      <div className="pt-20 mt-5 sm:mt-0 px-4 min-h-screen">
        <div className="lg:w-5/6 w-full mx-auto mt-12">
          <div className="history">
            <Link to="/" className="uppercase text-xs px-1">
              {t("home")}
            </Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "10px" }}
            />
            <Link to="/" className="uppercase text-xs px-1">
              {t("address")}
            </Link>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-4">
            <div>
              <NavbarMini />
            </div>
            <div className="col-span-3 ">
              <div className="user-profile">
                <div className="header-manager md:flex justify-between border-b pb-3 ">
                  <h2 className="md:text-2xl text-xl my-auto font-medium">
                    {t("your_address")}
                  </h2>
                  <button
                    className="bg-orange-600 text-white py-2 px-1 sm:px-3 text-sm sm:text-base " 
                    onClick={() => handModalAddress()}
                  >
                    {t("add_address")}
                  </button>
                </div>
                <div className="content-manager py-3">
                  <h2 className="text-base sm:text-lg font-medium">{t("address")}</h2>
                  <div className="justify-between border-b py-2">
                    <div className="information">
                      <h3 className="name text-sm sm:text-base font-medium">Cao sơn</h3>
                      <span className="text-slate-500 text-xs sm:text-sm font-normal">
                        +84 378558674
                      </span>
                      <div className="address w-full lg:w-2/3 md:w-10/12 text-slate-500 text-xs sm:text-sm font-normal">
                        Đại học Bình Dương, Đại lộ Bình Dương Phường Hiệp Thành,
                        Thành Phố Thủ Dầu Một, Bình Dương
                      </div>
                    </div>
                    <div className="action text-right">
                      <button className="text-blue-500 text-sm sm:text-base">{t("update")}</button>
                    </div>
                  </div>
                  <div className="justify-between border-b py-2">
                    <div className="information">
                      <h3 className="name text-sm sm:text-base font-medium">Cao sơn</h3>
                      <span className="text-slate-500 text-xs sm:text-sm font-normal">
                        +84 378558674
                      </span>
                      <div className="address w-full lg:w-2/3 md:w-10/12 text-slate-500 text-xs sm:text-sm font-normal">
                        Đại học Bình Dương, Đại lộ Bình Dương Phường Hiệp Thành,
                        Thành Phố Thủ Dầu Một, Bình Dương
                      </div>
                    </div>
                    <div className="action text-right">
                      <button className="text-blue-500 text-sm sm:text-base">{t("update")}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div hidden={hidden} class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden bg-zinc-400/25 overflow-y-auto md:inset-0 h-[calc(100%-0rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full mx-auto mt-10">
          <div class="relative bg-white rounded-lg shadow ">
            <div class="flex items-start justify-between p-4 border-b rounded-t ">
              <h3 class="text-xl font-semibold text-gray-900 ">
                {t("add_address")}
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                onClick={() => handModalAddress()}data-modal-hide="defaultModal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <form >
                <div className="mx-auto max-w-xl">
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                    {t("province_city")} <span className="text-red-500">*</span>:
                    </span>
                    <select
                      required
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      {t("districts_towns")} <span className="text-red-500">*</span>:
                    </span>
                    <select
                      required
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      {t("wards")} <span className="text-red-500">*</span>:
                    </span>
                    <select
                      required
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                  <div className="py-2">
                    <span className="px-1 text-sm text-gray-600">
                      {t("detail_address")}:
                    </span>
                    <input
                      required
                      placeholder=""
                      type="text"
                      className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
              <button
                data-modal-hide="defaultModal"
                class=" text-white bg-black hover:bg-black-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddressManager;
