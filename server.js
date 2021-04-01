const express = require('express');
var RateLimit = require('express-rate-limit');
const http = require('http');

const cpuInfo = require('./utils/cpuInfo');
const memoryInfo = require('./utils/memoryInfo');
const socketServer = require('./utils/socket');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

var limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});

app.use(limiter);
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
  socketServer.broadcastInfo('cpuInfo', data);
});

memoryInfo.broadcast(5000, (data) => {
  socketServer.broadcastInfo('memoryInfo', data);
});