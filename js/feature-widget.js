var featureParallaxEffect = function (param) {





        // ===============================================================
        // Initial settings
        // ===============================================================

        var
            // Element to apply the effects
            widget                  = $(".feature"),

            // Element properties
            widgetHeight            = widget.height(),
            widgetPosition          = widget.offset(),
            widgetBottomCoordinate  = widgetPosition.top + widgetHeight,
            widgetViewportOverflow  = false;

            // Background element
            widgetBackground        = widget.find(".feature__parallax-background-image"),

            // Background position setting
            backgroundPosition      = parseFloat( widgetBackground.css("background-position").split(' ')[1] ),
            bgScrollEffectThreshold = 90, // Allows background scroll effect only when background-position-y is set below this value

            // Window properties
            windowHeight            = $(window).height(),
            windowOffset            = $(window).scrollTop(),

            // Effects initial settings
            bgScrollEffectEnabled   = false,
            featureStuckEnabled     = true,
            fadeOutEffectEnabled    = true,

            // Scroll progress initial value
            scrollProgress          = 0;


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
            widget.css('transform', 'translate(0px, ' + topOffset +'px )');

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

            windowOffset = $(window).scrollTop();

            // Prevents code from running when widget is no longer visible

            if ( windowOffset < widgetBottomCoordinate ) {

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


            }

        }; //  window.onscroll


                            // ===============================================================
                            // Demo Only
                            // ===============================================================

                            if ( param == "destroy" ) {
                                widget.find(".content-inner-wrap").css('opacity', 1);
                                widget.css('transform', 'translate(0px, 0px )');
                                widgetBackground.css('background-position', '50%' + backgroundPosition +'%');
                            }



}; //featureParallaxEffect





// ===============================================================
// Initialization
// ===============================================================

$(window).on("load resize",function(e){
    featureParallaxEffect();
});