import React from 'react'
import "./Title.scss"

function Title({title,visible}) {
  return (
    <div className='title'>
      <h2>{title}</h2>
      {visible && (
        <div className="horiline"></div>
      )}
    </div>
  );
}

export default Title