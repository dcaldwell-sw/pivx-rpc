'use strict';

var chai = require('chai');
var should = chai.should();

var BitcoinJsonRpc = require('../lib');
var Client = BitcoinJsonRpc.Client;
var requests = BitcoinJsonRpc.Requests.create();

describe('Control:', function() {

  var client = Client.create();

  it('GetInfo', function (done) {
    client.sendRequest(requests.GetInfo(), function(err, ret) {
      ret.nConnections.should.be.above(-1);
      done();
    })
  });

});