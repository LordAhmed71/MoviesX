import HeroBanner from "./HeroBanner/HeroBanner";
import Header from "../../Components/Header/Header";
import Trending from "./Trending/Trending";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <Trending />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
