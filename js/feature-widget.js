var featureParallaxEffect = function () {
    var widget                  = $(".feature"),
        widgetHeight            = widget.height(),
        widgetPosition          = widget.offset(),
        widgetBottomCoordinate  = widgetPosition.top + widgetHeight,
        widgetBackground        = widget.find(".feature__parallax-background-image"),
        backgroundPosition      = parseFloat( widgetBackground.css("background-position").split(' ')[1] ),
        windowHeight            = $(window).height(),
        windowOffset            = $(window).scrollTop(),
        scrollProgress          = 0,
        backgroundScrollEffect  = false,
        backgroundScrollEffectThreshold = 90,
        featureStuck            = true;


        // Set top position of background element, so it cover space
        // occupied by the header
        widgetBackground.css({ top: -widgetPosition.top });

        // Check if  background image can be moved further down
        if ( backgroundPosition < 100 && backgroundPosition < backgroundScrollEffectThreshold ) {
            console.log("BG scroll effect enabled");
            backgroundScrollEffect = true;
        }

        console.log("BG POS: "+backgroundPosition);

        console.log("BG BOTT C: "+ widgetBottomCoordinate);

    // Scroll Effect

    var backgroundScrollEffect = function (offset, scrollProgress) {

        console.log(scrollProgress);

        // Background Scroll Effect


            var bgPosition = backgroundPosition + ( ( 100 - backgroundPosition ) * scrollProgress );
            widgetBackground.css('background-position', '50%' + bgPosition +'%');



    };

    // Stuck Effect

    var stuckEffect = function (offset, scrollProgress) {

        console.log(scrollProgress);

        // Stuck Effect


            var topOffset = windowOffset;
            widget.css('transform', 'translate(0px, ' + topOffset +'px )');
            // widget.css('top', topOffset +'px');

    };

    // Text Fade Out Effect

    var fadeOutEffect = function (offset, scrollProgress) {

        console.log(scrollProgress);

        // Stuck Effect


            var topOffset = windowOffset;
            widget.css('transform', 'translate(0px, ' + topOffset +'px )');
            // widget.css('top', topOffset +'px');

    };

    // When the user scrolls

    window.onscroll = function(e) {
        windowOffset = $(window).scrollTop();
        scrollProgress = Math.max(0, parseFloat(0+(1/widgetBottomCoordinate*windowOffset)).toFixed(4));

        // Prevents code from running when widget is no longer visible


        if ( windowOffset < widgetBottomCoordinate && backgroundScrollEffect ) {
            backgroundScrollEffect(windowOffset, scrollProgress);
        }

        if ( featureStuck ) {
            stuckEffect(windowOffset, scrollProgress);
        }

    };
}



$(document).ready(function() {
    featureParallaxEffect();
});


/*

*/