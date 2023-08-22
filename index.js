const WebSocket = require('ws');

const socketUrl = 'wss://stream.binance.com:9443/ws/!ticker@arr';

const ws = new WebSocket(socketUrl);

ws.on('message', (data) => {

    console.log('WebSocket connection opened');

    try {
        const coinData = JSON.parse(data);

        coinData.forEach(data => {
            const coin = {
                symbol: data.s.replace('USDT', ''),
                price: data.c,
                date: new Date()
            }
            console.log(coin)
        });
    } catch (error) {
        console.error('Error processing message:', error);
    }
});

ws.on('error', (error) => {
    console.error('WebSocket error', error);
});


ws.on('close', () => {
    console.log('WebSocket connection closed');
});