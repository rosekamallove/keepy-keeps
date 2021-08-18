/**
 * const, let, var
 * js objects
 * document object model
 * arrays
 * es6 arrow functions
 */

const linkPanel = document.querySelector("#addLinksPanel");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const submitButton = document.querySelector("#submitButton");

let links = [];

addBtn.addEventListener("click", function () {
  linkPanel.classList.remove("hidden");
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let title = linkTitle.value;
  let url = linkUrl.value;
  const newLink = { title: title, url: url };
  links.push(newLink);
  linkTitle.value = "";
  linkUrl.value = "";
  categories.value = "";
});

cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  linkPanel.classList.add("hidden");
});
