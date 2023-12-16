export const MoviesData = [
  {
    movieList: "trending",
    title: "Trending",
    filterBy: ["Day", "Week"],
    endpoints: ["day", "week"],
  },
  {
    movieList: "popular",
    title: "Popular",
    filterBy: ["Movies", "TV Shows"],
    endpoints: ["movie", "tv"],
  },
  {
    movieList: "top_rated",
    title: "Top Rated",
    filterBy: ["Movies", "TV Shows"],
    endpoints: ["movie", "tv"],
  },
  {
    movieList: "upcoming",
    title: "Upcoming Movies",
    // filterBy: ["Movies"],
    endpoints: ["movie"],
  },
];
