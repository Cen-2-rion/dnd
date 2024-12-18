import "./addCard.css";

export default class AddCard {
  constructor(parent) {
    this.parent = parent;
  }

  render() {
    // создаём форму для добавления карточки
    const form = document.createElement("form");
    form.classList.add("form");

    // поле ввода текста карточки
    const cardInput = document.createElement("textarea");
    cardInput.classList.add("card-text-input", "hidden");
    cardInput.placeholder = "Enter a title for this card...";
    form.append(cardInput);

    // кнопки "Add card" и "Cancel", оборачиваем их в отдельный тег
    const cardButtons = document.createElement("div");
    cardButtons.classList.add("card-buttons");

    const addCardButton = document.createElement("button");
    addCardButton.classList.add("add-card-button", "hidden");
    addCardButton.type = "button";
    addCardButton.textContent = "Add Card";
    cardButtons.append(addCardButton);

    const cancelCardButton = document.createElement("button");
    cancelCardButton.classList.add("cancel-card-button", "hidden");
    cancelCardButton.type = "button";
    cancelCardButton.innerHTML = "&times";
    cardButtons.append(cancelCardButton);

    form.append(cardButtons);

    // кнопка "Add another card"
    const addAnotherCardButton = document.createElement("button");
    addAnotherCardButton.classList.add("add-another-card-button");
    addAnotherCardButton.type = "button";
    addAnotherCardButton.textContent = "Add another card";
    form.append(addAnotherCardButton);

    return form;
  }

  static showInput(parent) {
    // скрываем кнопку "Add another card" и отображаем кнопки "Add card" и "Cancel"
    const addAnotherCardButton = parent.querySelector(
      ".add-another-card-button",
    );
    addAnotherCardButton.classList.add("hidden");

    const cardInput = parent.querySelector(".card-text-input");
    cardInput.classList.remove("hidden");

    const addCardButton = parent.querySelector(".add-card-button");
    addCardButton.classList.remove("hidden");

    const cancelCardButton = parent.querySelector(".cancel-card-button");
    cancelCardButton.classList.remove("hidden");
  }

  static hideInput(parent) {
    // скрываем кнопки "Add card" и "Cancel" и отображаем кнопку "Add another card"
    const addAnotherCardButton = parent.querySelector(
      ".add-another-card-button",
    );
    addAnotherCardButton.classList.remove("hidden");

    const cardInput = parent.querySelector(".card-text-input");
    cardInput.classList.add("hidden");
    cardInput.value = "";

    const addCardButton = parent.querySelector(".add-card-button");
    addCardButton.classList.add("hidden");

    const cancelCardButton = parent.querySelector(".cancel-card-button");
    cancelCardButton.classList.add("hidden");
  }
}
