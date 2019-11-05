import React from 'react';
import SocketContext from './socket-context';

const withSocket = Wrapper => {
  const WithSocketComponent = props => (
    <SocketContext.Consumer>
      {socket => <Wrapper {...props} socket={socket} />}
    </SocketContext.Consumer>
  );

  return WithSocketComponent;
};

export default withSocket;
