// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';  // Corrected import path

// Change the name here to avoid conflict
const ParentComponent = () => {
  const data = "Hello from Parent!";
  return <ChildComponent message={data} />;
};

export default ParentComponent;
