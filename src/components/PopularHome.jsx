import { Link } from "react-router-dom";
import PopularCard from "./PopularCard";
import styles from "../styles";

const PopularHome = () => {
  return (
    <div
      className={`relative lg:w-[1160px] sm:w-full w-auto lg:px-[44px] lg:py-[24px] sm:px-[14px] sm:py-[18px] lg:left-[-44px] bg-gradient-1 rounded-[18px] mb-[80px]`}
    >
      <div className="flex flex-col lg:gap-[24px]  gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className={`${styles.header3}`}>Our Popular Styles</h3>
          <p className=" font-body text-body-base-sm text-natural-500">
            Discover the excellence of our top-selling eyewear, designed with
            Japanese precision.
          </p>
        </div>
        <div className="flex items-start justify-between align-middle sm:gap-[18px] gap-[6px] flex-wrap sm:flex-nowrap">
          <PopularCard limit={3} />
        </div>
        <Link to="/products" className="relative text-center ">
          <button className={`${styles.button} w-full sm:w-auto`}>More</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularHome;
