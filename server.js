const express = require('express');
const http = require('http');

const cpuInfo = require('./src/utils/cpuInfo');
const socketServer = require('./src/utils/socket');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('template', { title: 'Dashboard - Lizard Monitor' });
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, '0.0.0.0', () => console.log('Server listening at port ' + PORT));
socketServer.attach(httpServer);

cpuInfo.broadcast(5000, (data) => {
    socketServer.broadcastInfo(data);
});