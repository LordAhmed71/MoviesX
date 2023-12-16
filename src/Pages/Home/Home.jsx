import HeroBanner from "./HeroBanner/HeroBanner";
import MoviesList from "../../Components/MoviesList/MoviesList";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <MoviesList />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
