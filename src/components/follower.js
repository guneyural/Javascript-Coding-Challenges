import React from "react";
import { useSelector } from "react-redux";

const Follower = () => {
  const { followers, user } = useSelector((state) => state.User);

  return (
    <>
      <div className="card-name">
        <span>Followers</span>
        <div className="user-card follower-card">
          {followers.length < 1 && (
            <p className="no-follower-text">{user.login} Has No Followers.</p>
          )}
          {followers.map((follower) => {
            return (
              <section className="follower-info" key={follower.id}>
                <img
                  src={follower.avatar_url}
                  alt={`Profile of ${follower.name}`}
                  className="follower-photo"
                />
                <a href={follower.html_url} className="follower-link">
                  <section className="follower-detailed">
                    <span>{follower.login}</span>
                    <span>{follower.html_url}</span>
                  </section>
                </a>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Follower;
