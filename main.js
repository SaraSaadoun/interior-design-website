let navBtn = document.querySelector(".nav-btn");
let navSection = document.querySelector(".nav");
console.log(window.screen.width);
function sizing() {
  if (window.screen.width <= 1000) {
    navBtn.classList.remove("hide");
  } else {
    navBtn.classList.add("hide");
    navSection.classList.remove("hide");
  }
}
window.onload = sizing;
document.body.onresize = sizing;
navBtn.onclick = function () {
  if (navSection.classList.length == 2) {
    navSection.classList.remove("hide");
  } else {
    navSection.classList.add("hide");
  }
};

// checking for the validation of the form
// creating popups
function createPopup(parent, text) {
  let newPopUp = popUpDiv.cloneNode(true);
  newPopUp.setAttribute("class", "popUpDiv");
  newPopUp.appendChild(text);
  parent.parentElement.append(newPopUp);
}
//selecting form + all inputs
let messegeForm = document.forms[0];
let nameInput = messegeForm.querySelector("[name='name'");
let emailInput = messegeForm.querySelector("[name='email'");
let messageInput = messegeForm.querySelector("[name='message'");
let button = messegeForm.querySelector("#button");

// create popUp templete
let popUpDiv = document.createElement("div");
popUpDiv.setAttribute("class", "popUpDivTemplete");
let popUpTextName = document.createTextNode("max length of characters is 20.");
let popUpTextMessage = document.createTextNode(
  "max length of characters is 500."
);
popUpDiv.style.fontSize = "15px";
popUpDiv.style.backgroundColor = "#E2DBE4";
popUpDiv.style.marginLeft = "10px";
popUpDiv.style.height = "30px";
popUpDiv.style.padding = "10px";

//checking for a vaild name of max 20 char long + message of max 500 char
messegeForm.onsubmit = function (event) {
  let validName = false,
    validMessage = false;
  //validation check
  validName = nameInput.value.length <= 20 ? true : false;
  validMessage = messageInput.value.length <= 20 ? true : false;

  //deleting any popups
  let firstPopup = messegeForm.firstElementChild.children[2];
  let secondPopup = messegeForm.children[2].children[2];
  if (firstPopup) {
    firstPopup.parentElement.removeChild(firstPopup);
  }
  if (secondPopup) {
    secondPopup.parentElement.removeChild(secondPopup);
  }

  //action of invalid inputs >> popup + prevent submit
  if (!validName) {
    createPopup(nameInput, popUpTextName);
  } else if (!validMessage) {
    createPopup(messageInput, popUpTextMessage);
  }

  if (!validName || !validMessage || !validEmail) {
    event.preventDefault();
  }
};
