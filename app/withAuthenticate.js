import AuthenticationPage from 'containers/AuthenticationPage';
import React from 'react';

export default function withAuthenticate(Component) {
  const isAuthenticated = localStorage.getItem('ACCESS_TOKEN');

  if (isAuthenticated) {
    return () => <Component />;
  }

  return () => <AuthenticationPage />;
}
