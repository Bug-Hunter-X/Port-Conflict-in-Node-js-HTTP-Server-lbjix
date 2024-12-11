const http = require('http');
const port = 8080;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

const checkPortAvailability = (port, callback) => {
  const server = http.createServer();
  server.once('error', err => {
    if (err.code === 'EADDRINUSE') {
      callback(false);
    } else {
      callback(true);
    }
  });
  server.once('listening', () => {
    server.close();
    callback(true);
  });
  server.listen(port);
}

checkPortAvailability(port, (isAvailable) => {
  if (isAvailable) {
    startServer()
  } else {
    console.error(`Port ${port} is already in use. Please choose another port.`);
  }
});