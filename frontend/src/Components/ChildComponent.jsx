import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>Child Component</p>
      <p>Received message: {props.message}</p>
    </div>
  );
};

export default ChildComponent;
