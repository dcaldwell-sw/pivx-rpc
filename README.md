pivx-rpc
================

[![NPM](https://nodei.co/npm/pivx-rpc.png)](https://nodei.co/npm/pivx-rpc/)

Examples
--------

```node
var rpc = require('pivx-rpc');

var opts = {
  host: "localhost",
  username: "USERNAME",
  password: "PASSWORD",
  port: 51473,
};
var client = rpc.Client.create(opts);
var requests = rpc.requests;

client.sendRequest(requests.GetInfo(), console.log);
client.sendRequest(requests.ValidateAddress('D5DD3vjDenNcYkU43mc2jxrwihDK7qn2Ld'), console.log);

```
