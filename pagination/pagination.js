import React, { useState, useEffect } from "react";
import Axios from "axios";
import Paginate from "./paginate";

const Pagination = () => {
  const BASE_URL =
    "https://api.github.com/users/john-smilga/followers?per_page=100";
  const [followers, setFollowers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [followersPerPage, setFollowersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    Axios.get(BASE_URL)
      .then((resp) => resp.data)
      .then((data) => {
        setFollowers(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const lastFollowerIndex = currentPage * followersPerPage;
  const firstFollowerIndex = lastFollowerIndex - followersPerPage;
  const currentFollowers = followers.slice(
    firstFollowerIndex,
    lastFollowerIndex
  );

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container container-pagination">
      <h1 className="page-header">Pagination</h1>
      <div className="page-header-bottom"></div>
      <div className="row">
        {currentFollowers.map((item) => {
          return (
            <div className="col-lg-3 col-md-6" key={item.node_id}>
              <section className="user-card">
                <img
                  src={item.avatar_url}
                  alt={`profile pic of ${item.login}`}
                  className="profile-picture"
                />
                <p className="username">{item.login}</p>
                <a href={item.html_url} className="profile-btn">
                  View Profile
                </a>
              </section>
            </div>
          );
        })}
      </div>
      <Paginate
        followers={followers}
        followersPerPage={followersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
