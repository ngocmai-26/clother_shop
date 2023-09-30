import { useState } from "react";
import iconEyeClose from "../../../asset/images/eye-closed.png";
import iconEye from "../../../asset/images/eye.png";

function Register() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function togglePasswordConfirm() {
    setIsPasswordConfirm((prevState) => !prevState);
  }
  return (
    <div className="container ">
      <div class="grid grid-cols-6 gap-4 my-10 py-4 ">
        <div class="col-start-3 col-span-2 border p-3">
          <h2 className="text-3xl">Get Started</h2>
          <p className="text-base py-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form class="mt-4">
            <div class="mx-auto max-w-lg">
              <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Your name</span>
                <input
                  placeholder="Enter your name"
                  type="text"
                  className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div class="py-2">
                <span class="px-1 text-sm text-gray-600">Email</span>
                <input
                  placeholder="Enter your email"
                  type="text"
                  className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>
              <div class="py-2 relative">
                <span class="px-1 text-sm text-gray-600">Password</span>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your password"
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
              <div class="py-2 relative">
                <span class="px-1 text-sm text-gray-600">Confirm Password</span>
                <input
                  type={isPasswordConfirm ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="w-full px-4 py-2  text-base  border border-gray-300 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
               <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 mt-6 text-gray-600"
                  onClick={togglePasswordConfirm}
                  type="button"
                >
                  {isPasswordConfirm ? (

                    <img src={iconEye} alt="" />
                  ) : (
                    <img src={iconEyeClose} alt="" />
                  )}
                </button>
              </div>
              <button className="bg-black text-white uppercase w-full py-3 mt-4">
                Sign up
              </button>
              <div className="text-center pt-2">
                Already have account? <a href="">Sign in</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
