import React from "react";
import { useGlobalContext } from "./context";

function Stories() {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div>
      <div className="stories">
        {hits.map((story) => {
          const { objectID, title, num_comments, url, points, author } = story;
          return (
            <article className="story" key={objectID}>
              <h4 className="title">{title}</h4>
              <p className="info">
                {points} points by <span>{author} |</span> {num_comments}{" "}
                comments
              </p>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button className="remove-btn">remove</button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Stories;
