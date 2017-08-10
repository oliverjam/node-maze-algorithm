const net = require('net');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
  console.log('Connected');
})

http.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})

const client = new net.Socket();
client.connect(6000, '10.40.72.142', () => {
  console.log('Connected');
});

client.on('data', (data) => {
  console.log(`Received: ${data}`);
});

client.on('close', () => {
  console.log('Closed :(');
})

client.write('Hello again');
