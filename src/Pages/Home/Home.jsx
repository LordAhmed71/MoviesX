import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import MoviesList from "../../Components/MoviesList/MoviesList";

import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <MoviesList />
    </div>
  );
};

export default Home;
