import React from "react";
import { useDispatch } from "react-redux";
import { removeHit } from "./redux/actions/hitActions";

const Card = (props) => {
  const { title, url, objectID, author, points, num_comments } = props;
  const dispatch = useDispatch();

  return (
    <div className="hit-card">
      <p className="hit-title">{title}</p>
      <p className="hit-info">{`${points} by ${author} | ${num_comments} comments`}</p>
      <a href={url} className="read-more">
        Read More
      </a>
      <span
        className="text-danger delete-btn"
        onClick={() => dispatch(removeHit(objectID))}
      >
        Delete
      </span>
    </div>
  );
};

export default Card;
