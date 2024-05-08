import styles from "../styles";
import { FaPhoneAlt, FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <div className="mt-[56px] mb-[96px]">
      <div className="grids">
        <div className="grid1 bg-gradient-1 ">
          {/* <h1 className={`${styles.header2} `}>SUNTECTOR</h1>
          <p className={`sm:text-body-base-lg text-root font-body`}>
            Your Go-To for Stylish & Protective Eyewear
          </p> */}
        </div>
        <div className="grid2">{/* <img src={hero4} alt="" /> */}</div>
        <div className="grid3 bg-gradient-3 ">
          <h2 className={`${styles.header1}  mb-[12px]`}>SUNTECTOR</h2>
          <p className={`${styles.paragraphLg} `}>
            Your Go-To for Stylish & Protective Eyewear
          </p>
        </div>
        <div className="grid4">{/* <img src={hero1} alt="" /> */}</div>
        <div className="grid5">{/* <img src={hero2} alt="" /> */}</div>
        <div className="grid6 bg-primary-100">
          <Link to="/products">
            <button className={`${styles.button}`}>Shop</button>
          </Link>
        </div>
        <div className="grid7 bg-tertiary-300">
          <FaPhoneAlt size={60} className="text-primary-50" />
        </div>
        <div className="grid8 bg-gradient-2">
          <h2 className={`${styles.header4} mb-[12px]`}>UV Block</h2>
          <p className={`${styles.paragraphSm} `}>
            Sunglasses with UV+++ block provide extensive protection against UVA
            and UVB rays, safeguarding your eyes from potential damage and
            reducing the risk of eye diseases.
          </p>
        </div>
        <div className="grid9 bg-gradient-3">
          <h2 className={`${styles.header4} text-display-4 `}>
            Japanese Craft
          </h2>
          <p className={`${styles.paragraphSm} `}>
            Imbued with Japanese artistry, our sunglasses are meticulously
            handcrafted using traditional techniques. Each pair reflects the
            precision, durability, and elegance synonymous with Japanese
            craftsmanship. Experience the fusion of heritage and innovation in
            every frame.
          </p>
        </div>
        <div className="grid10 bg-secondary-400">
          <FaMap size={60} className="text-primary-50" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
