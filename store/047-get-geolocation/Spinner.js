import React from 'react';

// !VA Here we include the loading spinner to display while we wait for the geolocation call to return. 
const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};

export default Spinner;
