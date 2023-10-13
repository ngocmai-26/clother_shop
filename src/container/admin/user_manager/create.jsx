
import { useTranslation } from "react-i18next";
import HeaderAdmin from "../component/header";

function UserCreate() {
  const [t] = useTranslation("app");
    return ( 
      <div class="w-10/12 bg-slate-700 text-white h-screen  flex flex-col overflow-y-hidden ">
      <HeaderAdmin />
        <main class="w-full flex-grow p-6">
          <h1 class="w-full text-3xl pb-6">{t("add_user")}</h1>
  
          <div class="flex flex-wrap">
            <div class="w-full  my-6 pr-0 lg:pr-2">
              
              <div class="leading-loose">
                <form class="p-10 bg-white rounded shadow-xl">
                  <div class="">
                    <label class="block text-sm text-gray-600" for="name">
                      Tên người dùng
                    </label>
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="name"
                      name="name"
                      type="text"
                      required=""
                      placeholder="Your Name"
                      aria-label="Name"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="price">
                      Email
                    </label>
                    <input
                      class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="Your Price"
                      aria-label="Price"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="price">
                     Mật khẩu
                    </label>
                    <input
                      class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="Your Price"
                      aria-label="Price"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="price">
                      Nhập lại mật khẩu
                    </label>
                    <input
                      class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                      id="price"
                      name="price"
                      type="text"
                      required=""
                      placeholder="Your Price"
                      aria-label="Price"
                    />
                  </div>
                  <div class="mt-6 text-right">
                  <button
                    class="px-4 py-1 text-white font-light tracking-wider mx-3 rounded"
                    style={{ backgroundColor: "black" }}
                    type="submit"
                  >
                    {t("come_back")}
                  </button>
                  <button
                    class="px-4 py-1 text-white font-light tracking-wider  rounded"
                    style={{ backgroundColor: "black" }}
                    type="submit"
                  >
                    {t("save_update")}
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

export default UserCreate;