import { Link } from "react-router-dom";

function UserManager() {
    return ( 
        <div class="w-10/12 bg-slate-700 text-white  h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">
          <h1 class="text-3xl  pb-6">Tables</h1>
          <Link to='/admin/user-create'  className="border border-sky-600 text-white uppercase py-3 px-10 bg-sky-600 rounded-full mt-3 text-xs">
            Thêm
          </Link>
          <div class="w-full mt-12">
            <p class="text-xl pb-3 flex items-center">
              <i class="fas fa-list mr-3"></i> Table Example
            </p>
            <div class="bg-white overflow-auto">
              <table class="text-left w-full border-collapse text-black">
                <thead>
                  <tr>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      STT
                    </th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      Tên người dùng
                    </th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      Avatar
                    </th>
                    <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                      Email
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
                      <a className="border border-yellow-400 text-white uppercase py-2 px-3 bg-yellow-400 rounded-lg mt-3 mx-1 text-xs">Xem thêm</a>
                      <a  className="border border-rose-600 text-white uppercase py-2 px-3 bg-rose-600 rounded-lg mt-3 mx-1 text-xs">Xóa</a>
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
                      <a className="border border-yellow-400 text-white uppercase py-2 px-3 bg-yellow-400 rounded-lg mt-3 mx-1 text-xs">Xem thêm</a>
                      <a  className="border border-rose-600 text-white uppercase py-2 px-3 bg-rose-600 rounded-lg mt-3 mx-1 text-xs">Xóa</a>
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

export default UserManager;