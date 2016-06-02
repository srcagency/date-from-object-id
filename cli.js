#! /usr/bin/env node
'use strict';

var dateFromObjectId = require('./');

var arg = process.argv[2];
var piped = arg === '-';

var objectIdHex = piped ? '' : arg;

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
	console.log(dateFromObjectId(objectIdHex));
}
