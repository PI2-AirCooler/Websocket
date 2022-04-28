import express from 'express';
import socketio from 'socket.io';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const mysocket = new socketio.Server(httpServer);

mysocket.on('connection', (socket) => {
  console.log('New Connection: ' + socket.id);

  socket.on("disconnect", (reason) => {
    console.log("Disconnected: " + reason);
  });
});


httpServer.listen(3333);