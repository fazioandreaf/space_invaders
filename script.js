const grid = document.querySelector("#grid");
const size = 15;
const area = size * size;
const cells = [];
const aliens = [0, 1, 2, 3, 4, 5];

function creationArea() {
	for (let i = 0; i < area; i++) {
		const cell = document.createElement("div");

		cell.classList.add("b_singlecell");
		cell.innerText = i;
		cells.push(cell);
		grid.appendChild(cell);
	}
}

function creationAliens() {
	for (let i = 0; i < aliens.length; i++) {
		const element = array[i];
	}
}

creationArea();
creationAliens();
