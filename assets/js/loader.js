// loader that loads on the load. I set the timeout for 1 second so you can see it.
$(window).on("load", function () {
	setTimeout(function () {
		$(".loading-wrapper").fadeOut("slow");
	}, 1000);
});
