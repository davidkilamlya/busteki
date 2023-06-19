import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./SinglePagePath.scss";
import { Link } from "react-router-dom";

function SinglepagePath() {
  return (
    <div className="about-header">
      <Link to={"/"}>
        <div className="icon-path">
          <span className="path-name">
            <AiOutlineHome />
            Home
          </span>
        </div>
      </Link>
    </div>
  );
}

export default SinglepagePath;
