var effects = function () {
	
    var checkViewMoreButton = function (data, counter, elem) {
    	// check to show or hide the view more button on initial load
		if (data > 28 && counter < data) {
			elem.css('display', 'block');
		} else {
			elem.css('display', 'none');
		}
	}

	return {
		checkViewMoreButton: checkViewMoreButton
	}

return effects

}();