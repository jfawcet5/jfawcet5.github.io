let bookList = ["Compilers: Principles, Techniques, & Tools", 
				"Interactive Computer Graphics", 
				"Machine Learning: A Probabilistic Perspective", 
				"Clean Code: A Handbook of Agile Software Craftsmanship", 
				"Secure and Resilient Software Development", 
				"Artificial Intelligence: A Modern Approach"];

const spanItem = document.getElementById("cycle-span");

let index = -1;
setNextItem();

function setNextItem() {
	index = (index + 1) % bookList.length;
	spanItem.textContent = bookList[index];
}

function fadeOut() {
	let opacity = parseFloat(spanItem.style.opacity);
	if (opacity <= 0) {
		setTimeout(cycle, 500);
		return;
	} else {
		opacity -= 0.05;
		spanItem.style.opacity = opacity;
		setTimeout(fadeOut, 100);
		return;
	}
}

function fadeIn() {
	let opacity = parseFloat(spanItem.style.opacity);
	if (opacity >= 1) {
		setTimeout(fadeOut, 5000)
	} else {
		opacity += 0.05;
		spanItem.style.opacity = opacity;
		setTimeout(fadeIn, 100);
	}
}

function cycle() {
	setNextItem();
	fadeIn();
}

setTimeout(fadeOut, 5000);