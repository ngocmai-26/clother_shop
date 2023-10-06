import { useEffect, useState } from "react";
import iconEyeClose from "../../../asset/images/eye-closed.png";
import iconEye from "../../../asset/images/eye.png";
import { account } from "../../../data";
import { Link } from "react-router-dom";

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [accounts, setAccount] = useState(account);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log('email' ,email, 'password' ,password)
  })

  const handleLogin = () => {
    // Kiểm tra tài khoản trong danh sách
    const foundAccount = accounts.find(
      (account) =>
        account.email === email &&
        account.password === password
    );

    if (foundAccount) {
      setLoggedIn(true);
    } else {
      alert(
        "Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản và mật khẩu."
      );
    }
  };
  return (
    <div className="">
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 gap-2 mx-2 py-20">
      {loggedIn ? (
        <p>Đăng nhập thành công!</p>
      ) : (<></>)}
        <div className="xl:col-start-3 md:col-start-2 lg:col-start-2 col-span-2 border p-3">
          <h2 className="text-3xl">Sign in</h2>
          <p className="text-base py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form className="mt-4">
            <div className="mx-auto max-w-lg">
              <div className="py-2">
                <span className="px-1 text-sm text-gray-600">Email</span>
                <input
                  placeholder=""
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div className="py-2 relative">
                <span className="px-1 text-sm text-gray-600">Mật khẩu</span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 mt-6 text-gray-600"
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  {isPasswordVisible ? (
                    <img src={iconEye} alt="" />
                  ) : (
                    <img src={iconEyeClose} alt="" />
                  )}
                </button>
              </div>
              <div className="text-end">
                <a href="">Forgot password?</a>
              </div>
              <button className="bg-black text-white uppercase w-full py-3 mt-4" style={{backgroundColor: 'black'}} onClick={handleLogin} type="button">
                Sign in
              </button>
              <div className="text-center pt-2">
                Not have account? <Link to='/register'>Sign up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
