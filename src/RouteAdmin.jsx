import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./container/admin/dashboard";
import ProductManager from "./container/admin/product_manager";
import UserManager from "./container/admin/user_manager";
import ProductCreate from "./container/admin/product_manager/create";
import UserCreate from "./container/admin/user_manager/create";
import HeaderAdmin from "./container/admin/component/header";

function RouterAdmin() {
  return (
    <BrowserRouter>
    <div className="flex">
    <HeaderAdmin />
      <Routes>
        <Route path="/admin/product-manager" element={<ProductManager />} />
        <Route path="/admin/product-create" element={<ProductCreate />} />
        <Route path="/admin/user-manager" element={<UserManager />} />
        <Route path="/admin/user-create" element={<UserCreate />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </div>
     
    </BrowserRouter>
  );
}

export default RouterAdmin;
