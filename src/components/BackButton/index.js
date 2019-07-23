import React from 'react';
import { ReactComponent as BackArrow } from '../../svg/backButton.svg';

class BackButton extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={
            () => {
              if (window.history.length > 1) {
                window.history.back();
              } else {
                window.location.href = '/';
              }
            }
          }
          className="back-btn"
        >
          <BackArrow />
          Back
        </button>
      </>
    );
  }
}

export default BackButton;
