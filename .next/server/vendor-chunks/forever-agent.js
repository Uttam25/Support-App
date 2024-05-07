/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/forever-agent";
exports.ids = ["vendor-chunks/forever-agent"];
exports.modules = {

/***/ "(ssr)/./node_modules/forever-agent/index.js":
/*!*********************************************!*\
  !*** ./node_modules/forever-agent/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = ForeverAgent\nForeverAgent.SSL = ForeverAgentSSL\n\nvar util = __webpack_require__(/*! util */ \"util\")\n  , Agent = (__webpack_require__(/*! http */ \"http\").Agent)\n  , net = __webpack_require__(/*! net */ \"net\")\n  , tls = __webpack_require__(/*! tls */ \"tls\")\n  , AgentSSL = (__webpack_require__(/*! https */ \"https\").Agent)\n  \nfunction getConnectionName(host, port) {  \n  var name = ''\n  if (typeof host === 'string') {\n    name = host + ':' + port\n  } else {\n    // For node.js v012.0 and iojs-v1.5.1, host is an object. And any existing localAddress is part of the connection name.\n    name = host.host + ':' + host.port + ':' + (host.localAddress ? (host.localAddress + ':') : ':')\n  }\n  return name\n}    \n\nfunction ForeverAgent(options) {\n  var self = this\n  self.options = options || {}\n  self.requests = {}\n  self.sockets = {}\n  self.freeSockets = {}\n  self.maxSockets = self.options.maxSockets || Agent.defaultMaxSockets\n  self.minSockets = self.options.minSockets || ForeverAgent.defaultMinSockets\n  self.on('free', function(socket, host, port) {\n    var name = getConnectionName(host, port)\n\n    if (self.requests[name] && self.requests[name].length) {\n      self.requests[name].shift().onSocket(socket)\n    } else if (self.sockets[name].length < self.minSockets) {\n      if (!self.freeSockets[name]) self.freeSockets[name] = []\n      self.freeSockets[name].push(socket)\n      \n      // if an error happens while we don't use the socket anyway, meh, throw the socket away\n      var onIdleError = function() {\n        socket.destroy()\n      }\n      socket._onIdleError = onIdleError\n      socket.on('error', onIdleError)\n    } else {\n      // If there are no pending requests just destroy the\n      // socket and it will get removed from the pool. This\n      // gets us out of timeout issues and allows us to\n      // default to Connection:keep-alive.\n      socket.destroy()\n    }\n  })\n\n}\nutil.inherits(ForeverAgent, Agent)\n\nForeverAgent.defaultMinSockets = 5\n\n\nForeverAgent.prototype.createConnection = net.createConnection\nForeverAgent.prototype.addRequestNoreuse = Agent.prototype.addRequest\nForeverAgent.prototype.addRequest = function(req, host, port) {\n  var name = getConnectionName(host, port)\n  \n  if (typeof host !== 'string') {\n    var options = host\n    port = options.port\n    host = options.host\n  }\n\n  if (this.freeSockets[name] && this.freeSockets[name].length > 0 && !req.useChunkedEncodingByDefault) {\n    var idleSocket = this.freeSockets[name].pop()\n    idleSocket.removeListener('error', idleSocket._onIdleError)\n    delete idleSocket._onIdleError\n    req._reusedSocket = true\n    req.onSocket(idleSocket)\n  } else {\n    this.addRequestNoreuse(req, host, port)\n  }\n}\n\nForeverAgent.prototype.removeSocket = function(s, name, host, port) {\n  if (this.sockets[name]) {\n    var index = this.sockets[name].indexOf(s)\n    if (index !== -1) {\n      this.sockets[name].splice(index, 1)\n    }\n  } else if (this.sockets[name] && this.sockets[name].length === 0) {\n    // don't leak\n    delete this.sockets[name]\n    delete this.requests[name]\n  }\n  \n  if (this.freeSockets[name]) {\n    var index = this.freeSockets[name].indexOf(s)\n    if (index !== -1) {\n      this.freeSockets[name].splice(index, 1)\n      if (this.freeSockets[name].length === 0) {\n        delete this.freeSockets[name]\n      }\n    }\n  }\n\n  if (this.requests[name] && this.requests[name].length) {\n    // If we have pending requests and a socket gets closed a new one\n    // needs to be created to take over in the pool for the one that closed.\n    this.createSocket(name, host, port).emit('free')\n  }\n}\n\nfunction ForeverAgentSSL (options) {\n  ForeverAgent.call(this, options)\n}\nutil.inherits(ForeverAgentSSL, ForeverAgent)\n\nForeverAgentSSL.prototype.createConnection = createConnectionSSL\nForeverAgentSSL.prototype.addRequestNoreuse = AgentSSL.prototype.addRequest\n\nfunction createConnectionSSL (port, host, options) {\n  if (typeof port === 'object') {\n    options = port;\n  } else if (typeof host === 'object') {\n    options = host;\n  } else if (typeof options === 'object') {\n    options = options;\n  } else {\n    options = {};\n  }\n\n  if (typeof port === 'number') {\n    options.port = port;\n  }\n\n  if (typeof host === 'string') {\n    options.host = host;\n  }\n\n  return tls.connect(options);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZm9yZXZlci1hZ2VudC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBLFdBQVcsbUJBQU8sQ0FBQyxrQkFBTTtBQUN6QixZQUFZLCtDQUFxQjtBQUNqQyxVQUFVLG1CQUFPLENBQUMsZ0JBQUs7QUFDdkIsVUFBVSxtQkFBTyxDQUFDLGdCQUFLO0FBQ3ZCLGVBQWUsaURBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvZm9yZXZlci1hZ2VudC9pbmRleC5qcz80YTc4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gRm9yZXZlckFnZW50XG5Gb3JldmVyQWdlbnQuU1NMID0gRm9yZXZlckFnZW50U1NMXG5cbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpXG4gICwgQWdlbnQgPSByZXF1aXJlKCdodHRwJykuQWdlbnRcbiAgLCBuZXQgPSByZXF1aXJlKCduZXQnKVxuICAsIHRscyA9IHJlcXVpcmUoJ3RscycpXG4gICwgQWdlbnRTU0wgPSByZXF1aXJlKCdodHRwcycpLkFnZW50XG4gIFxuZnVuY3Rpb24gZ2V0Q29ubmVjdGlvbk5hbWUoaG9zdCwgcG9ydCkgeyAgXG4gIHZhciBuYW1lID0gJydcbiAgaWYgKHR5cGVvZiBob3N0ID09PSAnc3RyaW5nJykge1xuICAgIG5hbWUgPSBob3N0ICsgJzonICsgcG9ydFxuICB9IGVsc2Uge1xuICAgIC8vIEZvciBub2RlLmpzIHYwMTIuMCBhbmQgaW9qcy12MS41LjEsIGhvc3QgaXMgYW4gb2JqZWN0LiBBbmQgYW55IGV4aXN0aW5nIGxvY2FsQWRkcmVzcyBpcyBwYXJ0IG9mIHRoZSBjb25uZWN0aW9uIG5hbWUuXG4gICAgbmFtZSA9IGhvc3QuaG9zdCArICc6JyArIGhvc3QucG9ydCArICc6JyArIChob3N0LmxvY2FsQWRkcmVzcyA/IChob3N0LmxvY2FsQWRkcmVzcyArICc6JykgOiAnOicpXG4gIH1cbiAgcmV0dXJuIG5hbWVcbn0gICAgXG5cbmZ1bmN0aW9uIEZvcmV2ZXJBZ2VudChvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHNlbGYucmVxdWVzdHMgPSB7fVxuICBzZWxmLnNvY2tldHMgPSB7fVxuICBzZWxmLmZyZWVTb2NrZXRzID0ge31cbiAgc2VsZi5tYXhTb2NrZXRzID0gc2VsZi5vcHRpb25zLm1heFNvY2tldHMgfHwgQWdlbnQuZGVmYXVsdE1heFNvY2tldHNcbiAgc2VsZi5taW5Tb2NrZXRzID0gc2VsZi5vcHRpb25zLm1pblNvY2tldHMgfHwgRm9yZXZlckFnZW50LmRlZmF1bHRNaW5Tb2NrZXRzXG4gIHNlbGYub24oJ2ZyZWUnLCBmdW5jdGlvbihzb2NrZXQsIGhvc3QsIHBvcnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbm5lY3Rpb25OYW1lKGhvc3QsIHBvcnQpXG5cbiAgICBpZiAoc2VsZi5yZXF1ZXN0c1tuYW1lXSAmJiBzZWxmLnJlcXVlc3RzW25hbWVdLmxlbmd0aCkge1xuICAgICAgc2VsZi5yZXF1ZXN0c1tuYW1lXS5zaGlmdCgpLm9uU29ja2V0KHNvY2tldClcbiAgICB9IGVsc2UgaWYgKHNlbGYuc29ja2V0c1tuYW1lXS5sZW5ndGggPCBzZWxmLm1pblNvY2tldHMpIHtcbiAgICAgIGlmICghc2VsZi5mcmVlU29ja2V0c1tuYW1lXSkgc2VsZi5mcmVlU29ja2V0c1tuYW1lXSA9IFtdXG4gICAgICBzZWxmLmZyZWVTb2NrZXRzW25hbWVdLnB1c2goc29ja2V0KVxuICAgICAgXG4gICAgICAvLyBpZiBhbiBlcnJvciBoYXBwZW5zIHdoaWxlIHdlIGRvbid0IHVzZSB0aGUgc29ja2V0IGFueXdheSwgbWVoLCB0aHJvdyB0aGUgc29ja2V0IGF3YXlcbiAgICAgIHZhciBvbklkbGVFcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzb2NrZXQuZGVzdHJveSgpXG4gICAgICB9XG4gICAgICBzb2NrZXQuX29uSWRsZUVycm9yID0gb25JZGxlRXJyb3JcbiAgICAgIHNvY2tldC5vbignZXJyb3InLCBvbklkbGVFcnJvcilcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBlbmRpbmcgcmVxdWVzdHMganVzdCBkZXN0cm95IHRoZVxuICAgICAgLy8gc29ja2V0IGFuZCBpdCB3aWxsIGdldCByZW1vdmVkIGZyb20gdGhlIHBvb2wuIFRoaXNcbiAgICAgIC8vIGdldHMgdXMgb3V0IG9mIHRpbWVvdXQgaXNzdWVzIGFuZCBhbGxvd3MgdXMgdG9cbiAgICAgIC8vIGRlZmF1bHQgdG8gQ29ubmVjdGlvbjprZWVwLWFsaXZlLlxuICAgICAgc29ja2V0LmRlc3Ryb3koKVxuICAgIH1cbiAgfSlcblxufVxudXRpbC5pbmhlcml0cyhGb3JldmVyQWdlbnQsIEFnZW50KVxuXG5Gb3JldmVyQWdlbnQuZGVmYXVsdE1pblNvY2tldHMgPSA1XG5cblxuRm9yZXZlckFnZW50LnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gbmV0LmNyZWF0ZUNvbm5lY3Rpb25cbkZvcmV2ZXJBZ2VudC5wcm90b3R5cGUuYWRkUmVxdWVzdE5vcmV1c2UgPSBBZ2VudC5wcm90b3R5cGUuYWRkUmVxdWVzdFxuRm9yZXZlckFnZW50LnByb3RvdHlwZS5hZGRSZXF1ZXN0ID0gZnVuY3Rpb24ocmVxLCBob3N0LCBwb3J0KSB7XG4gIHZhciBuYW1lID0gZ2V0Q29ubmVjdGlvbk5hbWUoaG9zdCwgcG9ydClcbiAgXG4gIGlmICh0eXBlb2YgaG9zdCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGhvc3RcbiAgICBwb3J0ID0gb3B0aW9ucy5wb3J0XG4gICAgaG9zdCA9IG9wdGlvbnMuaG9zdFxuICB9XG5cbiAgaWYgKHRoaXMuZnJlZVNvY2tldHNbbmFtZV0gJiYgdGhpcy5mcmVlU29ja2V0c1tuYW1lXS5sZW5ndGggPiAwICYmICFyZXEudXNlQ2h1bmtlZEVuY29kaW5nQnlEZWZhdWx0KSB7XG4gICAgdmFyIGlkbGVTb2NrZXQgPSB0aGlzLmZyZWVTb2NrZXRzW25hbWVdLnBvcCgpXG4gICAgaWRsZVNvY2tldC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBpZGxlU29ja2V0Ll9vbklkbGVFcnJvcilcbiAgICBkZWxldGUgaWRsZVNvY2tldC5fb25JZGxlRXJyb3JcbiAgICByZXEuX3JldXNlZFNvY2tldCA9IHRydWVcbiAgICByZXEub25Tb2NrZXQoaWRsZVNvY2tldClcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmFkZFJlcXVlc3ROb3JldXNlKHJlcSwgaG9zdCwgcG9ydClcbiAgfVxufVxuXG5Gb3JldmVyQWdlbnQucHJvdG90eXBlLnJlbW92ZVNvY2tldCA9IGZ1bmN0aW9uKHMsIG5hbWUsIGhvc3QsIHBvcnQpIHtcbiAgaWYgKHRoaXMuc29ja2V0c1tuYW1lXSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuc29ja2V0c1tuYW1lXS5pbmRleE9mKHMpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5zb2NrZXRzW25hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH0gZWxzZSBpZiAodGhpcy5zb2NrZXRzW25hbWVdICYmIHRoaXMuc29ja2V0c1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBkb24ndCBsZWFrXG4gICAgZGVsZXRlIHRoaXMuc29ja2V0c1tuYW1lXVxuICAgIGRlbGV0ZSB0aGlzLnJlcXVlc3RzW25hbWVdXG4gIH1cbiAgXG4gIGlmICh0aGlzLmZyZWVTb2NrZXRzW25hbWVdKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5mcmVlU29ja2V0c1tuYW1lXS5pbmRleE9mKHMpXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5mcmVlU29ja2V0c1tuYW1lXS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBpZiAodGhpcy5mcmVlU29ja2V0c1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZnJlZVNvY2tldHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5yZXF1ZXN0c1tuYW1lXSAmJiB0aGlzLnJlcXVlc3RzW25hbWVdLmxlbmd0aCkge1xuICAgIC8vIElmIHdlIGhhdmUgcGVuZGluZyByZXF1ZXN0cyBhbmQgYSBzb2NrZXQgZ2V0cyBjbG9zZWQgYSBuZXcgb25lXG4gICAgLy8gbmVlZHMgdG8gYmUgY3JlYXRlZCB0byB0YWtlIG92ZXIgaW4gdGhlIHBvb2wgZm9yIHRoZSBvbmUgdGhhdCBjbG9zZWQuXG4gICAgdGhpcy5jcmVhdGVTb2NrZXQobmFtZSwgaG9zdCwgcG9ydCkuZW1pdCgnZnJlZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gRm9yZXZlckFnZW50U1NMIChvcHRpb25zKSB7XG4gIEZvcmV2ZXJBZ2VudC5jYWxsKHRoaXMsIG9wdGlvbnMpXG59XG51dGlsLmluaGVyaXRzKEZvcmV2ZXJBZ2VudFNTTCwgRm9yZXZlckFnZW50KVxuXG5Gb3JldmVyQWdlbnRTU0wucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBjcmVhdGVDb25uZWN0aW9uU1NMXG5Gb3JldmVyQWdlbnRTU0wucHJvdG90eXBlLmFkZFJlcXVlc3ROb3JldXNlID0gQWdlbnRTU0wucHJvdG90eXBlLmFkZFJlcXVlc3RcblxuZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGlvblNTTCAocG9ydCwgaG9zdCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHBvcnQgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHBvcnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGhvc3QgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IGhvc3Q7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnM7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwb3J0ID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnMucG9ydCA9IHBvcnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGhvc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucy5ob3N0ID0gaG9zdDtcbiAgfVxuXG4gIHJldHVybiB0bHMuY29ubmVjdChvcHRpb25zKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/forever-agent/index.js\n");

/***/ })

};
;