// ProductDetail.jsx
import { useParams } from "react-router-dom";
import { products } from "../constant";
import PopularCard from "../components/PopularCard";
import styles from "../styles";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id == id);
  const [detailsActive, setDetailsActive] = useState(false);
  const [fittingActive, setFittingActive] = useState(false);

  const toggleDetailsActive = () => {
    setDetailsActive(!detailsActive);
  };
  const toggleFittingActive = () => {
    setFittingActive(!fittingActive);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={`${styles.marginCenter}`}>
      <div className="flex items-center justify-center sm:justify-between mb-[44px]  flex-wrap lg:flex-nowrap">
        <div className="flex align-middle gap-[8px] flex-wrap  w-screen mb-[18px] lg:mb-0 lg:w-[553px] items-center justify-center">
          <img
            src={product.image.firstImage}
            alt=""
            className="object-contain sm:w-[257px] w-[190px] h-[329.5px] bg-white rounded-[18px]"
          />
          <img
            src={product.image.secondImage}
            alt=""
            className="object-contain sm:w-[257px] w-[190px] h-[329.5px] bg-white rounded-[18px]"
          />
          <img
            src={product.image.thirdImage}
            alt=""
            className="object-contain sm:w-[257px] w-[190px] h-[329.5px] bg-white rounded-[18px]"
          />
          <img
            src={product.image.fourthImage}
            alt=""
            className="object-contain sm:w-[257px] w-[190px] h-[329.5px] bg-white rounded-[18px]"
          />
        </div>
        <div className="w-screen lg:w-[464px] h-auto">
          <div className="flex items-center justify-between mb-[24px]">
            <h4 className={`${styles.header4}`}>{product.name}</h4>
            <p className={`${styles.paragraphLg} ${styles.bold}`}>
              $ {product.price}
            </p>
          </div>
          <div className=" mb-[18px]">
            <p className={`${styles.paragraphSm} mb-[50px]`}>
              {product.description}
            </p>
            {/* <a href="#" className={`${styles.paragraphXs} text-natural-500 `}>
              Size Guide
            </a> */}
          </div>
          <div className="flex justify-between gap-[8px] mb-[52px]">
            <Link
              to="/checkout"
              className={`${styles.button} w-full flex justify-center items-center`}
              onClick={() => addToCart(product)}
            >
              Buy
            </Link>
            <button
              className={`${styles.buttonOutlined} w-full`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
          <div>
            <div className="mb-[32px]">
              <div
                className="flex items-center justify-between mb-[12px] cursor-pointer"
                onClick={toggleDetailsActive}
              >
                <h5 className={`${styles.paragraphSm} ${styles.semi}`}>
                  PRODUCT DETAILS
                </h5>
                <IoIosArrowUp
                  size={25}
                  className={`${
                    detailsActive ? "rotate-[180deg]" : null
                  } transition-all duration-200 text-primary-500`}
                />
              </div>
              {detailsActive && (
                <div className="flex flex-col gap-[12px] transition-all duration-300">
                  <div className="flex items-center gap-[12px]">
                    <h6
                      className={`${styles.paragraphSm} ${styles.semi} w-[140px]`}
                    >
                      Model
                    </h6>
                    <p className={`${styles.paragraphSm}`}>{product.model}</p>
                  </div>
                  <div className="flex items-center gap-[12px] ">
                    <h6
                      className={`${styles.paragraphSm} ${styles.semi} w-[140px]`}
                    >
                      Material
                    </h6>
                    <p className={`${styles.paragraphSm}`}>
                      {product.material}
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px] ">
                    <h6
                      className={`${styles.paragraphSm} ${styles.semi} w-[140px]`}
                    >
                      Gender
                    </h6>
                    <p className={`${styles.paragraphSm}`}>{product.gender}</p>
                  </div>
                  <div className="flex items-center gap-[12px] ">
                    <h6
                      className={`${styles.paragraphSm} ${styles.semi} w-[140px]`}
                    >
                      Frame Material
                    </h6>
                    <p className={`${styles.paragraphSm}`}>
                      {product.frame_material}
                    </p>
                  </div>{" "}
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center gap-[12px] justify-between mb-[12px] cursor-pointer"
                onClick={toggleFittingActive}
              >
                <h5 className={`${styles.paragraphSm} ${styles.semi}`}>
                  FITTING
                </h5>
                <IoIosArrowUp
                  size={25}
                  className={`${
                    fittingActive ? "rotate-[180deg]" : null
                  } transition-all duration-200 text-primary-500`}
                />
              </div>
              {fittingActive && (
                <div className="flex flex-col">
                  <div className="flex items-center gap-[12px]">
                    <h6
                      className={`${styles.paragraphSm} ${styles.semi} w-[140px]`}
                    >
                      Face shape
                    </h6>
                    <p className={`${styles.paragraphSm}`}>
                      {product.face_shape}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[44px]">
        <h3 className={`${styles.header4} mb-[24px]`}>More Like This</h3>
        <div className="flex flex-wrap items-center justify-center sm:justify-between sm:flex-nowrap">
          <PopularCard limit={3} />
        </div>
      </div>
      {/* <ProductDetails
        id={product.id}
        name={product.name}
        description={product.description}
        price={product.price}
        model={product.model}
        material={product.material}
        gender={product.gender}
        frame={product.frame_material}
        face={product.face_shape}
        firstImage={product.image.firstImage}
        secondImage={product.image.secondImage}
        thirdImage={product.image.thirdImage}
        fourthImage={product.image.firstImage}
      /> */}
    </div>
  );
};

export default ProductDetail;
