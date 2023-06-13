import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import "./SinglePagePath.scss"

function SinglepagePath() {
  return (
    <div className="about-header">
      <div className="icon-path">
        <span className="path-name">
          <AiOutlineHome />
          Home
        </span>
      </div>
    </div>
  );
}

export default SinglepagePath