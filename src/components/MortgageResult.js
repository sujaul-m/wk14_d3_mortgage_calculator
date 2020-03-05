import React from 'react';

const MortgageResult = (props) => {
  if (props.mortgageAwarded !== 0) {
    return(
      <div>
        <p>The maximum you can spend on a house is £{props.mortgageAwarded}</p>
      </div>
    )
  } else {
    return null;
  }
}

export default MortgageResult;
