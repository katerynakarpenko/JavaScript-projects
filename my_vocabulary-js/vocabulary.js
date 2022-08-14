const englishWordInput = document.querySelector(".eng-word");
const ukrainianWordInput = document.querySelector(".ua-word");
const inputs = document.querySelectorAll("input");
const buttonAdd = document.querySelector(".button-add");
const table = document.querySelector(".table-words");

let words;

function isInputValueValid() {
	if (
			(englishWordInput.value.length < 1 ) || 
			(ukrainianWordInput.value.length < 1) ||
			(!isNaN(englishWordInput.value)) ||
			(!isNaN(ukrainianWordInput.value)) 
			) {

		for (let input of inputs) {
			input.classList.add("error");
		}
	} else {
		for (let input of inputs) {
			input.classList.remove("error");
			return true;
		}
	}
}

function CreateWord (engWord, uaWord) {
	this.english = engWord;
	this.ukrainian = uaWord;
}

function addWordToTable(index) {
	table.innerHTML += `
		<tr class="table-row">
			<td>${words[index].english}</td>
			<td>${words[index].ukrainian}</td>
			<td class="button-remove">x</td>
		</tr>
	`
}

function removeWord(e) {
	const rowIndex = e.target.closest(".table-row").rowIndex;
	console.log(rowIndex);

	e.target.closest("tbody").remove();

	words.splice(rowIndex, 1);
	localStorage.removeItem("words");
	localStorage.setItem("words", JSON.stringify(words));
}

function addEventDelete() {
	if (words.length < 1) {
		return;
	}

	let buttonsDelete = document.querySelectorAll(".button-remove");

	for (let button of buttonsDelete) {
		button.addEventListener("click", e => {
			removeWord(e);
		});
	}
}

localStorage.length < 1 ? words = [] : words = JSON.parse(localStorage.getItem("words"));

words.forEach((element, index) => {
	addWordToTable(index);
});

buttonAdd.addEventListener("click", () => {
	if(isInputValueValid()) {
		newWordCouple = new CreateWord(englishWordInput.value, ukrainianWordInput.value);
		words.push(newWordCouple);
		localStorage.setItem("words", JSON.stringify(words));
		addWordToTable(words.length - 1);
		englishWordInput.value = null;
		ukrainianWordInput.value = null
	}
});

addEventDelete();