import React from 'react'
import "./Title.scss"

function Title({title,visible,id}) {
  return (
    <div className='title' id={id}>
      <h1>{title}</h1>
      {visible && (
        <div className="horiline"></div>
      )}
    </div>
  );
}

export default Title