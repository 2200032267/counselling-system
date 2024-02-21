// DynamicComponent.jsx
import React from 'react';

const DynamicComponent = (props) => {
  const { isAdmin } = props;

  return (
    <div>
      <h1>Welcome {isAdmin ? 'Admin' : 'User'}</h1>
      {isAdmin && <p>You have access to admin features.</p>}
    </div>
  );
};

export default DynamicComponent;
