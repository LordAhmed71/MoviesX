import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

import Carousel from "../Carousel/Carousel";
import SwitchTabs from "../SwitchTabs/SwitchTabs";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const MoviesSection = ({ movieData }) => {
  const { filterBy, endpoints, movieList, title } = movieData;
  const [endpoint, setEndpoint] = useState(endpoints[0]);
  const { data, loading } = useFetch(
    movieList === "trending"
      ? `/${movieList}/movie/${endpoint}`
      : `/${endpoint}/${movieList}`
  );
  const onTabChange = (tab) => {
    setEndpoint(tab === filterBy[0] ? endpoints[0] : endpoints[1]);
  };
  return (
    <div>
      <div className="carouselSection">
        <ContentWrapper>
          <span className="carouselTitle">{title}</span>
          {filterBy && (
            <SwitchTabs data={filterBy} onTabChange={onTabChange} />
          )}{" "}
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    </div>
  );
};

export default MoviesSection;
