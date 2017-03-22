const net = require('net');
const port = process.env.PORT;

const server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write(data);
  });
});

server.listen(port);


