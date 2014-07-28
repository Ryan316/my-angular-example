
// custom plugins goes here

(function ($) {
       
    $.fn.customPlugin = function (options, callback) {

    	options = $.extend({}, $.fn.customPlugin.defaultOptions, options);

    	if (typeof(callback) === typeof(Function)) {
            callback();
        }
    	return this;
    }; 

    $.fn.customPlugin.defaultOptions = {
    	background: 'red'
    }
        
})(jQuery);
