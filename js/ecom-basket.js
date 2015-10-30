// Published Mode Detection
// -------------------------

var publishedmode = true;

if($("body.edit-mode").length > 0) {
    publishedmode = false;
}

// Basket Overlay
// ---------------

if(publishedmode==true) {

    $(document).on("click", ".basket-toggle", function() {
        $( "body" ).toggleClass( "basket-open" );
    });

    $(document).click(function(event) {
        if( $(event.target).is(".basket-body") ) {
            $( "body" ).removeClass( "basket-open" );
            $( "#page-zones__template-widgets__ecombasket-shopbasket").removeClass( "show-content" );
        }
    });

    $('.basket-body').click(function(e) {
        if (e.target == this) {
            $( "body" ).removeClass( "basket-open" );
            $( "#page-zones__template-widgets__ecombasket-shopbasket").removeClass( "show-content" );
        }
    });
}
