import { useState } from "react";

function ForgotPassword2() {
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
          <h2 className="text-3xl">Confirm OTP</h2>
          <p className="text-base py-3">
            An OTP code has been sent to email{" "}
            <span className="text-rose-500">uyscott.work@gmail.com</span>.
            Please enter in the box below.
          </p>
          <form class="mt-4">
            <div class="mx-auto max-w-lg ">
              <div className="flex justify-center">
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2 text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2 text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2  text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2  text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2  text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
                <input
                  placeholder=""
                  type="text"
                  className="w-12 mx-2 px-4 py-2  text-base  border border-black rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                />
              </div>

              <button className="bg-black text-white uppercase w-full py-3 mt-4">
                Sign up
              </button>
              <div className="text-center pt-2">
                <a href="">Back to login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword2;
