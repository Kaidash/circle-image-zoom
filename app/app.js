
'use strict';
(function( $ ){

    $.fn.myPlugin = function() {

        // нет необходимости писать $(this), так как "this" - это уже объект jQuery
        // выражение $(this) будет эквивалентно $($('#element'));

        this.toggleClass('active')

    };
})( jQuery );

