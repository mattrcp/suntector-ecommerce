import styles from "../styles";
import { Link } from "react-router-dom";
import { PiSunglassesFill } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";

const Navigation = ({ cartCount }) => {
  return (
    <div className="bg-white">
      <div
        className={`flex items-center justify-between  ${styles.marginCenter} py-[12px]`}
      >
        <Link to="/" className="font-bold text-body-base-xs">
          S U N T E C T O R
        </Link>
        <nav className="flex flex-row sm:gap-[24px] gap-[6px] items-center">
          <Link
            to="/"
            className={`sm:px-[12px] sm:py-[8px] px-[4px] py-[2px] ${styles.navText}`}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className={`sm:px-[12px] sm:py-[8px] px-[4px] py-[2px] ${styles.navText}`}
          >
            SUNGLASSES
          </Link>
          <Link
            to="/about"
            className={`sm:px-[12px] sm:py-[8px] px-[4px] py-[2px] ${styles.navText}`}
          >
            ABOUT
          </Link>
        </nav>{" "}
        <div className="flex items-center justify-between w-auto">
          {/* <Link to="/login" className={`px-[12px] py-[8px] ${styles.navText}`}>
            LOG IN
          </Link> */}
          <div className="relative">
            <Link to="/checkout" className="relative">
              <IoCartOutline size={30} className="text-primary-700" />{" "}
              {cartCount ? (
                <div className="absolute top-[-10px] right-[-10px] bg-primary-700 w-[20px] h-[20px] flex items-center justify-center rounded-full text-[#ffff] text-body-base-xs">
                  {cartCount}
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
