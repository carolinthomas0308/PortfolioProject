// server.ts
import express, { Request, Response } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

// Enable CORS for frontend
const io = new Server(server, {
  cors: {
    origin: '*', // adjust for your frontend URL if needed
    methods: ['GET', 'POST']
  }
});

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());

// Optional: simple health check route
app.get('/', (req: Request, res: Response) => {
  res.send('Socket server is running');
});

// Socket.IO connection
io.on('connection', (socket: Socket) => {
  console.log('Client connected:', socket.id);

  // Receive contact messages from frontend
  socket.on('contactMessage', (data: { name: string; email: string; message: string }) => {
    console.log('Message received:', data);

    // TODO: add email sending logic here using Nodemailer
    // Example:
    // sendEmailToStudent(data.name, data.email, data.message);

    // Broadcast to other clients (optional)
    socket.broadcast.emit('newMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Socket server listening on port ${PORT}`);
});
