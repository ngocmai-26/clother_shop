import Logo from "../../../asset/images/Logo_footer.png";
import iconFB from "../../../asset/images/facebook.png";
import iconMess from "../../../asset/images/messenger.png";
import iconBe from "../../../asset/images/be.png";
import iconLine from "../../../asset/images/whatsapp.png";
function Footer() {
  return (
    <div className="bg-gray-700 p-4 ">
      <div className="w-11/12 mx-auto">
        <div className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          <div className="py-2">
            <div className="logo">
              <img src={Logo} alt="" width={250} />
            </div>
            <div className="py-5">
              <p className="text-sm font-normal leading-6">Email: duyscott.work@gmail.com</p>
              <p className="text-sm font-normal leading-6">Hotline: 0123.456.789</p>
            </div>
            <h3 className="text-2xl">Mạng xã hội</h3>
            <div className="flex py-3">
              
              <a href="" className="pe-2">
                <img src={iconFB} alt="" className="w-100" />
              </a>
              <a href="" className="px-2">
                <img src={iconMess} alt="" className="w-100" />
              </a>
              <a href="" className="px-2">
                <img src={iconLine} alt="" className="w-100" />
              </a>
              <a href="" className="px-2">
                <img src={iconBe} alt="" className="w-100" />
              </a>
            </div>
          </div>
          <div className="py-2">
            <h3 className="text-2xl">Hệ thống cửa hàng</h3>
            <div className="address-1 pt-5">
              <h5 className="py-2 text-base">Hà nội</h5>
              <p className="text-sm leading-6 font-light">CS1: 108 Trần Phú, Hà Đông, Hà Nội</p>
              <p className="text-sm leading-6 font-light">CS1: 108 Trần Phú, Hà Đông, Hà Nội</p>
            </div>
            <div className="address-1 pt-2">
              <h5 className="py-2 text-base">TP.HCM</h5>
              <p className="text-sm leading-6 font-light">CS1: 108 Trần Phú, Hà Đông, Hà Nội</p>
              <p className="text-sm leading-6 font-light">CS1: 108 Trần Phú, Hà Đông, Hà Nội</p>
            </div>
          </div>
          <div className="py-2">
            <h3 className="text-2xl">Chính sách</h3>
            <div className="py-5">
              <p className="leading-7 text-sm">Chính sách bảo mật</p>
              <p className="leading-7 text-sm">FAQ</p>
              <p className="leading-7 text-sm">Chính sách thẻ thành viên</p>
              <p className="leading-7 text-sm">Chính sách bảo hành và đổi trả</p>
              <p className="leading-7 text-sm">Chính sách giao hàng hỏa tốc</p>
            </div>
          </div>
          <div className="py-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696001318288!5m2!1svi!2s"
              width="100%"
              height="320"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p className="text-sm text-white text-center pt-5">Copyright 2022 by Duy Scott All Right Reserves.</p>
      </div>
    </div>
  );
}

export default Footer;
