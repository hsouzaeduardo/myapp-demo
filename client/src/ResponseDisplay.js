import React from 'react';

function ResponseDisplay({ response }) {
  // Render only if there is a response
  return (
    response ? (
      <div>
        <h2>Search results:</h2>
        <p>{response}</p>
      </div>
    ) : null  // Render nothing if there's no response
  );
}

export default ResponseDisplay;
