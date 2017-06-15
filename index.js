'use strict';

var PivxRPC = {
  Client: require('./server/client'),
  requests: require('./server/requests').create(),
  spec: require('./server/spec')
};

module.exports = PivxRPC;
