const net = require('net');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const client = new net.Socket();
client.connect(6000, '10.40.72.142');

client.on('data', (data) => {
  const msg = data.toString().replace('ECHO: ', '');
  console.log(`Joel message: ${msg}`);
  io.emit('message', msg);
});

client.on('close', () => {
  console.log('Closed :(');
});

io.on('connection', (socket) => {
  console.log('Connected');
  socket.on('message', (msg) => {
    console.log(`Client message: ${msg}`);
    client.write(`${msg}\n`);
  })
  socket.on('disconnect', () => {
    console.log('Disconnected');
  })
})

http.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})
