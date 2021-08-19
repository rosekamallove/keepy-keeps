const linkPanel = document.querySelector("#addLinksPanel");
const addBtn = document.querySelector("#addBtn");
const cancelButton = document.querySelector("#cancelButton");
const submitButton = document.querySelector("#submitButton");
const addedCategories = document.querySelector("#addCategories");
const linkCategory = document.querySelector("#linkCategories");
const linkList = document.querySelector(".linkList");

let links = [
  {
    title: "New Link 1",
    url: "url.com1",
    categories: ["node", "mongo"],
  },
  {
    title: "New Link 2",
    url: "url.com2",
    categories: ["c++", "c"],
  },
  {
    title: "New Link 3",
    url: "url.com3",
    categories: ["Javascript", "Typescript"],
  },
];
let linkCategories = [];

displayLinks();

addBtn.addEventListener("click", function () {
  linkPanel.classList.remove("hidden");
});

linkCategory.addEventListener("keydown", function (event) {
  if (event.keyCode === 188) {
    event.preventDefault();
    linkCategories.push(linkCategory.value);
    linkCategory.value = "";
    console.log(linkCategories);
    displayLinkCategories();
  }
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  let title = linkTitle.value;
  let url = linkUrl.value;

  const newLink = {
    title: title,
    url: url,
    categories: linkCategories,
  };

  links.push(newLink);
  linkTitle.value = "";
  linkUrl.value = "";
  linkCategories = [];

  addLinksPanel.classList.add("hidden");

  displayLinks();
});

function displayLinkCategories() {}

cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  linkPanel.classList.add("hidden");
});

function displayLinks() {
  linkList.innerHTML = "";
  for (let link of links) {
    let markup = `
      <div class="panel link">
        <div class="link-options">
          <button class="btn-sm">Edit</button>
          <button class="btn-sm" id="cancelButton">Delete</button>
        </div>
        <a href=${link.url}>
          <div class="header">${link.title}</div>
        </a>
        <p class="link-date">${Date.now()}</p>
        <div class="categories">
          Categories:`;
    for (let category of link.categories) {
      markup += `<span class="category">${category}</span>`;
    }
    markup += "</div> </div>";
    linkList.innerHTML += markup;
  }
}
