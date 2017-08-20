const net = require('net');
const app = require('express')();
const http = require('http').Server(app);

const navigate = require('./navigate');

const HOST = '10.40.72.109';
const PORT = 6000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

client.on('data', data => {
  const msg = data.toString();
  console.log(`Joel message: ${msg}`);
  client.write(navigate(data.toString()) + '\n');
  io.emit('message', msg);
});

client.on('close', () => {
  console.log('Closed :(');
});

http.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
