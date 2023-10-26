import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../container/layout/homePage";
import Product from "../container/layout/product";
import ProductDetail from "../container/layout/product/product-detail";
import Login from "../container/layout/auth/login";
import ForgotPassword from "../container/layout/auth/forgot_password";
import Register from "../container/layout/auth/register";
import ForgotPassword2 from "../container/layout/auth/forgot_password_2";
import ForgotPassword3 from "../container/layout/auth/forgot_password_3";
import SuccessRegister from "../container/layout/auth/success_register";
import UserProfile from "../container/layout/user/user_profile";
import Orders from "../container/layout/user/orders";
import AddressManager from "../container/layout/user/addressManager";
import Payment from "../container/layout/payment";
import PaymentMethod from "../container/layout/payment/payment_method";

export const GeneralRoute = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/product" element={<Product />} />
        <Route path="/forgot-OTP/:email/:type" element={<ForgotPassword2 />} />
        {/* <Route path="/forgot-create-password" element={<ForgotPassword3 />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/success-register" element={<SuccessRegister />} />
        <Route path="*" element={<HomePage />} />
        
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route
          path="/user-profile"
          element={<UserProfile  />}
        />
         <Route
          path="/orders"
          element={<Orders />}
        />

<Route
          path="/address-manager"
          element={<AddressManager />}
        />
      </Routes>
    </BrowserRouter>
  );
};
