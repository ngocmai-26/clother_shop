import { useState } from "react";
import iconEyeClose from "../../../asset/images/eye-closed.png";
import iconEye from "../../../asset/images/eye.png";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NavbarMini from "../component/nav_mini";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../../slices/AlertSlice";
import { changePassword, updateProfile } from "../../../thunks/AuthThunk";
import { setUser } from "../../../slices/AuthSlice";
import { Layout } from "../index";
function UserProfile({ setAccountUser }) {
  const [t] = useTranslation("app");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { user } = useSelector((state) => state.authReducer);
  const [userUpdate, setUserUpdate] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const dispatch = useDispatch();
  const handleUpdateUser = () => {
    if (userUpdate.phone) {
      if (userUpdate.phone.toLowerCase().length !== 10) {
        dispatch(
          setAlert({
            type: "error",
            content: "Số điện thoại không đúng định dạng",
          })
        );
        return;
      }
    }
    if (userUpdate.email) {
      if (
        !userUpdate.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        dispatch(
          setAlert({ type: "error", content: "Email không đúng định dạng" })
        );
        return;
      }
    }
    dispatch(updateProfile({ ...userUpdate, id: user.id })).then((resp) => {
      dispatch(setUser(resp.payload));
    });
  };
  const handleChangePassword = () => {
    if (window.confirm("Do u really want change password ? ")) {
      if (oldPassword.length <= 0) {
        dispatch(
          setAlert({
            type: "error",
            content: "Mật khẩu cũ không được để trống",
          })
        );
        return;
      }
      if (newPassword.length <= 0) {
        dispatch(
          setAlert({
            type: "error",
            content: "Mật khẩu mới không được để trống",
          })
        );
        return;
      }
      dispatch(changePassword({ oldPassword, newPassword }));
    }
  };
  return (
    <Layout>
      <div className="pt-20 mt-5 sm:mt-0 px-8 min-h-screen">
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
              {t("user")}
            </Link>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 py-4">
            <div>
              <NavbarMini />
            </div>
            <div className="md:col-span-3 xl:col-span-2 ">
              <div className="user-profile px-3">
                <h2 className="text-3xl py-2">{t("user_profile")}</h2>
                <p className="text-base">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="user-profile-detail">
                  <div>
                    <h2 className="text-2xl py-2">
                      {t("general_information")}
                    </h2>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="title">
                        <p className="text-base font-normal">
                          {t("your_name")}
                        </p>
                        <p className="text-sm text-neutral-400">
                          {t("your_full_name")}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <input
                          onChange={(e) => {
                            setUserUpdate({
                              ...userUpdate,
                              fullname: e.target.value,
                            });
                          }}
                          defaultValue={user.fullname}
                          placeholder=""
                          type="text"
                          className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="title">
                        <p className="text-base font-normal">Email</p>
                      </div>
                      <div className="col-span-2">
                        <input
                          onChange={(e) => {
                            setUserUpdate({
                              ...userUpdate,
                              email: e.target.value,
                            });
                          }}
                          defaultValue={user.email}
                          placeholder=""
                          type="text"
                          className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="title">
                        <p className="text-base font-normal">{t("contact")}</p>
                      </div>
                      <div className="col-span-2">
                        <input
                          onChange={(e) => {
                            setUserUpdate({
                              ...userUpdate,
                              phone: e.target.value,
                            });
                          }}
                          defaultValue={user.phone}
                          placeholder=""
                          type="number"
                          className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        />
                      </div>
                    </div>
                    <h2 className="text-2xl py-3">{t("security")}</h2>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="title">
                        <p className="text-base font-normal">{t("password")}</p>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                          defaultValue={""}
                          autoComplete="false"
                          type={isPasswordVisible ? "text" : "password"}
                          className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                          onClick={togglePasswordVisibility}
                          type="button"
                        >
                          {isPasswordVisible ? (
                            <img src={iconEye} alt="iconEye" />
                          ) : (
                            <img src={iconEyeClose} alt="iconEyeClose" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-2">
                      <div className="title">
                        <p className="text-base font-normal">New Password</p>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                          defaultValue={""}
                          autoComplete="false"
                          type={isPasswordVisible ? "text" : "password"}
                          className="w-full px-4 py-2  text-base  border border-gray-500 rounded outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                          onClick={togglePasswordVisibility}
                          type="button"
                        >
                          {isPasswordVisible ? (
                            <img src={iconEye} alt="iconEye" />
                          ) : (
                            <img src={iconEyeClose} alt="iconEyeClose" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 py-2">
                      <div className="col-span-2 lg:col-end-4">
                        <div className="flex justify-between">
                          <button
                            onClick={handleUpdateUser}
                            className="bg-black border border-black text-white uppercase py-3 md:w-5/10 w-6/12 mt-3 me-2 text-xs"
                          >
                            Update profile
                          </button>
                          <button
                            onClick={handleChangePassword}
                            className="bg-black border border-black text-white uppercase py-3 md:w-5/10 w-6/12 mt-3 text-xs"
                          >
                            {t("change_password")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
