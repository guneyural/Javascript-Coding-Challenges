import React from "react";
import moment from "moment";

const Article = (props) => {
  const { date, id, length, snippet, title } = props;
  return (
    <div className="article-card">
      <h3 className="article-header">{title}</h3>
      <section className="article-info">
        <span>{moment(date).format("dddd Do, YYYY")}</span>
        <span>{length} min read</span>
      </section>
      <p className="snippet">{snippet}</p>
    </div>
  );
};

export default Article;
