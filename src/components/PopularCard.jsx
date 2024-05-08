import React from "react";
import { Link, useLocation } from "react-router-dom";
import { products } from "../constant";
import styles from "../styles";

const PopularCard = ({ limit }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Slice the products array to get a limited number of items
  const limitedProducts = products.slice(0, limit);

  return (
    <>
      {limitedProducts.map((product, index) => (
        <Link
          key={index}
          to={`/products/${product.id}`}
          className={`h-auto sm:auto lg:w-[346px] bg-white lg:p-[24px] p-[12px] rounded-[18px] flex flex-col gap-2 lg:gap-[16px] ${
            isHomePage ? "text-center" : "text-left"
          } relative overflow-hidden  cursor-pointer`}
          style={{ transition: "transform 0.3s ease" }}
        >
          <div className="flex justify-center align-middle items-end h-[301px]">
            <img
              src={product.image.firstImage}
              alt="Something went wrong"
              className="sm:w-auto lg:w-[300px] lg:h-[150px]sm:h-[100px] transition-transform duration-300 transform-gpu scale-100 hover:scale-110"
              style={{ transition: "transform 0.3s ease" }}
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className={`${styles.paragraphMd}`}>{product.name}</h3>

            <p className={`${styles.paragraphLg} ${styles.semi}`}>
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularCard;
