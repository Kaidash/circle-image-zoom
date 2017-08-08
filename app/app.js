
'use strict';
(function( $ ){

    $.fn.myPlugin = function() {
        this.toggleClass('active');
        if(!this.attr('class')) {
            setTimeout(() => { this.css('z-index','0'); }, 350);
        } else {
            this.css('z-index','1');
        }
    };
})( jQuery );

