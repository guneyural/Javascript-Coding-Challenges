import React, { useEffect } from "react";
import { getUser } from "../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";
import LoadingIcon from "../components/loading";
import NumberSection from "../components/numberSection";
import User from "../components/user";
import Followers from "../components/follower";
import Languages from "../components/languages";
import Popular from "../components/popular";
import StarsPerLanguage from "../components/starsPerLanguage";
import Forks from "../components/forks";
import SearchBar from "../components/searchBar";
import RateLimit from "../components/rateLimit";

const Home = () => {
  const State = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  if (State.isLoading) {
    return <LoadingIcon />;
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-8 mt-4 mb-4">
          <SearchBar dispatch={dispatch} />
        </div>
        <div
          className="col-lg-4 mt-4 mb-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <RateLimit />
        </div>
      </div>
      <NumberSection />
      <div className="row mt-4">
        <div className="col-lg-6 mt-4">
          <User />
        </div>
        <div className="col-lg-6 mt-4">
          <Followers />
        </div>
        <div className="col-lg-5 mt-4">
          <Languages />
        </div>
        <div className="col-lg-7 mt-4">
          <Popular />
        </div>
        <div className="col-lg-5 mt-4">
          <StarsPerLanguage />
        </div>
        <div className="col-lg-7 mt-4">
          <Forks />
        </div>
      </div>
    </>
  );
};

export default Home;
