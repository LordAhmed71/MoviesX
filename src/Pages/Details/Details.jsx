import "./Details.scss";
import DetailsBanner from "./../../Components/DetailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Cast from "../../Components/Cast/Cast";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log(credits)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
    </div>
  );
};

export default Details;
