// Simple Mempool Listener

const WebSocket = require('ws');

const ws = new WebSocket('wss://api.example.com/mempool'); // Change with actual mempool API URL

ws.on('open', function open() {
    console.log('Connected to mempool.');
});

ws.on('message', function incoming(data) {
    console.log('Pending transaction:', data);
});

ws.on('error', function error(err) {
    console.error('Error:', err);
});

ws.on('close', function close() {
    console.log('Disconnected from mempool.');
});
