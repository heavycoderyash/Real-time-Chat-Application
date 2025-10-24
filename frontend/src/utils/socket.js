import { io } from 'socket.io-client';

const URL = 'http://localhost:5001';

export const socket = io(URL, {
  autoConnect: false,
  auth: {
    token: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).token
      : '',
  },
});
