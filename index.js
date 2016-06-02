'use strict';

module.exports = dateFromObjectId;

function dateFromObjectId( objectId ) {
	return new Date(parseInt((objectId+'').substr(0, 8), 16) * 1000);
}
