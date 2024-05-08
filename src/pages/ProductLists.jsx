import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../constant";
import styles from "../styles";
import { aboutHero, productHero } from "../assets";

const ProductLists = ({ addToCart, limit }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filter products based on selected filter
  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.gender === selectedFilter);

  const items = [
    { id: "All", filter: "All" },
    { id: "Unisex", filter: "Unisex" },
    { id: "Male", filter: "Male" },
    { id: "Female", filter: "Female" },
  ];

  return (
    <div className={`${styles.marginCenter} mb-[44px]`}>
      <div className="mt-[68px] mb-[44px] h-[311px] bg-center">
        <img
          src={productHero}
          alt=""
          className="rounded-[16px] w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-[8px] mb-[24px]">
        {items.map((item, i) => (
          <div key={item.id}>
            <button
              className={`${
                styles.paragraphSm
              }  font-header text-header px-[24px] py-[12px] rounded-[8px] ${
                selectedFilter === item.id ? "bg-primary-50" : ""
              }`}
              onClick={() => setSelectedFilter(item.id)}
            >
              {item.filter}
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-between ">
        {filteredProducts.map((product, index) => (
          <Link
            key={index}
            to={`/products/${product.id}`}
            className={`h-auto w-[346px] bg-white p-[24px] rounded-[18px] flex flex-col gap-[16px] text-left relative overflow-hidden mb-[24px] cursor-pointer hover:border-primary-500 hover:border-[0.5px] transition-all duration-300 drop-shadow-sm	`}
            style={{ transition: "transform 0.3s ease" }}
          >
            <div className="flex justify-center align-middle items-end h-[301px]">
              <img
                src={product.image.firstImage}
                alt=""
                className="w-[300px] h-[150px] transition-transform duration-300 transform-gpu scale-100 hover:scale-110"
                style={{ transition: "transform 0.3s ease" }}
              />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex justify-between align-top">
                <div className="flex flex-col gap-[8px]">
                  <h3 className={`${styles.paragraphMd}`}>{product.name}</h3>
                  <p className={`${styles.paragraphXs}`}>{product.gender}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className={`${styles.paragraphMd} ${styles.semi}`}>
                    ${product.price}
                  </p>
                  {/* <button
                    onClick={() => addToCart(product)}
                    className="p-0 cursor-pointer text-body-base-xs hover:font-semi"
                  >
                    Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
