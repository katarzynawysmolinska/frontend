const imgs = [
	{
		src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcjajs/img/1.jpg",
		title: "Widok 1",
	},
	{
		src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcjajs/img/2.jpg",
		title: "Widok 2",
	},
	{
		src: "https://raw.githubusercontent.com/apietryga/kurs-Front-end/master/materialy/lekcjajs/img/3.jpg",
		title: "Widok 3",
	},
];

const arrayLeft = document.querySelector("div.left");
const arrayRight = document.querySelector("div.right");
const img = document.querySelector("img");

const changeImg = nr => {
	img.src = imgs[nr].src;
	img.alt = imgs[nr].title;
};

changeImg(2);

let currentSlide = 0;

const changeCurrentSlide = direction => {
	if (direction == "left") {
		currentSlide--;
		if (currentSlide == -1) {
			currentSlide = 2;
		}
	} else {
		currentSlide++;
		if (currentSlide == 3) {
			currentSlide = 0;
		}
	}
	changeImg(currentSlide);
};

const left = document.querySelector(".left");
left.onclick = () => {
	changeCurrentSlide("left");
};

const right = document.querySelector(".right");
right.onclick = () => {
	changeCurrentSlide("right");
};
