const express = require('express')
const router = express.Router()
//use for router
let socket

module.exports = (io) => {
  socket = io
  /* socket communication */
  io.on('connection', function (_socket) {
    console.log('client connected via socket')

    //connection test
    // setInterval(function(){
    //   _socket.emit('pingpong', {msg: 'ping'})
    // }, 2000)
    
    //touch move event from mobile device
    _socket.on('touchmove', function(msg){
      //broadcast data for TD
      _socket.broadcast.emit('pingpong', msg)
    })

    

    _socket.on('disconnect', function () {
      console.log('client disconnected')
    })
  })
  return router
}
