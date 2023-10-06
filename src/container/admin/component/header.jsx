
import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <aside class="relative bg-blue-400 h-screen w-64 hidden sm:block shadow-xl">
      <div class="p-6">
        <Link
          to='/admin'
          class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          Admin
        </Link>
        <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i class="fas fa-plus mr-3"></i> New Report
        </button>
      </div>
      <nav class="text-white text-base font-semibold pt-3">
        <Link
          to='/admin'
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </Link>
        <Link
          to='/admin/product-manager'
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i class="fas fa-sticky-note mr-3"></i>
          Quản lý sản phẩm
        </Link>
        <Link
          to='/'
          class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"
        >
          <i class="fas fa-table mr-3"></i>
          Quản lý đơn hàng
        </Link>
        <Link
          to='/admin/user-manager'
          class="flex items-center active-nav-link opacity-75 hover:opacity-100 text-white py-4 pl-6 nav-item"
        >
          <i class="fas fa-align-left mr-3"></i>
          Quản lý người dùng
        </Link>
      </nav>
      <a
        href="#"
        class="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
      >
        <i class="fas fa-arrow-circle-up mr-3"></i>
        Upgrade to Pro!
      </a>
    </aside>
  );
}

export default HeaderAdmin;
