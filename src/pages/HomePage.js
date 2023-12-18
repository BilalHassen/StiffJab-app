import "./HomePage.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import glovesIcon from "../assets/images/boxing-gloves.png";
import boxingBagIcon from "../assets/images/boxing.png";
import dumbellIcon from "../assets/images/weight.png";
import Main from "../components/Main/Main";
import boxingFundamentals from "../assets/images/boxing-fundamentals.jpg";
import boxingSparring from "../assets/images/sparring.jpg";
import boxingBag from "../assets/images/boxing-bag.jpg";
import Footer from "../components/Footer/Footer";
import About from "../components/AboutComponent/About";
function HomePage() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Hero
          glovesIcon={glovesIcon}
          boxingBag={boxingBagIcon}
          dumbellIcon={dumbellIcon}
        />
      </div>
      <Main
        boxingFundamentals={boxingFundamentals}
        boxingSparring={boxingSparring}
        boxingBag={boxingBag}
      />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;
