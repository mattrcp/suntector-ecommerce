import styles from "../styles";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bottom-0 bg-white">
      <div
        className={`${styles.marginCenter} py-[24px] bg-white flex justify-between flex-wrap sm:gap-4 lg:flex-nowrap`}
      >
        <div className="sm:w-screen lg:w-[608px] w-auto bg-gradient-1 sm:px-[40px] px-[22px] lg:py-[24px] py-[18px] lg:rounded-[18px] rounded-[8px] gap-[12px] flex flex-col mb-[32px] lg:mb-0">
          <h4 className={`${styles.header5}`}>Get 15% limited discounts</h4>
          <div className="flex justify-between align-middle gap-[8px]">
            <input
              type="text"
              placeholder="john.doe@email.com"
              className="w-full rounded-[6px] px-[27px] sm:py-[13px] "
            />
            <button className={`${styles.button}`}>Submit</button>
          </div>
        </div>
        <div className="w-screen lg:w-auto">
          <div className="font-bold font-body mb-[24px]">S U N T E C T O R</div>
          <div className="flex gap-[44px]">
            <nav className="flex flex-col gap-[8px]">
              <Link to="/" className={`${styles.footerText}`}>
                Home
              </Link>
              <Link to="/products" className={`${styles.footerText}`}>
                Sunglasses
              </Link>
              <Link to="/about" className={`${styles.footerText}`}>
                About
              </Link>
            </nav>
            <div>
              <div className={`font-body text-body-base-xs font-bold mb-[8px]`}>
                Contact Us
              </div>
              <p className={`${styles.paragraphXs}`}>
                North York, Toronto, Ontario, Canada
              </p>
              <p className={`${styles.paragraphXs}`}>+666-555-4786</p>
            </div>
            <div className="flex flex-col justify-between">
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
