#!/usr/bin/env node
/**
 * Module dependencies.
 */"use strict";var app=require("../app"),debug=require("debug")("fish-project:server"),http=require("http"),port=normalizePort(process.env.PORT||"3000");app.set("port",port);/**
  * Create HTTP server.
  */var server=http.createServer(app);/**
  * Listen on provided port, on all network interfaces.
  */server.listen(port),server.on("error",onError),server.on("listening",onListening);/**
  * Normalize a port into a number, string, or false.
  */function normalizePort(a){var b=parseInt(a,10);return isNaN(b)?a:!!(0<=b)&&b}/**
  * Event listener for HTTP server "error" event.
  */function onError(a){if("listen"!==a.syscall)throw a;var b="string"==typeof port?"Pipe "+port:"Port "+port;// handle specific listen errors with friendly messages
switch(a.code){case"EACCES":console.error(b+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(b+" is already in use"),process.exit(1);break;default:throw a;}}/**
  * Event listener for HTTP server "listening" event.
  */function onListening(){var a=server.address(),b="string"==typeof a?"pipe "+a:"port "+a.port;debug("Listening on "+b)}