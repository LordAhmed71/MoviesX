import { useState } from "react";
import ContentWrapper from "../../../Components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../Components/SwitchTabs/SwitchTabs";
import useFetch from "../../../Hooks/useFetch";
import Carousel from "../../../Components/Carousel/Carousel";

const Trending = () => {
  const filterBy = ["Day", "Week"];
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={filterBy} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
