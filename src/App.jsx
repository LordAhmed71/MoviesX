import { useEffect } from "react";
import { fetch } from "./Utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Explore from "./Pages/Explore/Explore";
import PageNotFound from "./Pages/404/PageNotFound";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    test();
  }, []);

  const test = () => {
    fetch("/movie/popular").then((res) => dispatch(getApiConfiguration(res)));
  };

  return <div>{url?.total_pages}</div>;
};

export default App;
