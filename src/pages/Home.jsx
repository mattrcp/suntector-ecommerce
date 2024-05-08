import HeroHome from "../components/HeroHome";
import styles from "../styles";
import AboutHome from "../components/AboutHome";
import PopularHome from "../components/PopularHome";
import ReviewHome from "../components/ReviewHome";

const Home = () => {
  return (
    <div>
      <main className={`${styles.marginCenter}`}>
        <HeroHome />
        <AboutHome />
        <PopularHome />
        <ReviewHome />
      </main>
    </div>
  );
};

export default Home;
