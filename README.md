pivx-rpc
================

[![Build Status](https://travis-ci.org/agustinkassis/pivx-rpc.svg)](https://travis-ci.org/agustinkassis/pivx-rpc)
[![Coverage Status](https://coveralls.io/repos/agustinkassis/pivx-rpc/badge.svg)](https://coveralls.io/r/agustinkassis/pivx-rpc)

[![NPM](https://nodei.co/npm/pivx-rpc.png)](https://nodei.co/npm/pivx-rpc/)

Examples
--------

```node
var config = require('config');
var rpc = require('pivx-rpc');

var opts = config.get('client');
var client = rpc.Client.create(opts);
var requests = rpc.requests;

client.sendRequest(requests.GetInfo(), console.log);
client.sendRequest(requests.ValidateAddress('D5DD3vjDenNcYkU43mc2jxrwihDK7qn2Ld'), console.log);
```
