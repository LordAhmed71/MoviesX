import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDateYears } from "../../Utils/helpers.js";
import useFetch from "../../Hooks/useFetch.jsx";

import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import Genres from "./../Genres/Genres";
import Img from "../LazyLoadImage/Img.jsx";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "./../CircleRating/CircleRating";

import "./DetailsBanner.scss";
import { PlayIcon } from "../PlayButton/PlayButton.jsx";
import People from "../People/People.jsx";
import Status from "../Status/Status.jsx";
import VideoPopup from "../VideoPopup/VideoPopup.jsx";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((c) => c.job === "Director");
  const writer = crew?.filter(
    (c) => c.job === "Screenplay" || c.job === "Story" || c.job === "Writer"
  );
  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img className="posterImg" src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.name || data.title} (${formatDateYears(
                        data.release_date
                      )})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>
                    <Genres data={genres} />
                    <div className="row">
                      <CircleRating rating={data?.vote_average?.toFixed(1)} />
                      <div
                        className="playBtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon />
                        <div className="text">Watch Trailer</div>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data.overview}</div>
                    </div>
                    <div className="info">
                      <Status
                        status={data.status}
                        name="Status"
                        formatType="noFormat"
                      />
                      <Status
                        status={data.release_date}
                        name="Release Date"
                        formatType="formatDate"
                      />
                      <Status
                        status={data.runtime}
                        name="Runtime"
                        formatType="getHoursAndMinutes"
                      />
                    </div>
                    <People job="Director" persons={director} />
                    <People job="Writer" persons={writer} />
                    <People job="Creator" persons={data.created_by} />
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
