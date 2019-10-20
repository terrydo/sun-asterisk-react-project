export default function withAuthenticate(Component) {
  const isAuthenticated = localStorage.getItem('ACCESS_TOKEN');

  if (isAuthenticated) {
    return Component;
  }

  return props => {
    return props.history.push('/login');
  };
}
