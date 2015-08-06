/*
 * jQuery Exists 0.0.1
 * 
 */

(function ($) {
	$.fn.exists = function() {
		return this.length == 0 ? false : this;
	}
})