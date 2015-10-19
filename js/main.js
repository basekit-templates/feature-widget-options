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

		$( ".template-header, body" ).removeClass( activeHeaderPosition );

	    $( this ).children("option:selected").each(function() {
	    	headerPosition = $( this ).val();
	    });

	    activeHeaderPosition = headerPosition;

    	$( ".template-header, body" ).addClass( headerPosition );

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

        featureParallaxEffect();

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

		$( "body" ).removeClass( activeFeatureParallax );

	    $( this ).children("option:selected").each(function() {
	    	featureParallax = $( this ).val();
	    });

	    activeFeatureParallax = featureParallax;

    	$( "body" ).addClass( featureParallax );

        if (featureParallax == "feature-parallax--on") {
            featureParallaxEffect();
        } else {
            featureParallaxEffect("destroy");
        }

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
