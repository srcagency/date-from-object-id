'use strict';

var ObjectId = require('mongodb').ObjectId;
var test = require('tape');
var o2d = require('./');

test(function( t ){
	t.ok(o2d('5750268e0ddf67495e000007') instanceof Date);

	t.equal(o2d('5750268e0ddf67495e000007').getTime(), 1464870542000);

	t.ok(o2d(ObjectId('5750268e0ddf67495e000007')) instanceof Date);

	t.equal(o2d(ObjectId('5750268e0ddf67495e000007')).getTime(), 1464870542000);

	t.end();
});
