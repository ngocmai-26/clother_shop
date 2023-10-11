import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./container/admin/dashboard";
import ProductManager from "./container/admin/product_manager";
import UserManager from "./container/admin/user_manager";
import ProductCreate from "./container/admin/product_manager/create";
import UserCreate from "./container/admin/user_manager/create";
import NavAdmin from "./container/admin/component/nav";
import OrdersManager from "./container/admin/orders_manager";

function RouterAdmin() {
  return (
    <BrowserRouter>
      <div className="flex">
        <NavAdmin />
        <Routes>
          <Route path="/admin/product-manager" element={<ProductManager />} />
          <Route path="/admin/product-create" element={<ProductCreate />} />
          <Route path="/admin/user-manager" element={<UserManager />} />
          <Route path="/admin/user-create" element={<UserCreate />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/order-manager" element={<OrdersManager />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterAdmin;
