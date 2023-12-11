import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Store/homeSlice";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Explore from "./Pages/Explore/Explore";
import PageNotFound from "./Pages/404/PageNotFound";
import { fetchDataFromApi } from "./utils/api";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfigurations();
  }, []);

  const fetchApiConfigurations = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
