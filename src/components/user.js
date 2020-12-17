import React from "react";
import { useSelector } from "react-redux";
import { FaBuilding, FaLocationArrow, FaLink } from "react-icons/fa";

const User = () => {
  const { user } = useSelector((state) => state.User);
  return (
    <>
      <div className="card-name">
        <span>User</span>
      </div>
      <div className="user-card">
        <section className="user-card-top">
          <section className="user-profile-section">
            <img
              src={user.avatar_url}
              alt={`profile of ${user.name}`}
              className="profile-pic"
            />
            <section className="username-section">
              <p className="username">{user.name}</p>
              <p className="user-login">@{user.login}</p>
            </section>
          </section>
          <a href={user.html_url}>
            <button className="default-btn btn-radius">Follow</button>
          </a>
        </section>
        <p className="bio">{user.bio}</p>
        <section className="user-info">
          <section className="mb-2">
            <FaBuilding />
            <p className="company">{user.company}</p>
          </section>
          <section className="mb-2">
            <FaLocationArrow />
            <p className="location">{user.location}</p>
          </section>
          <section className="mb-2">
            <FaLink />
            <a href={user.blog}>
              <p className="link">{user.blog}</p>
            </a>
          </section>
        </section>
      </div>
    </>
  );
};

export default User;
