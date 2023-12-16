import { useState } from "react";
import { MoviesData } from "../../Constants/Data";

import MoviesSection from "../MoviesSection/MoviesSection";

const MoviesList = () => {
  return (
    <>
      {MoviesData.map((movieData,i) => (
        <MoviesSection movieData={movieData} key={i} />
      ))}
    </>
  );
};

export default MoviesList;
