const express = require('express');
const http = require('http');

const cpuInfo = require('./utils/cpuInfo');
const socketServer = require('./utils/socket');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('template', { title: 'Dashboard - Lizard Monitor' });
});

app.get('/favicon.ico', (req, res) => {
	res.setHeader('Content-Type', 'image/png');
	res.sendFile(__dirname + '/assets/favicon.ico');
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, '0.0.0.0', () => console.log('Server listening at port ' + PORT));
socketServer.attach(httpServer);

cpuInfo.broadcast(5000, (data) => {
    socketServer.broadcastInfo(data);
});