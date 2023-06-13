import React from "react";
import "./LinkList.scss";

function LinkList({ headTitle, linkName }) {
  return (
    <div className="link-list">
     
      <div className="linkName">
        {linkName.map((item, index) => {
          return (
            <div className="link-container">
              <a href={item.href} key={index} className="linkName-list">
                {item.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinkList;
