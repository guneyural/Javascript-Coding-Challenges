import React from "react";
import { useSelector } from "react-redux";
import { FaBook, FaUsers, FaUserPlus, FaCode } from "react-icons/fa";

const NumberSection = () => {
  const { user } = useSelector((state) => state.User);

  return (
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="number-card">
          <span className="pink">
            <FaBook className="icon icon-book" />
          </span>
          <section>
            <h3>{user.public_repos}</h3>
            <p>Repos</p>
          </section>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="number-card">
          <span className="green">
            <FaUsers className="icon icon-followers" />
          </span>
          <section>
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </section>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="number-card">
          <span className="purple">
            <FaUserPlus className="icon icon-following" />
          </span>
          <section>
            <h3>{user.following}</h3>
            <p>Following</p>
          </section>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="number-card">
          <span className="yellow">
            <FaCode className="icon icon-code" />
          </span>
          <section>
            <h3>{user.public_gists}</h3>
            <p>Gists</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NumberSection;
