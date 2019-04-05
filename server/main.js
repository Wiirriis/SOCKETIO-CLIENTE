var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io-client');
var socket = io.connect('http://localhost:4001');
var five = require("johnny-five")
var board = new five.Board ({port : "COM6"});


//JOHNNY FILE SERIALPORT//////////////////////////////////////////////////////////


board.on("ready", function() {
    var led = new five.Led(7);
    //var rele= new five.Relay(8);
  
    // This will grant access to the led instance
    // from within the REPL that's created when
    // running this program.
    this.repl.inject({
      led: led,
     // rele:rele
    });




socket.on('connect', function () {
    console.log('Connected');
});

socket.on('changes', function (x) {
    console.log(x.value);
    if (x.value == 1) {
        led.on();
    } else {
        led.off();
    }
});
});

server.listen(4002, function () {
    console.log('Servidor corriendo en http://localhost:4002');
});






