const checkboxIngredients = document.querySelectorAll(".container-custom-checkbox input"),
      ingredients = document.querySelectorAll(".current-pizza-item"),
      drinkItems = document.querySelectorAll(".select-drink-item"),
      totalAmount = document.querySelector('.total-amount>.summa');

const orderBtn = document.querySelector('.make-an-order'),
      modalWindow = document.querySelector('.modal-window'),
      submitBtn = document.querySelector('.modal-window__submit-btn');

const subject = document.querySelector('.modal-window__subject'),
      ingredientsModal = document.querySelector('.modal-window__ingredients'),
      drinksModal = document.querySelector('.modal-window__drinks');

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

function prepareWindowModalContent() {
  subject.innerHTML = '';
  ingredientsModal.innerHTML = '';
  drinksModal.innerHTML = '';

  const addedIngredients = document.querySelectorAll('.container-custom-checkbox.active'),
          addedDrinks = document.querySelectorAll('.select-drink-item.active');

  let ingredientsList = [];
  if (addedIngredients) {
    for (let ingredient of addedIngredients) {
      ingredientsList.push(ingredient.innerText);
    }
  }

  let drinksList = [];
  if (addedDrinks) {
    for (let drink of addedDrinks) {
      drinksList.push(drink.attributes[1].textContent);
    }
  }

  const totalIngredients = ingredientsList.join(', ') || 'no ingredients',
        totalDrinks = drinksList.join(', ') || 'no drinks',
        totalText = `You have ordered a pizza with next ingredients: ${totalIngredients}, and next drinks: ${totalDrinks}. 
                     Your bill is ${totalAmount.innerHTML}`;
  subject.innerHTML = totalText;

}

/* Modal window for order */
orderBtn.addEventListener('click', () => {
  modalWindow.classList.remove('none');
  prepareWindowModalContent();
});

window.addEventListener('click', e => {
  if (e.target === modalWindow) {
    modalWindow.classList.add('none');
  }
});

submitBtn.addEventListener('click', () => {
  modalWindow.classList.add('none');
});