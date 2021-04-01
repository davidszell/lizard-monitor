const socketIo = require('socket.io');

let io;

const attach = (server) => {
    io = socketIo(server);
}

const broadcastInfo = (type, data) => {
    if (io) {
        io.emit(type, data);
    }
}

exports.attach = attach;
exports.broadcastInfo = broadcastInfo;