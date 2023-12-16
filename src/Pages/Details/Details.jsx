import "./Details.scss";
import DetailsBanner from "./../../Components/DetailsBanner/DetailsBanner";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  );
};

export default Details;
