const socketIo = require('socket.io');

let io;

const attach = (server) => {
    io = socketIo(server);
}

const broadcastInfo = (info) => {
    if (io) {
        io.emit('info', info);
    }
}

exports.attach = attach;
exports.broadcastInfo = broadcastInfo;