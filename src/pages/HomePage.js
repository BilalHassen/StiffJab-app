import "./HomePage.scss";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import heroImage from "../assets/images/imgbin_mike-tyson-boxing-png.png";
function HomePage() {
  return (
    <>
      <div className="page__container">
        <Header />
        <Hero heroImage={heroImage} />
      </div>
    </>
  );
}

export default HomePage;
