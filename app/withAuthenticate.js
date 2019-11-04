import AuthenticationPage from 'containers/AuthenticationPage';
import React from 'react';

const withAuthenticate = Wrapper => {
  const AuthenticatedComponent = props => {
    const isAuthenticate = localStorage.getItem('ACCESS_TOKEN');
    if (isAuthenticate) {
      return <Wrapper {...props} />;
    }

    return <AuthenticationPage />;
  };

  return AuthenticatedComponent;
};

export default withAuthenticate;
