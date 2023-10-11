import poster from "../../asset/images/slide.png";
import cloth from "../../asset/images/cloth_1.png";
import cloth_1 from "../../asset/images/cloth_1.png";
import cloth_2 from "../../asset/images/cloth_2.png";
import logoipsum from "../../asset/images/logoipsum.png";
import logoipsum_1 from "../../asset/images/logoipsum_1.png";
import logoipsum_2 from "../../asset/images/logoipsum_2.png";
import logoipsum_3 from "../../asset/images/logoipsum_3.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function HomePage() {
  // muốn dùng translate thì tách 2 ins từ useTranslation
  const [t] = useTranslation("app");
  return (
    <article className="mt-20 sm:mt-0">
      <div className="poster relative">
        <img src={poster} alt="" />
        <div className="absolute poster-info w-full">
          <h4 className="lg:text-9xl text-4xl xl:text-9xl md:text-8xl   text-center text-white ">
            {t("welcome")}
          </h4>
          <p className=" text-white lg:text-3xl text-lg md:text-2xl italic pt-2">
            S L O G A N H E R E
          </p>
        </div>
        <div className="absolute poster-content text-center m-auto w-full flex justify-center">
          <p className="text-white sm:w-10/12 md:w-10/12 lg:w-2/4 hidden sm:block md:block lg:block xl:block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        <div className="about-us py-8">
          <div className="grid lg:grid-cols-5 grid-cols-1  gap-7">
            <div className="sm:col-span-2 col-span-5">
              <h4 className="text-3xl sm:text-4xl sm:text-center font-bold uppercase"> {t("about_us")}</h4>
              <p className="py-5 leading-7">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="bg-black border border-black text-white uppercase py-3 w-3/6 mt-4 text-xs">
                EXPLORE MORE
              </button>
            </div>
            <div className="sm:col-span-3 col-span-5">
              <div className="grid grid-cols-3 gap-5">
                <div className="cloth-item">
                  <img src={cloth} alt="" className="h-4/5 w-full" />
                </div>
                <div className="cloth-item">
                  <img src={cloth_1} alt="" className="h-full w-full" />
                </div>
                <div className="cloth-item">
                  <img src={cloth_2} alt="" className="h-4/5 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new_product py-8">
          <h2 className="text-3xl sm:text-4xl pt-3 text-center font-bold uppercase">
          {t("new_product")}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <button className="bg-black border border-black text-white uppercase py-3 mt-4 px-10 text-xs">
              {t("see_more")}
            </button>
          </div>
        </div>
        <div className="new_collections py-8">
          <h2 className="text-3xl sm:text-4xl py-3 text-center font-bold uppercase">
          {t("new_collection")}
          </h2>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
            <div className="product-item py-5">
              <div className="product_item-img rounded overflow-hidden">
                <Link to="/product-detail"><img
                  src={cloth}
                  alt=""
                  style={{ height: "350px" }}
                  className="object-fill w-full "
                />
                </Link>
              </div>
              <div className="product_item-name h-16 overflow-hidden">
                <Link
                  to="/product-detail"
                  className="text-xl text-overflow overflow-ellipsis line-clamp-2 font-medium"
                >
                  adsadsv Lorem ipsum is simply dummy text...
                </Link>
              </div>
              <div className="product_item-pride">
                <p className="text-base">$ 420.000</p>
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <button className="bg-black border border-black text-white uppercase py-3 mt-4 px-10 text-xs">
              {t("see_more")}
            </button>
          </div>
        </div>
        <div className="new_collections text-center py-4 ">
          <h2 className="text-3xl sm:text-4xl py-3 text-center font-bold uppercase">
          {t("our_partners")}
          </h2>
          <p className="lg:w-2/4 text-center py-3 mx-auto">
          {t("our_partners_text")}
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-3">
            <div className="product-item py-5 my-auto">
              <img src={logoipsum} alt="" className="w-4/5 mx-auto" />
            </div>
            <div className="product-item py-5 my-auto">
              <img src={logoipsum_1} alt="" className="w-4/5 mx-auto" />
            </div>
            <div className="product-item py-5 my-auto">
              <img src={logoipsum_2} alt="" className="w-4/5 mx-auto" />
            </div>
            <div className="product-item py-5 my-auto">
              <img src={logoipsum_3} alt="" className="w-4/5 mx-auto" />
            </div>
          </div>
        </div>
        <div className="new_feedbacks text-center py-4">
          <h2 className="text-3xl sm:text-4xl py-3 text-center font-bold uppercase">{t("our_feedbacks")}</h2>
          <p className="lg:w-2/4 text-center  py-3 mx-auto">
          {t("feedbacks_text")}
          </p>
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-3 py-3 my-5">
            <div className="border p-3">
              <div className="flex border-bottom py-2 ">
                <div className="avatar my-auto">
                  <img src={cloth} className="rounded-full w-12 h-12 " alt="" />
                </div>
                <div className="info px-3">
                  <h6 className="font-medium text-left">Duy</h6>
                  <p className="text-xs font-normal">UX/UI Design</p>
                </div>
              </div>
              <hr></hr>
              <div className="comment py-3">
                <p className="text-sm text-slate-500 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="new_feedbacks text-center py-4">
          <h2 className="text-3xl sm:text-4xl py-3 text-center font-bold uppercase">{t("contact_to_us")}</h2>
          <p className="lg:w-2/4 text-center py-3 mx-auto">
          {t("contact_email_text")}
          </p>
          <div className="lg:w-2/4  mx-auto">
            <form className="mt-4">
              <div className="mx-auto max-w-lg">
                <div className="py-2 flex">
                  <input
                    placeholder={t("enter_email")}
                    type="text"
                    className="w-full px-4 py-2  text-base  border border-gray-300 outline-none  focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
                  />
                  <button className="bg-black text-white uppercase py-3  px-5 text-sm">
                  {t("send")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}

export default HomePage;
