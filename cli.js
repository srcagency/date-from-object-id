#! /usr/bin/env node
'use strict';

var dateFromObjectId = require('./');

var arg = process.argv[2];
var piped = arg === '-';

var objectIdHex = piped ? '' : arg;

var rg = /ObjectId\(["']?([0-9a-f]+)["']?\)/i;

if (piped) {
	process.stdin
		.on('data', buffer)
		.on('end', finish);
} else {
	finish();
}

function buffer( data ){
	objectIdHex += data;
}

function finish(){
	if (rg.test(objectIdHex))
		objectIdHex = objectIdHex.match(rg)[1];

	console.log(dateFromObjectId(objectIdHex));
}
