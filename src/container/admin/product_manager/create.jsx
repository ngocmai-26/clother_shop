import { useTranslation } from "react-i18next";
import HeaderAdmin from "../component/header";
import HomeAdmin from "..";
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  getAllProductColorList,
} from "../../../thunks/ProductThunk";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import { upload, uploadNoCallBack } from "../../../app/firebase.process";
import { setAlert } from "../../../slices/AlertSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ProductCreate() {
  const [t] = useTranslation("app");
  const dispatch = useDispatch();
  const { manager } = useSelector((state) => state.productReducer);
  const { categories } = useSelector((state) => state.categoryReducer);

  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [newColorIndex, setNewColorIndex] = useState();
  const [imageBanner, setImageBanner] = useState();
  const [images, setImages] = useState([]);
  const imagesUploadedRef = useRef([]);
  const imageBannerUploadedRef = useRef("");
  const [isCreating, setIsCreating] = useState(false);
  const [size, setSize] = useState("");
  const [number, setNumber] = useState(0);
  const [state, setState] = useState([]);

  useLayoutEffect(() => {
    dispatch(getAllProductColorList());
  }, []);
  useLayoutEffect(() => {}, [imageBanner]);
  useLayoutEffect(() => {
    console.log(images);
  }, [images]);
  useLayoutEffect(() => {
    if (manager.colors.length > 0) {
      setSelectedColor([manager.colors[0]]);
      setSelectedSize([manager.colors[0].productSizes[0]]);
    }
  }, [manager.colors]);
  useLayoutEffect(() => {
    if (
      imagesUploadedRef.current.length == images.length &&
      imageBannerUploadedRef.current != ""
    ) {
      const newSlt = [];

      for (let i = 0; i < selectedColor.length; i++) {
        const sltColor = { ...selectedColor[i], size: [] };
        for (let size of selectedColor[i].productSizes) {
          let selected = selectedSize.filter((s) => s.id == size.id);
          console.log(selected);
          if (selected.length > 0) {
            sltColor.size.push(selected[0]);
          }
        }
        newSlt.push(sltColor);
      }
      const data = {
        code: product.code,
        name: product.name,
        imageBanner: imageBannerUploadedRef.current,
        price: product.price,
        listCategoryIds: product.categoryId
          ? [product.categoryId]
          : [categories[0].id],
        linkLinkImages: imagesUploadedRef.current,
        colors: newSlt,
        description: product.description,
      };
      console.log(data);
      dispatch(addProduct(data));
      setIsCreating(false);
    }
  }, [imagesUploadedRef.current, imageBannerUploadedRef.current]);

  useLayoutEffect(() => {
    let index = 0;
    for (let i = 0; i < manager.colors.length; i++) {
      if (manager.colors[i].id == selectedColor[selectedColor.length - 1]?.id) {
        index = i;
      }
    }
    setNewColorIndex(index);
  }, [selectedColor]);
  useLayoutEffect(() => {}, [selectedSize]);
  const handleCreateProduct = async () => {
    if (product.name == "" || product.description == "" || !product.price) {
      dispatch(setAlert({ type: "error", content: "Form not valid" }));
      return;
    }
    if (!isCreating) {
      setIsCreating(true);
      for (let image of images) {
        let downloadUrl = await uploadNoCallBack(image);
        let uploaded = [...imagesUploadedRef.current];
        console.log(downloadUrl);
        uploaded.push(downloadUrl);
        imagesUploadedRef.current = uploaded;
      }
      if (imageBanner) {
        await upload(imageBanner, handleSetImageBannerUploaded);
      }
      dispatch(setAlert({ type: "success", content: "Upload image success" }));
    } else {
      dispatch(
        setAlert({ type: "error", content: t("processing_create_product") })
      );
    }
  };
  const handleSetImageBannerUploaded = (downloadUrl) => {
    imageBannerUploadedRef.current = downloadUrl;
  };
  const handleToggleSelectColor = (checked, color) => {
    let selected = [...selectedColor];
    if (checked) {
      selected.push(color);
    } else {
      selected = selected.filter((color_) => color_.id != color.id);
      let selectedSize_ = [];
      let colorSize = color.productSizes.map((size) => size.id);
      for (let sl of selectedSize) {
        if (!colorSize.includes(sl)) {
          selectedSize_.push(sl);
        }
      }
      setSelectedSize(selectedSize_);
    }
    setSelectedColor(selected);
  };
  const handleToggleSelectSize = (checked, size) => {
    let selected = [...selectedSize];
    if (checked) {
      selected.push(size);
    } else {
      selected = selected.filter((size_) => size_.id != size.id);
    }
    setSelectedSize(selected);
  };

  const handleAddSize = () => {
    if (size === "") {
      alert("Hãy nhập nội dung!");
    } else {
      setState([...state, { size, number }]);
      setSize("");
      setNumber(0);
    }
  };

  const deleteJob = (item) => {
    const list = state.filter((e) => e !== item);
    setState(list);
  };

  return (
    <HomeAdmin>
      <div className="w-10/12 bg-slate-700 text-white h-screen flex flex-col overflow-y-hidden ">
        <HeaderAdmin />
        <div className="w-full overflow-x-hidden ">
          <main className="w-full flex-grow p-6">
            <h1 className="w-full text-3xl pb-6">{t("add_product")}</h1>

            <div className="flex flex-wrap">
              <div className="w-full  my-6 pr-0 lg:pr-2">
                <div className="leading-loose bg-white rounded shadow-xl p-10 ">
                  <div className="grid grid-cols-3 gap-4 ">
                    <div className="col-span-2 ">
                      <div>
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtCode"
                        >
                          {t("product_code")}
                        </label>
                        <input
                          onChange={(e) =>
                            setProduct({ ...product, code: e.target.value })
                          }
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          id="txtCode"
                          name="txtCode"
                          type="text"
                          required
                          placeholder={t("enter_code_product")}
                          aria-label="txtCode"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtName"
                        >
                          {t("name_product")}
                        </label>
                        <input
                          onChange={(e) =>
                            setProduct({ ...product, name: e.target.value })
                          }
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          id="txtName"
                          name="txtName"
                          type="text"
                          required
                          placeholder={t("enter_name_product")}
                          aria-label="txtName"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtPrice"
                        >
                          {t("price")}
                        </label>
                        <input
                          onChange={(e) =>
                            setProduct({ ...product, price: e.target.value })
                          }
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          id="txtPrice"
                          name="txtPrice"
                          type="number"
                          required
                          placeholder={t("enter_price_product")}
                          aria-label="txtPrice"
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="price"
                        >
                          {t("color")}
                        </label>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex ">
                          {manager.colors.map((color, index) => {
                            let isChecked =
                              selectedColor.filter(
                                (color_) => color.id == color_.id
                              ).length > 0;
                            return (
                              <li key={index} className="w-full ">
                                <div className="flex items-center pl-3">
                                  <input
                                    onChange={(e) => {
                                      handleToggleSelectColor(
                                        e.target.checked,
                                        color
                                      );
                                    }}
                                    checked={isChecked ? "checked" : ""}
                                    id="vue-checkbox-list"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                                  />

                                  <label
                                    htmlFor="vue-checkbox-list"
                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                                  >
                                    {color.colorName}
                                  </label>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="price"
                        >
                          {t("size")}
                        </label>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex">
                          {manager?.colors[newColorIndex]?.productSizes?.map(
                            (size, index) => {
                              const isChecked =
                                selectedSize.filter(
                                  (size_) => size_.id == size.id
                                ).length > 0;
                              return (
                                <li key={index} className="w-full ">
                                  <div className="flex items-center pl-3">
                                    <input
                                      onChange={(e) => {
                                        handleToggleSelectSize(
                                          e.target.checked,
                                          size
                                        );
                                      }}
                                      checked={isChecked ? "checked" : ""}
                                      id="vue-checkbox-list"
                                      type="checkbox"
                                      value=""
                                      className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                                    />
                                    <label
                                      htmlFor="vue-checkbox-list"
                                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                                    >
                                      {size.sizeName}
                                    </label>
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtName"
                        >
                          {t("product_category")}
                        </label>
                        <select
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              categoryId: e.target.value,
                            })
                          }
                        >
                          {categories.map((cat, index) => {
                            if (!cat.isPrimary) {
                              return (
                                <option key={index} value={cat.id}>
                                  {cat.name}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>
                      <div className="mt-2">
                        <label
                          className=" block text-base text-gray-600"
                          htmlFor="message"
                        >
                          {t("describe")}
                        </label>
                        <CKEditor
                          editor={ClassicEditor}
                          data=""
                          onReady={(editor) => {}}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setProduct({ ...product, description: data });
                          }}
                        />
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtName"
                        >
                          {t("product_banner_image")}
                        </label>
                        <input
                          onChange={(e) => setImageBanner(e.target.files[0])}
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          id="txtName"
                          name="txtName"
                          type="file"
                          required
                          placeholder={t("enter_name_product")}
                          aria-label="txtName"
                        />
                        <div className="my-2">
                          <div className="flex flex-row gap-2">
                            {imageBanner && (
                              <img
                                src={URL.createObjectURL(imageBanner)}
                                style={{
                                  maxWidth: "240px",
                                  maxHeight: "240px",
                                  borderRadius: 4,
                                  objectFit: "cover",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <label
                          className="block text-base text-gray-600"
                          htmlFor="txtName"
                        >
                          {t("product images")}
                        </label>
                        <input
                          onChange={(e) => {
                            setImages([...e.target.files]);
                          }}
                          className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          type="file"
                          required
                          multiple
                        />
                        <div className="my-2">
                          <div className="flex flex-row gap-2 flex-wrap">
                            {images.map((img, index) => {
                              return (
                                <img
                                  key={index}
                                  src={URL.createObjectURL(img)}
                                  style={{
                                    maxWidth: "240px",
                                    maxHeight: "240px",
                                    borderRadius: 4,
                                    objectFit: "cover",
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-2 p-2 text-black max-h-screen overflow-y-auto overflow-hidden">
                      <div className="flex justify-between">
                      <button className="mx-2">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button className="text-xl font-bold px-2 bg-black text-white">
                        +
                      </button>
                      </div>
                      <div className="color ">
                        <div className="input">
                          <label htmlFor="color" className="text-sm">
                            Tên màu
                          </label>
                          <input
                            type="text"
                            id="color"
                            name="color"
                            className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          />
                        </div>
                        <div className="image-upload">
                          <label htmlFor="color" className="text-sm">
                            Tên màu
                          </label>
                          <input
                            type="file"
                            id="color"
                            name="color"
                            className="w-full px-5 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0"
                          />
                        </div>
                        <div className="img py-3">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQT9CnbMH0H9iJe_zmR-jpn62TkreuqKUS0DoDKQ4835jLpz7w74-eVbp0fpfCFA0rKw&usqp=CAU"
                            alt=""
                            className="mx-auto h-36 w-36"
                          />
                        </div>
                      </div>
                      <div className="size">
                        <div className="flex">
                          <input
                            type="text"
                            id="color"
                            name="color"
                            className="px-2 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0 w-2/3"
                            placeholder="size"
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <input
                            type="number"
                            id="color"
                            name="color"
                            className="px-2 mx-1 text-sm py-2 text-gray-700 bg-gray-200 rounded outline-0 w-1/3"
                            placeholder="số lượng"
                            onChange={(e) => setNumber(e.target.value)}
                          />
                        </div>
                        <button
                          className="bg-gray-200 py-1 px-2 rounded-sm text-sm"
                          onClick={() => handleAddSize()}
                        >
                          Thêm size
                        </button>
                        <div className="list-todo py-2">
                          <ul>
                            {state.map((item, key) => (
                              <li
                                key={key}
                                className="todo-item justify-between flex py-0.5 border-b-gray-200 border-b-2 mb-2 px-2"
                              >
                                <div>
                                  <div>
                                    <span className="text-xs font-bold">
                                      Size:{" "}
                                    </span>
                                    <span className="text-xs">{item.size}</span>
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold">
                                      Số lượng:{" "}
                                    </span>
                                    <span className="text-xs">
                                      {item.number}
                                    </span>
                                  </div>
                                </div>
                                <span
                                  className="todo-exit cursor-pointer"
                                  onClick={() => deleteJob(item)}
                                >
                                  &times;
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-6 text-right">
                    <Link
                      to={"/admin/product-manager"}
                      type="button"
                      className="px-4 py-1 text-white font-light tracking-wider mx-3 rounded"
                      style={{ backgroundColor: "black" }}
                    >
                      {t("come_back")}
                    </Link>
                    <button
                      onClick={handleCreateProduct}
                      className="px-4 py-1 text-white font-light tracking-wider  rounded"
                      style={{ backgroundColor: "black" }}
                    >
                      {t("save_update")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </HomeAdmin>
  );
}

export default ProductCreate;
