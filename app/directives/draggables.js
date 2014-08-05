searchApi.directive('myAnimation', ['$document', function ($document) {
        
    return function (scope, element, attr) {
        var startX = 0,
            startY = 0,
            x = 0,
            y = 0;

        element.css({
            position: 'relative',
            border: '1px solid red',
            backgroundColor: 'lightgrey',
            cursor: 'pointer'
        });
        element.on('mousedown', function (event) {
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }
        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }

	element.on("mouseenter", function () {
           $("#" + this.id + " .title").stop().animate({"margin-top": "-3px"}, 300);
	}).on("mouseleave", function () {
	    $("#" + this.id + " .title").stop().animate({"margin-top": "50px"}, 300);
	});

    };

}]);
