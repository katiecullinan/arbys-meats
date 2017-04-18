$(document).ready(function() {

	// Declare the buttons for further use
	// var #buttonName = $('selector');

	var $home = $('a-entity[data-src="#home-thumb"]');
	var $restaurant1 = $('a-entity[data-src="#1-thumb"]');
	var $restaurant2 = $('a-entity[data-thumb="#2-thumb"]');
	var $restaurant3 = $('a-entity[data-thumb="#3-thumb"]');
	var $restaurant4 = $('a-entity[data-thumb="#4-thumb"]');
	var $restaurant5 = $('a-entity[data-thumb="#5-thumb"]');

	// End of the declaration
	var $thumbnails = $('.thumbnail');


	// Fn for showing buttons
	// Usage:
	// show([$button1, $button2, ..., $buttonN]);
	var show = function(el) {
		for (var i = 0; i < el.length; i++) {
			el[i].attr('visible', 'true');
		}
	};

	// Fn for set the postion of a button
	// Usage:
	// setPos($buttonName, x, y, z, rotationX, rotationY, rotationZ]);
	var setPos = function(el, x, y, z, rx, ry, rz) {
		el.attr('position', x + ' ' +  y +  ' ' + z);
		el.attr('rotation', rx + ' ' + ry + ' ' + rz);
	};


	// Fn for switching to another scene and show the all the buttons in it
	// Usage:
	// setScene([$button1, $button2, ..., $buttonN]);
	var setScene = function(elToShow) {

		// Hide all the buttons
		$thumbnails.each(function(index, el) {
			$(this).attr('visible', 'false');
		});

		// Show useful buttons
		show(elToShow);
	};

	// initialize
	show([$restaurant1, $restaurant2, $restaurant3, $restaurant4, $restaurant5]); // Buttons need to be shown at the start
	setPos($restaurant1, 2, 0, 0, 0, -30, 0);  // initial postion of button 1
	setPos($restaurant2, -4, 0, 3, 0, 80, 0); // initial postion of button 1 setPos($buttonName, x, y, z, rotationX, rotationY, rotationZ]);
	setPos($restaurant3, -10, 0, 3, 0, 80, 0);
	setPos($restaurant4, -16, 0, 3, 0, 80, 0);
	setPos($restaurant5, -24, 0, 3, 0, 80, 0);

	// Button control

	// $buttonName.click(function(e) {
	// 	setScene([$button1, $button2, ..., $buttonN]);
	// 	setPos($buttonName1, x, y, z, rotationX, rotationY, rotationZ]);
	// 	setPos($buttonName2, x, y, z, rotationX, rotationY, rotationZ]);
	// .
	// .
	// 	setPos($buttonNameN, x, y, z, rotationX, rotationY, rotationZ]);
	// });

	$start.click(function(e) {
		setScene([$restaurant1]);
		setPos($home-thumb, 2, 0, 0, 0, 80, 0);

	});

	$train.click(function(e) {
		setScene([$restaurant2]);
		setPos($home-thumb, 2, 0, 0, 0, 80, 0);

	});

	$train.click(function(e) {
		setScene([$restaurant3]);
		setPos($home-thumb, 2, 0, 0, 0, 80, 0);

	});

	$train.click(function(e) {
		setScene([$restaurant4]);
		setPos($home-thumb, 2, 0, 0, 0, 80, 0);

	});
	$train.click(function(e) {
		setScene([$restaurant5]);
		setPos($home-thumb, 2, 0, 0, 0, 80, 0);

	});
	// End of button control

});
