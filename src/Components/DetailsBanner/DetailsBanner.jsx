import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDateYears, getHoursAndMinutes } from "../../Utils/helpers.js";
import useFetch from "../../Hooks/useFetch.jsx";

import ContentWrapper from "../ContentWrapper/ContentWrapper.jsx";
import Genres from "./../Genres/Genres";
import Img from "../LazyLoadImage/Img.jsx";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "./../CircleRating/CircleRating";

import "./DetailsBanner.scss";
import { PlayIcon } from "../PlayButton/PlayButton.jsx";

const DetailsBanner = ({ video, crew }) => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const genres = data?.genres?.map((g) => g.id);
  console.log(data);

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
                      <div className="playBtn">
                        <PlayIcon />
                        <div className="text">Watch Trailer</div>
                      </div>
                    </div>
                  </div>
                </div>
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
