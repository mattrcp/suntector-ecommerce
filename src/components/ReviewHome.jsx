import styles from "../styles";
import { reviews } from "../constant/index";
import { FaStar } from "react-icons/fa";

const ReviewHome = () => {
  return (
    <div className="flex flex-col gap-[32px] mb-[80px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className={`${styles.header3}`}>Our Reviews</h3>
          <p className="font-body text-natural-500 text-body-base-sm">
            Heard from our royal customers.
          </p>
        </div>

        <div className="flex flex-row justify-between align-middle gap-[12px] w-full flex-wrap sm:flex-nowrap">
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" px-[14px] py-[22px] bg-white rounded-[18px] w-full"
            >
              <div className="lg:w-[310px] flex flex-col gap-[12px]">
                <div className="flex flex-row gap-[24px] items-center ">
                  <div className="rounded-full h-[44px] w-[44px] overflow-hidden">
                    <img
                      src={review.image}
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className={`${styles.paragraphSm} ${styles.bold}`}>
                      {review.name}
                    </p>
                    <div className="flex justify-between align-middle gap-[6px]">
                      <FaStar className="text-[#F4CE36]" />
                      <FaStar className="text-[#F4CE36]" />
                      <FaStar className="text-[#F4CE36]" />
                      <FaStar className="text-[#F4CE36]" />
                      <FaStar className="text-[#F4CE36]" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className={`${styles.paragraphXs}`}>
                    {review.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between align-middle gap-[8px] flex-wrap sm:flex-nowrap items-center">
        <div className="px-[16px] py-[38px] bg-gradient-2 sm:rounded-[18px] rounded-[14px] flex items-center justify-center lg:w-[352px] w-full mb-[8px] text-center">
          <h5 className={`${styles.header5} `}>
            1 Years warranty on the glasses
          </h5>
        </div>
        <div className="px-[16px] py-[38px] bg-gradient-2 sm:rounded-[18px] rounded-[14px] flex items-center justify-center lg:w-[352px] w-full mb-[8px] text-center">
          <h5 className={`${styles.header5} `}>Ready within 10 minutes</h5>
        </div>
        <div className="px-[16px] py-[38px] bg-gradient-2 sm:rounded-[18px] rounded-[14px] flex items-center justify-center lg:w-[352px] w-full mb-[8px] text-center">
          <h5 className={`${styles.header5} `}>
            Designed with Japan technology
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
