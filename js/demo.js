// -----------------------------
// Main JS
// -----------------------------

// Feature Option Selects
// ----------------------

var siteLayout = "";
var activeSiteLayout = "";

$( ".site-layout" )
	.change(function () {

		$( ".site-container" ).removeClass( activeSiteLayout );

	    $( this ).children("option:selected").each(function() {
	    	siteLayout = $( this ).val();
	    });

	    activeSiteLayout = siteLayout;

    	$( ".site-container" ).addClass( siteLayout );

	}).change();


var headerPosition = "";
var activeHeaderPosition = "";

$( ".header-position" )
	.change(function () {

		$( ".layout" ).removeClass( activeHeaderPosition );

	    $( this ).children("option:selected").each(function() {
	    	headerPosition = $( this ).val();
	    });

	    activeHeaderPosition = headerPosition;

    	$( ".layout" ).addClass( headerPosition );

	}).change();


var headerLayout = "";
var activeHeaderLayout = "";

$( ".header-layout" )
	.change(function () {

		$( ".layout" ).removeClass( activeHeaderLayout );

	    $( this ).children("option:selected").each(function() {
	    	headerLayout = $( this ).val();
	    });

	    activeHeaderLayout = headerLayout;

    	$( ".layout" ).addClass( headerLayout );

	}).change();


var featureHeight = "";
var activeFeatureHeight = "";

$( ".feature-height" )
	.change(function () {

		$( ".feature" ).removeClass( activeFeatureHeight );

	    $( this ).children("option:selected").each(function() {
	    	featureHeight = $( this ).val();
	    });

	    activeFeatureHeight = featureHeight;

    	$( ".feature" ).addClass( featureHeight );

	}).change();


var featureAlignment = "";
var activeFeatureAlignment = "";

$( ".feature-alignment" )
	.change(function () {

		$( ".feature" ).removeClass( activeFeatureAlignment );

	    $( this ).children("option:selected").each(function() {
	    	featureAlignment = $( this ).val();
	    });

	    activeFeatureAlignment = featureAlignment;

    	$( ".feature" ).addClass( featureAlignment );

	}).change();


var featureOverlayType = "";
var activeFeatureOverlayType = "";

$( ".feature-overlay-type" )
	.change(function () {

		$( ".feature" ).removeClass( activeFeatureOverlayType );

	    $( this ).children("option:selected").each(function() {
	    	featureOverlayType = $( this ).val();
	    });

	    activeFeatureOverlayType = featureOverlayType;

    	$( ".feature" ).addClass( featureOverlayType );

	}).change();


var featureOverlayOpacity = "";
var activeFeatureOverlayOpacity = "";

$( ".feature-overlay-opacity" )
	.change(function () {

		$( ".feature" ).removeClass( activeFeatureOverlayOpacity );

	    $( this ).children("option:selected").each(function() {
	    	featureOverlayOpacity = $( this ).val();
	    });

	    activeFeatureOverlayOpacity = featureOverlayOpacity;

    	$( ".feature" ).addClass( featureOverlayOpacity );

	}).change();


var featureParallax = "";
var activeFeatureParallax = "";

$( ".feature-parallax" )
	.change(function () {

		$( ".feature" ).removeClass( activeFeatureParallax );

	    $( this ).children("option:selected").each(function() {
	    	featureParallax = $( this ).val();
	    });

	    activeFeatureParallax = featureParallax;

    	$( ".feature" ).addClass( featureParallax );

        if (featureParallax == "feature-parallax--on") {


        } else {
            featureParallaxEffect("destroy");
        }

	}).change();


$( "select" )
    .change(function () {


    jQuery(window).trigger("resize");

    }).change();


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
