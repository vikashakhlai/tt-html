const container = document.getElementById('banner-list');
let lists = document.querySelectorAll('#banner-list');

let firstElements = lists[0].querySelectorAll('li');
let secondElements = lists[1].querySelectorAll('li');
let thirdElements = lists[2].querySelectorAll('li');

let velocity = 0.03;
let secondVelocity = 0.03;
let thirdVelocity = 0.03;

let position = [0, 120, 240, 360, 480, 620, 740];
let secondPosition = [740, 620, 480, 360, 240, 120, 0];
let thirdPosition = [0, 120, 240, 360, 480, 620, 740];

function updatePosition() {
	for (let j = 0; j < firstElements.length; j++) {
		position[j] += velocity;
		secondPosition[j] -= secondVelocity;
		thirdPosition[j] += thirdVelocity;
		firstElements[j].style.top = position[j] + 'px';
		secondElements[j].style.top = secondPosition[j] + 'px';
		thirdElements[j].style.top = thirdPosition[j] + 'px';
		const containerHeight = container.clientHeight;
		const firstHeight = firstElements[j].clientHeight;
		const secondHeight = secondElements[j].clientHeight;
		const thirdHeight = thirdElements[j].clientHeight;
		if (
			position[j] >= containerHeight - firstHeight &&
			thirdPosition[j] >= containerHeight - thirdHeight
		) {
			position[j] = 0;
			thirdPosition[j] = 0;
		}
		if (secondPosition[j] <= 0) {
			secondPosition[j] = 960 - secondHeight;
		}
		setTimeout(updatePosition, 10);
	}
}

let horizontalVelocity = 0.01;
let secondHorizontalVelocity = 0.01;
let thirdHorizontalVelocity = 0.01;

let horizontalFirstElements = lists[0].querySelectorAll('li');
let secondHorizontalElements = lists[1].querySelectorAll('li');
let thirdHorizontalElements = lists[2].querySelectorAll('li');

let horizontalPosition = [0, 70, 140, 210, 320];
let secondHorizontalPosition = [0, 210, 140, 70, 0];
let thirdHorizontalPosition = [0, 70, 140, 210, 320];

function updateHorizontalPosition() {
	for (let j = 0; j < horizontalFirstElements.length; j++) {
		horizontalPosition[j] += horizontalVelocity;
		secondHorizontalPosition[j] -= secondHorizontalVelocity;
		thirdHorizontalPosition[j] += thirdHorizontalVelocity;
		horizontalFirstElements[j].style.left = horizontalPosition[j] + 'px';
		secondHorizontalElements[j].style.left = secondHorizontalPosition[j] + 'px';
		thirdHorizontalElements[j].style.left = thirdHorizontalPosition[j] + 'px';
		const containerWidth = container.clientWidth;
		const firstWidth = horizontalFirstElements[j].clientWidth;
		const secondWidth = secondHorizontalElements[j].clientWidth;
		const thirdWidth = thirdHorizontalElements[j].clientWidth;
		if (
			horizontalPosition[j] >= containerWidth - firstWidth &&
			thirdHorizontalPosition[j] >= containerWidth - thirdWidth
		) {
			horizontalPosition[j] = 0;
			thirdHorizontalPosition[j] = 0;
		}
		if (secondHorizontalPosition[j] <= 0) {
			secondHorizontalPosition[j] = 320 - secondWidth;
		}
		setTimeout(updateHorizontalPosition, 10);
	}
}

if (window.innerWidth > 1280) {
	updatePosition();
} else {
	updateHorizontalPosition();
}
