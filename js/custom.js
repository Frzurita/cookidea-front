
$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("#navigation").css({
                "border-bottom":"1px solid #e7eaec",
                "background-color":"#037E8B"
            });
        } else {
            $("#navigation").css({
                "background-color": "transparent",
                "border-bottom":"0 solid #e7eaec"
            });
        }
    });

});