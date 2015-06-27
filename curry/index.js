'use strict';

var sub_curry = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments,0)));
    };
}

var curry = function(fn, length){
	length = length || fn.length;
	return function(){
		if (arguments.length == length){
			return fn.apply(this,arguments);
		}
		var combined = [fn].concat(Array.prototype.slice.call(arguments,0));
		return curry(sub_curry.apply(this,combined), length-arguments.length);
	};
}

module.exports = curry;