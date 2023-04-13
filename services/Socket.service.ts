import SocketIO from 'socket.io-client'

export default SocketIO(process.env.SOCKET_URL ?? '', {
    transports: ['websocket']
})