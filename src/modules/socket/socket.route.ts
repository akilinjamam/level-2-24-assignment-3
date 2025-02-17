import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Video Call Server is Running');
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', socket.id);
  });

  socket.on('offer', (data) => {
    socket.to(data.room).emit('offer', data.offer);
  });

  socket.on('answer', (data) => {
    socket.to(data.room).emit('answer', data.answer);
  });

  socket.on('ice-candidate', (data) => {
    socket.to(data.room).emit('ice-candidate', data.candidate);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

export const socketRouter = router;
