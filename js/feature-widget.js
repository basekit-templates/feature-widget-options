/*! jQuery requestAnimationFrame - v0.1.3pre - 2014-02-07
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2014 Corey Frang; Licensed MIT */

(function( jQuery ) {

// requestAnimationFrame polyfill adapted from Erik Möller
// fixes from Paul Irish and Tino Zijdel
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating


var animating,
    lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame;

for(; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + "RequestAnimationFrame" ];
    cancelAnimationFrame = cancelAnimationFrame ||
        window[ vendors[lastTime] + "CancelAnimationFrame" ] ||
        window[ vendors[lastTime] + "CancelRequestAnimationFrame" ];
}

function raf() {
    if ( animating ) {
        requestAnimationFrame( raf );
        jQuery.fx.tick();
    }
}

if ( requestAnimationFrame ) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
    jQuery.fx.timer = function( timer ) {
        if ( timer() && jQuery.timers.push( timer ) && !animating ) {
            animating = true;
            raf();
        }
    };

    jQuery.fx.stop = function() {
        animating = false;
    };
} else {
    // polyfill
    window.requestAnimationFrame = function( callback, element ) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ),
            id = window.setTimeout( function() {
                callback( currTime + timeToCall );
            }, timeToCall );
        lastTime = currTime + timeToCall;
        return id;
    };

    window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };

}

}( jQuery ));








var featureParallaxEffect = function (param) {


        // ===============================================================
        // Elements
        // ===============================================================
        var
            widget                  = $(".feature"),
            widgetWrapper           = "featureWrapper";



        widget.wrap("<div class='"+widgetWrapper+"'></div>");
        widget.append("<div class='feature__parallax-background-image'></div>");


        // ===============================================================
        // Initial settings
        // ===============================================================

        var


            // Element properties
            widgetWidth             = 0,
            widgetHeight            = 0,
            widgetPosition          = 0,
            widgetBottomCoordinate  = 0,
            widgetViewportOverflow  = false;

            // Background element
            widgetBackground        = widget.find(".feature__parallax-background-image"),
            backgroundImage  =        widget.find(".feature__background-image").css("background-image");

            // Background position setting
            backgroundPosition      = parseFloat( widgetBackground.css("background-position").split(' ')[1] ),
            bgScrollEffectThreshold = 90, // Allows background scroll effect only when background-position-y is set below this value

            // Window properties
            windowHeight            = 0,
            windowOffset            = $(window).scrollTop(),

            // Effects initial settings
            bgScrollEffectEnabled   = false,
            featureStuckEnabled     = true,
            fadeOutEffectEnabled    = true,

            // Scroll progress initial value
            scrollProgress          = 0,
            scrolling               = false;




        var calcDimension = function () {
            // Get dimensions
            widgetWidth             = $(".featureWrapper").width();
            widgetHeight            = widget.height();
            widgetPosition          = widget.offset();
            widgetBottomCoordinate  = widgetPosition.top + widgetHeight;
            windowHeight            = $(window).height();

            // Set dimensions

            widget.width(widgetWidth);
            $("."+widgetWrapper).height(widgetHeight);
        };


        $(".feature__parallax-background-image").css({ 'background-image':  backgroundImage  });



        calcDimension();





        // Set top position of background element holder, so it covers space occupied by the header
        widgetBackground.css({ top: -widgetPosition.top });

        // Check if background image can be moved further down
        if ( backgroundPosition < 100 && backgroundPosition < bgScrollEffectThreshold ) {

            bgScrollEffectEnabled = true;

        }

        // Check if widget is taller than the viewport

        if ( widgetBottomCoordinate > windowHeight ) {

            widgetViewportOverflow = true;

        }








        // ===============================================================
        // Effects
        // ===============================================================


        // ===============================================================
        // Background Scroll Effect

        var backgroundScrollEffect = function (scrollProgress) {

            var bgPosition = Math.max(backgroundPosition, backgroundPosition + ( ( 100 - backgroundPosition ) * scrollProgress ) ).toFixed( 2 );
            widgetBackground.css('background-position', '50%' + bgPosition +'%');

        };

        // ===============================================================
        // Stuck Effect

        var stuckEffect = function (scrollProgress) {

            var positionOffset = 0;

            if ( widgetViewportOverflow ) {
                positionOffset = widgetBottomCoordinate - windowHeight;
            }

            var topOffset = Math.max(0, windowOffset - positionOffset);

            // widget.css('-webkit-transform', 'translate3d(0px, ' + topOffset +'px, 0)');



        };

        // ===============================================================
        // Text Fade Out Effect

        var fadeOutEffect = function (scrollProgress) {

            opacity = Math.min(1, ( 1 - scrollProgress ).toFixed( 2 ) );
            widget.find(".content-inner-wrap").css('opacity', opacity);

        };



        // ===============================================================
        // When user scrolls
        // ===============================================================

        window.onscroll = function(e) {
            scrolling = true;
            windowOffset = Math.max(0, $(window).scrollTop() );

        };


         $(window).on("resize",function(e){
            calcDimension();
         });






        var animate = function () {

                requestAnimationFrame( animate );

                // Prevents code from running when widget is no longer visible

                if ( windowOffset < widgetBottomCoordinate && scrolling ) {
                    applyEffects();
                }

                scrolling = false;

        }


        // ===============================================================
        // Apply effects
        // ===============================================================

        var applyEffects = function () {




                var scrollProgressOffset = 0; // Can start scrollProgress immediately
                var scrollLength = widgetBottomCoordinate; // Effect last while scrolling the lenght of the widget

                // ===============================================================
                // When widget is taller than viewport

                if ( widgetViewportOverflow ) {
                    // Disable effects  untill bottom of the widget reaches the viewport
                    fadeOutEffectEnabled = false;
                    featureStuckEnabled = false;

                    // When bottom of the widget reaches the viewport

                    if ( windowOffset > ( widgetBottomCoordinate  - windowHeight ) ) {
                        // Enable effects
                        featureStuckEnabled = true;
                        fadeOutEffectEnabled = true;

                        // Scroll effect ajdustments
                        scrollProgressOffset = widgetBottomCoordinate - windowHeight; // Remove scroll amount needed to reach the bottom of the widget
                        scrollLength = windowHeight; // Scroll effect last while scrolling the height of the viewport

                    }

                }

                // ===============================================================
                // Scroll progress, value 0 on the top, value 1 when bottom of the widget passed the viewport

                scrollProgress = Math.min( 1 , parseFloat( 0 + ( 1 / ( scrollLength ) * ( windowOffset -  scrollProgressOffset ) ) ).toFixed( 4 ) );


                // ===============================================================
                // Apply effects

                if ( bgScrollEffectEnabled ) {
                    backgroundScrollEffect(scrollProgress);
                }

                if ( featureStuckEnabled ) {
                    stuckEffect(scrollProgress);
                }

                if ( fadeOutEffectEnabled ) {
                    fadeOutEffect(scrollProgress);
                }





            // ===============================================================
            // Demo Only
            // ===============================================================

            if ( param == "destroy" ) {
                widget.find(".content-inner-wrap").css('opacity', 1);
                widget.css('transform', 'translate(0px, 0px )');
                widgetBackground.css('background-position', '50%' + backgroundPosition +'%');
            }





        } // applyEffects


        requestAnimationFrame( animate );





}; //featureParallaxEffect






// ===============================================================
// Initialization
// ===============================================================

$(window).on("load",function(e){
    featureParallaxEffect();
});
