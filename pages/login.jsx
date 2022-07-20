import React from 'react';
import Authentication from '../components/Authentication';

const login = () => {
  return (
    <div>
      <Authentication login={true} />
    </div>
  );
};

export default login;
