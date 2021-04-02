

// Wait until the DOM has loaded before querying the document
$(document).ready(function(){
	
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


// Lightbox options
lightbox.option({
		'alwaysShowNavOnTouchDevices': true,
      'fitImagesInViewport': true,
      'wrapAround': true,
      'positionFromTop': 5
});


// Auto-create titles for thumb images in lightbox
$('a.full').each(function() {
currentA = $(this);
dataTitle = currentA.attr('data-title');
currentA.find("img").attr('title', dataTitle);
});


//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

});
