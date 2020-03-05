import React from 'react';

const TitleBar = (props) => {
  return(
    <div className="title-bar">
      <h1>{props.titleBarText}</h1>
    </div>
  )
}

export default TitleBar;
