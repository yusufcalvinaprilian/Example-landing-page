// Tambahkan efek animasi navbar saat digulir
window.addEventListener("scroll", function () {
	var nav = document.querySelector("nav");
	nav.classList.toggle("scrolled", window.scrollY > 0);
});


// Smooth Scrolling
document.querySelectorAll('a[href^="#parallax"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute("href"));

		window.scrollTo({
			top: target.offsetTop - 50,
			behavior: "smooth",
		});
	});
});

// Efek Paralaks
window.addEventListener("scroll", function () {
	const parallaxElements = document.querySelectorAll(".parallax");

	parallaxElements.forEach((element) => {
		const distance = window.scrollY;
		const speed = element.dataset.speed;

		element.style.transform = `translateY(${distance * speed}px)`;
	});
});
