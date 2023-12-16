import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HeroBanner.scss";
import { useSelector } from "react-redux";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../LazyLoadImage/Img";
import useFetch from "../../Hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, isLoading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const queryHandleSubmit = (e) => {
    e.preventDefault();
    if (query.length > 0) navigate(`/search/${query}`);
  };
  return (
    <div className="heroBanner">
      {!isLoading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <form className="searchInput" onSubmit={queryHandleSubmit}>
            <input
              type="text"
              placeholder="Search for a movie or tv show.... "
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button>Search</button>
          </form>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
