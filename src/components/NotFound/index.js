import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Oops, it looks like we can't find the page you're looking for. Go back <a href="/">home</a> </p>
      </div>
    );
  }
}

export default NotFound;
