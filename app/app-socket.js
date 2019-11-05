import io from 'socket.io-client';

const socket = io(
  process.env.SOCKET_SERVER ? process.env.SOCKET_SERVER : 'http://localhost:69',
);

export default socket;
