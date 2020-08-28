"use strict";

var r9k = require("../../engine/r9k")

exports.engineVersion = "2.4";

exports.init = function() {
	
	var oldGetMessageHash = r9k.getMessageHash;
	
	r9k.getMessageHash = function(message) {
		
		if (message && message.toString().length) {
			message = message.replace(/\r|>>\d+/g, "");
		}
		
		return oldGetMessageHash(message);
		
	}
	
};