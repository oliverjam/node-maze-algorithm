const net = require('net');

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
