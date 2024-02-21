// ExampleComponent.jsx
import React from 'react';

const ExampleComponent = (props) => {
  const { title, description } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

ExampleComponent.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
};

export default ExampleComponent;
