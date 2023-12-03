import "./HomePage.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import glovesIcon from "../assets/images/boxing-gloves.png";
import boxingBagIcon from "../assets/images/boxing.png";
import dumbellIcon from "../assets/images/weight.png";
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
    </>
  );
}

export default HomePage;
