// a JS file responsible for slideshow that shows after the loader

var img_slider = document.querySelector(".img-slider");
var counter_paragraph = document.querySelector(".couter-paragraph");

var images = [
	"notus-task1-img1.jpg",
	"notus-task1-img2.jpg",
	"notus-task1-img3.jpg",
];
var i = 0;

const prev = () => {
	if (i <= 0) i = images.length;
	i--;
	return setImg();
};

const next = () => {
	if (i >= images.length - 1) i = -1;
	i++;
	return setImg();
};

const setImg = () => {
	img_slider.setAttribute("src", "assets/images/" + images[i]);
	document.getElementById("couter-paragraph").innerHTML = i + 1 + "/3";
	return;
};
