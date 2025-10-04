// y-websocket-server/server.js
const WebSocket = require('ws');
const http = require('http');
const setupWSConnection = require('y-websocket/bin/utils').setupWSConnection;

const port = process.env.YWS_PORT || 1234;
const server = http.createServer();

const wss = new WebSocket.Server({ server });

wss.on('connection', (conn, req) => {
  // path is used as the document name
  setupWSConnection(conn, req);
});

server.listen(port, () => {
  console.log(`y-websocket server running on ws://localhost:${port}`);
});
