const checkboxIngredients = document.querySelectorAll(".container-custom-checkbox input"),
			ingredients = document.querySelectorAll(".current-pizza-item"),
			drinkItems = document.querySelectorAll(".select-drink-item"),
      totalAmount = document.querySelector('.total-amount>.summa');


/* Additing ingredients to pizza*/
function addIngredientsToPizza(checkboxes) {
	checkboxesArray = Array.from(checkboxes);
	ingredientsArray = Array.from(ingredients);
	ingredientsArray.splice(0, 2);


	for (let checkbox of checkboxes) {
		checkbox.addEventListener("click", event => {
			event.target.parentNode.classList.toggle("active");

			const index = checkboxesArray.indexOf(event.target);
			ingredientsArray[index].classList.toggle("active");
			calculateOrder();
		});
	}
}

addIngredientsToPizza(checkboxIngredients)

/* Additing drinks */
function addDrinks() {
	for (let item of drinkItems) {
		item.addEventListener("click", () =>{
			item.classList.toggle("active");
			calculateOrder();
		});
	}
}

addDrinks();

function calculateOrder() {
	const ingredientsOrder = document.querySelectorAll(".container-custom-checkbox.active"),
				drinksOrder = document.querySelectorAll(".select-drink-item.active");

	const startPrice = 6.99,
				ingredientsPrice = ingredientsOrder.length*0.25,
				drinksPrice = drinksOrder.length*1.99;
	
	let totalPrice = (startPrice + ingredientsPrice + drinksPrice).toFixed(2);

	totalAmount.innerHTML = `${totalPrice}$`;
}
