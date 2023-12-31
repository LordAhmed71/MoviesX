import "./Details.scss";
import DetailsBanner from "./../../Components/DetailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Cast from "../../Components/Cast/Cast";
import VideosSection from "../../Components/VideosSection/VideosSection";
import Similar from "../../Components/Similar/Similar";
import Recommendation from "../../Components/Recommendations/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
