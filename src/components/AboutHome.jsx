import styles from "../styles";

const AboutHome = () => {
  return (
    <div className="flex gap-[24px] mb-[96px] items-center flex-wrap sm:flex-nowrap">
      <div className="w-[676px] flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <h3 className={`${styles.header3} `}>Our History</h3>
          <p className="text-body-base-sm text-natural-500 font-body">
            The journey of Suntector.
          </p>
        </div>
        <p className={`${styles.paragraphMd}`}>
          Welcome to Suntector, where craftsmanship meets innovation. Embrace
          superior style and protection with our meticulously handcrafted
          sunglasses. Designed with precision and infused with Japanese
          artistry, each pair embodies timeless elegance and unparalleled
          quality. Elevate your look and safeguard your eyes with Suntector –
          your ultimate choice for premium eyewear.
        </p>
      </div>
      <div className="w-[403px] h-[298px] bg-cover bg-hero-about bg-top bg-no-repeat rounded-[18px]"></div>
    </div>
  );
};

export default AboutHome;
