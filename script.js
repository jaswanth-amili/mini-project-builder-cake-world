// Various flavours available for order
var flavours = {
	chocolate: 300,
	strawberry: 100,
	butterscotch: 200,
	vanilla: 250,
	redVelvet: 350,
};

// state of each layer in the cake
var state = {
	chocolate: true,
	strawberry: true,
	butterscotch: true,
	vanilla: true,
	redVelvet: true,
};

function renderAll() {
	let bool = false;
	if (bool === false) {
		renderChocolate();
		renderStrawberry();
		renderButterscotch();
		renderVanilla();
		renderRedVelvet();
		renderButtons();
		renderFlavours();
	}
}

function renderChocolate() {
	const chocolate = document.querySelector("#chocolate");
	chocolate.style.display = state.chocolate ? "inherit" : "none";
}

//
function renderStrawberry() {
	const strawberry = document.querySelector("#strawberry");
	strawberry.style.display = state.strawberry ? "inherit" : "none";
}

//
function renderButterscotch() {
	const butterscotch = document.querySelector("#butterscotch");
	butterscotch.style.display = state.butterscotch ? "inherit" : "none";
}

//
function renderVanilla() {
	const vanilla = document.querySelector("#vanilla");
	vanilla.style.display = state.vanilla ? "inherit" : "none";
}

//
function renderRedVelvet() {
	const redVelvet = document.querySelector("#redVelvet");
	redVelvet.style.display = state.redVelvet ? "inherit" : "none";
}

// if (bool === false) {
const chocolateBtn = document.querySelector("#btn-chocolate");
chocolateBtn.onclick = function () {
	state.chocolate = !state.chocolate;
	renderAll();
};

const strawberryBtn = document.querySelector("#btn-strawberry");
strawberryBtn.onclick = function () {
	state.strawberry = !state.strawberry;
	renderAll();
};

const butterscotchBtn = document.querySelector("#btn-butterscotch");
butterscotchBtn.onclick = function () {
	state.butterscotch = !state.butterscotch;
	renderAll();
};

const vanillaBtn = document.querySelector("#btn-vanilla");
vanillaBtn.onclick = function () {
	state.vanilla = !state.vanilla;
	renderAll();
};

const redVelvetBtn = document.querySelector("#btn-redVelvet");
redVelvetBtn.onclick = function () {
	state.redVelvet = !state.redVelvet;
	renderAll();
};

//
function renderButtons() {
	const buttonsArray = [
		chocolateBtn,
		strawberryBtn,
		butterscotchBtn,
		vanillaBtn,
		redVelvetBtn,
	];
	const stateArray = Object.entries(state);
	stateArray.forEach((ele, i) => {
		ele[1] === true
			? buttonsArray[i].classList.add("active")
			: buttonsArray[i].classList.remove("active");
	});
	// renderBill();
	// renderFlavours();
}

//
const bill = document.querySelector("#bill");
function renderFlavours() {
	const stateArray = Object.entries(state);
	let billContent = `<h3>Bill</h3>`;
	stateArray
		.filter((ele) => ele[1] === true)
		.forEach((item) => {
			billContent += `<p>${item[0].padEnd(15, "-") + flavours[item[0]]}</p>`;
		});
	bill.innerHTML = billContent;
	// renderBill();
}

//
function renderBill() {
	const stateArray = Object.entries(state);
	let totalPrice = 0;
	stateArray
		.filter((ele) => ele[1] === true)
		.forEach((item) => {
			totalPrice += flavours[item[0]];
		});
	bill.innerHTML += `<p id="totalBill">Total007 -----  ${totalPrice}</p>`;
}

//
const buyBtn = document.querySelector("#btn-buy");
const candles = document.querySelector("#candles");
buyBtn.onclick = function () {
	renderBill();
	candles.style.display = "inherit";
	bool = true;
};

//
// }
