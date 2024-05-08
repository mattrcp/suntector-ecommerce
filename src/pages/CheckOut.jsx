// Cart.jsx

import { RiH1 } from "react-icons/ri";
import styles from "../styles";
import { cart } from "../assets";
import PopularCard from "../components/PopularCard";

const CheckOut = ({ cartItems, removeFromCart }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`${styles.marginCenter} `}>
      <div className="flex gap-[48px] my-[80px] flex-wrap lg:flex-nowrap">
        {totalPrice === 0 ? (
          <div className="flex flex-col items-center justify-center w-screen h-auto gap-5">
            <h1 className={`${styles.header3} `}>The cart is empty 😊</h1>
            {/* <img src={cart} alt="" className="w-[500px] h-auto" /> */}
          </div>
        ) : (
          <>
            <div className="lg:w-[760px]  w-full ">
              <h5 className={`${styles.header5} mb-[24px]`}>Shopping Bag</h5>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="px-[16px] py-[32px] sm:w-full lg:w-[760px] w-auto bg-gradient-2 rounded-[18px] mb-[14px]"
                >
                  <div className="flex flex-col">
                    <div className="flex lg:gap-[40px] gap-[22px] justify-between flex-row">
                      <div className="w-[116px] h-[116px] bg-white flex justify-center items-center rounded-[18px]">
                        <img
                          src={item.image.firstImage}
                          alt=""
                          className="object-fill"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-between gap-[24px] w-full">
                        <div className="flex items-end justify-between sm:w-auto lg:w-[575px] w:auto border-b-[1px] pb-[12px] border-natural-300 flex-wrap sm:flex-nowrap">
                          <div className="mb-[18px] sm:mb-0">
                            <h6
                              className={`${styles.header5} text-root mb-[6px]`}
                            >
                              {item.name}
                            </h6>
                            <p className={`${styles.paragraphSm}`}>
                              {item.model}
                            </p>
                          </div>
                          <p
                            className={`${styles.paragraphLg} ${styles.semi} text-body-base-md`}
                          >
                            $ {item.price}
                          </p>
                        </div>
                        <button
                          className={`${styles.paragraphXs} ${styles.semi} text-natural-400`}
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full">
              <h5 className={`${styles.header5} mb-[24px]`}>Bills Details</h5>
              <div className="flex justify-between border-b-[1px] pb-[12px] border-natural-300 items-center mb-[16px]">
                <p className={`${styles.paragraphMd} ${styles.semi}`}>
                  Items Total
                </p>
                <p className={`${styles.paragraphLg} ${styles.semi}`}>
                  {" "}
                  $ {totalPrice}
                </p>
              </div>
              <div className="border-b-[1px] pb-[12px] border-natural-300 flex flex-col gap-[16px] mb-[16px]">
                <div className="flex items-center justify-between">
                  <p className={`${styles.paragraphSm}  text-natural-500`}>
                    Taxes
                  </p>
                  <p className={`${styles.paragraphSm}  text-natural-500`}>
                    15%
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`${styles.paragraphSm} text-natural-500`}>
                    Shipping
                  </p>
                  <p className={`${styles.paragraphSm} text-natural-500`}>
                    Free
                  </p>
                </div>
              </div>
              <div className="flex justify-between border-b-[1px] pb-[12px] border-natural-300 items-center mb-[16px]">
                <p className={`${styles.paragraphMd} ${styles.semi}`}>
                  Order Total
                </p>
                <p className={`${styles.paragraphLg} ${styles.semi}`}>
                  {" "}
                  $ {Math.floor(totalPrice * 0.015 * 100)}
                </p>
              </div>
              <button className={`${styles.button} w-full`}>Check Out</button>
            </div>
          </>
        )}
      </div>
      <div className="mb-[80px]">
        <h3 className={`${styles.header5}`}>You might like</h3>
        <div className="flex flex-wrap items-center justify-center sm:justify-between sm:flex-nowrap">
          <PopularCard limit={3} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
