// -----------------------------
// Main JS
// -----------------------------

// Feature Option Selects
// ----------------------

var siteLayout = "";
var activeSiteLayout = "";

$( ".site-layout" )
	.change(function () {

		$( "body" ).removeClass( activeSiteLayout );

	    $( this ).children("option:selected").each(function() {
	    	siteLayout = $( this ).val();
	    });

	    activeSiteLayout = siteLayout;

    	$( "body" ).addClass( siteLayout );

	}).change();


var sitePosition = "";
var activeSitePosition = "";

$( ".site-position" )
	.change(function () {

		$( "body" ).removeClass( activeSitePosition );

	    $( this ).children("option:selected").each(function() {
	    	sitePosition = $( this ).val();
	    });

	    activeSitePosition = sitePosition;

    	$( "body" ).addClass( sitePosition );

	}).change();


var headerPosition = "";
var activeHeaderPosition = "";

$( ".header-position" )
	.change(function () {

		$( ".template-header" ).removeClass( activeHeaderPosition );

	    $( this ).children("option:selected").each(function() {
	    	headerPosition = $( this ).val();
	    });

	    activeHeaderPosition = headerPosition;

    	$( ".template-header" ).addClass( headerPosition );

	}).change();


var headerLayout = "";
var activeHeaderLayout = "";

$( ".header-layout" )
	.change(function () {

		$( ".template-header" ).removeClass( activeHeaderLayout );

	    $( this ).children("option:selected").each(function() {
	    	headerLayout = $( this ).val();
	    });

	    activeHeaderLayout = headerLayout;

    	$( ".template-header" ).addClass( headerLayout );

	}).change();


var headerSpacing = "";
var activeHeaderSpacing = "";

$( ".header-spacing" )
	.change(function () {

		$( ".template-header" ).removeClass( activeHeaderSpacing );

	    $( this ).children("option:selected").each(function() {
	    	headerSpacing = $( this ).val();
	    });

	    activeHeaderSpacing = headerSpacing;

    	$( ".template-header" ).addClass( headerSpacing );

	}).change();


var featureHeight = "";
var activeFeatureHeight = "";

$( ".feature-height" )
	.change(function () {

		$( ".content-inner-wrap" ).removeClass( activeFeatureHeight );

	    $( this ).children("option:selected").each(function() {
	    	featureHeight = $( this ).val();
	    });

	    activeFeatureHeight = featureHeight;

    	$( ".content-inner-wrap" ).addClass( featureHeight );

	}).change();


var featureAlignment = "";
var activeFeatureAlignment = "";

$( ".feature-alignment" )
	.change(function () {

		$( ".content-inner-wrap" ).removeClass( activeFeatureAlignment );

	    $( this ).children("option:selected").each(function() {
	    	featureAlignment = $( this ).val();
	    });

	    activeFeatureAlignment = featureAlignment;

    	$( ".content-inner-wrap" ).addClass( featureAlignment );

	}).change();


var featureOverlayType = "";
var activeFeatureOverlayType = "";

$( ".feature-overlay-type" )
	.change(function () {

		$( ".content-inner-wrap" ).removeClass( activeFeatureOverlayType );

	    $( this ).children("option:selected").each(function() {
	    	featureOverlayType = $( this ).val();
	    });

	    activeFeatureOverlayType = featureOverlayType;

    	$( ".content-inner-wrap" ).addClass( featureOverlayType );

	}).change();


var featureOverlayOpacity = "";
var activeFeatureOverlayOpacity = "";

$( ".feature-overlay-opacity" )
	.change(function () {

		$( ".content-inner-wrap" ).removeClass( activeFeatureOverlayOpacity );

	    $( this ).children("option:selected").each(function() {
	    	featureOverlayOpacity = $( this ).val();
	    });

	    activeFeatureOverlayOpacity = featureOverlayOpacity;

    	$( ".content-inner-wrap" ).addClass( featureOverlayOpacity );

	}).change();


var featureParallax = "";
var activeFeatureParallax = "";

$( ".feature-parallax" )
	.change(function () {

		$( ".content-inner-wrap" ).removeClass( activeFeatureParallax );

	    $( this ).children("option:selected").each(function() {
	    	featureParallax = $( this ).val();
	    });

	    activeFeatureParallax = featureParallax;

    	$( ".content-inner-wrap" ).addClass( featureParallax );

	}).change();


var mainSpacing = "";
var activeMainSpacing = "";

$( ".main-spacing" )
	.change(function () {

		$( ".main-content" ).removeClass( activeMainSpacing );

	    $( this ).children("option:selected").each(function() {
	    	mainSpacing = $( this ).val();
	    });

	    activeMainSpacing = mainSpacing;

    	$( ".main-content" ).addClass( mainSpacing );

	}).change();


// Parallax
// ----------

// Fixed position and fade out when scrolling
var scrollEffect = function (elem) {

	// How high the window is
	var window_height = window.innerHeight;

	// Apply styles as user scrolls
	elem.setAttribute(
		"style", "opacity:" + Math.max(0, parseFloat(1-(1.8/window_height*window.pageYOffset)).toFixed(2)) + "; -webkit-transform: translateY(" + window.pageYOffset + "px)"
	);

};

var elem = document.querySelector('.content-inner-wrap');

window.onscroll = function(e) {
	scrollEffect(elem);
};


// Accordion
// ---------

$(document).ready(function(){
  var animTime = 300,
      clickPolice = false;

  $(document).on('touchstart click', '.acc-btn', function(){
    if(!clickPolice){
       clickPolice = true;

      var currIndex = $(this).index('.acc-btn'),
          targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();

      $('.acc-btn h1').removeClass('selected');
      $(this).find('h1').addClass('selected');

      $('.acc-content').stop().animate({ height: 0 }, animTime);
      $('.acc-content').eq(currIndex).stop().animate({ height: targetHeight }, animTime);

      setTimeout(function(){ clickPolice = false; }, animTime);
    }

  });

});
