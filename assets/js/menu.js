$(".meni").on("click", function () {
	var meniText = document.getElementById("meni-text");
	var meniImg = document.getElementById("meni-img");
	var logoImg = document.getElementById("logo-img");

	$(".home-page").toggleClass("hidden");
	$(".home-page .img-container img").toggleClass("hidden");
	$(".logo").toggleClass("hidden");
	$("h1").toggleClass("hidden");
	$("p").toggleClass("hidden");
	$(".buttons").toggleClass("hidden");
	$("nav ul").toggleClass("hidden");

	meniText.innerHTML = meniText.innerHTML === "Menu" ? "Exit" : "Menu";

	// had problems with some paths that is why I decided to go on this way. Because of this part of the code project needs to be run on Port: 5500.
	meniImg.src =
		meniImg.src === "/assets/images/notus-meni.png"
			? "http://127.0.0.1:5500/assets/images/notus-meni-close.png"
			: "http://127.0.0.1:5500/assets/images/notus-meni.png";

	logoImg.src =
		logoImg.src === "http://127.0.0.1:5500/assets/images/Notus-logo-main.png"
			? "http://127.0.0.1:5500/assets/images/Notus-logo-meni.svg"
			: "http://127.0.0.1:5500/assets/images/Notus-logo-main.png";
});
