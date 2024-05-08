import { aboutHero } from "../assets";
import styles from "../styles";

const About = () => {
  return (
    <div className={`${styles.marginCenter} mb-[44px]`}>
      <div className="mt-[68px] mb-[76px] h-[311px] ">
        <img
          src={aboutHero}
          alt=""
          className="rounded-[16px] w-full h-full object-cover"
        />
      </div>
      <div className="mb-[88px]">
        <div className="flex items-center justify-between gap-[32px] flex-wrap sm:flex-nowrap">
          <div>
            <p className={`${styles.paragraphSm} text-natural-500 mb-[8px]`}>
              HOW IT STARTED
            </p>
            <h2 className={`${styles.header2} mb-[24px]`}>Our Story</h2>
            <p className={`${styles.paragraphMd} `}>
              At Suntector, our journey began with a vision to redefine the
              world of eyewear. Founded by a team of passionate individuals, we
              set out to marry traditional craftsmanship with modern innovation,
              creating sunglasses that not only elevate style but also
              prioritize protection and quality.
            </p>
          </div>
          <div className="bg-gradient-2 sm:px-[44px] sm:py-[44px] px-[14px] py-[18px] rounded-[18px]">
            <h6
              className={`${styles.paragraphLg} ${styles.bold} text-header mb-[18px]`}
            >
              Our Vision & Mission
            </h6>
            <p className={`${styles.paragraphMd}`}>
              Empowering self-expression and protecting vision worldwide,
              Suntector crafts premium eyewear with timeless elegance and
              cutting-edge technology. We blend uncompromising craftsmanship,
              innovation, and sustainability to inspire confidence and enrich
              lives.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className={`${styles.paragraphSm} text-natural-500 mb-[8px]`}>
            WE FOCUSED ON
          </p>
          <h2 className={`${styles.header2} mb-[24px]`}>Our Values</h2>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          <div className="flex gap-[18px] md:md:flex-row flex-col ">
            <div className="bg-gradient-2 sm:px-[44px] sm:py-[44px] px-[14px] py-[18px] rounded-[18px]">
              <h6
                className={`${styles.paragraphLg} ${styles.bold} text-header mb-[18px]`}
              >
                Craftsmanship Excellence
              </h6>
              <p className={`${styles.paragraphMd}`}>
                Our commitment to excellence is reflected in every pair of
                sunglasses we produce. With a dedication to precision and
                attention to detail, our artisans handcraft each frame using
                traditional Japanese techniques. From selecting the finest
                materials to meticulously shaping and assembling every
                component, we ensure that each pair meets the highest standards
                of craftsmanship.
              </p>
            </div>
            <div className="bg-gradient-2 sm:px-[44px] sm:py-[44px] px-[14px] py-[18px] rounded-[18px]">
              <h6
                className={`${styles.paragraphLg} ${styles.bold} text-header mb-[18px]`}
              >
                Innovation and Technology
              </h6>
              <p className={`${styles.paragraphMd}`}>
                Driven by innovation, we continuously seek to push boundaries
                and set new industry standards. By integrating cutting-edge
                technology and advanced materials, we develop sunglasses that
                offer unparalleled comfort, clarity, and protection. From UV+++
                blocking lenses to blue light filtration, we prioritize the
                health and well-being of your eyes without compromising on
                style.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-[18px]">
            <div className="flex gap-[18px] md:flex-row flex-col">
              <div className="bg-gradient-2 sm:px-[44px] sm:py-[44px] px-[14px] py-[18px] rounded-[18px]">
                <h6
                  className={`${styles.paragraphLg} ${styles.bold} text-header mb-[18px]`}
                >
                  Community and Collaboration
                </h6>
                <p className={`${styles.paragraphMd}`}>
                  We believe in the power of community and collaboration. By
                  fostering partnerships with like-minded individuals and
                  organizations, we aim to create positive change and make a
                  meaningful impact. Through initiatives such as charitable
                  partnerships and community outreach programs, we strive to
                  give back and support causes that align with our values.
                </p>
              </div>
              <div className="bg-gradient-2 sm:px-[44px] sm:py-[44px] px-[14px] py-[18px] rounded-[18px]">
                <h6
                  className={`${styles.paragraphLg} ${styles.bold} text-header mb-[18px]`}
                >
                  Customer Experience
                </h6>
                <p className={`${styles.paragraphMd}`}>
                  At the heart of our brand is a commitment to providing
                  exceptional customer experiences. From personalized styling
                  advice to seamless online shopping and dedicated after-sales
                  support, we prioritize the satisfaction and happiness of our
                  customers at every touchpoint. Our goal is to create lasting
                  relationships built on trust, integrity, and mutual respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
