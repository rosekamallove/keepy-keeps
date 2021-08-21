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

let editIndex = -1;

displayLinks();

function showAddLinkPanel() {
  linkPanel.classList.remove("hidden");
  displayLinkCategories();
}
function hideAddLinkPanel() {
  linkPanel.classList.add("hidden");
}

addBtn.addEventListener("click", function () {
  showAddLinkPanel();
});

linkCategory.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
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

  if (editIndex === -1) {
    links.unshift(newLink);
  } else {
    links[editIndex] = newLink;
    editIndex = -1;
  }

  linkTitle.value = "";
  linkUrl.value = "";
  linkCategories = [];

  addLinksPanel.classList.add("hidden");

  displayLinks();
});

function displayLinkCategories() {
  addedCategories.innerHTML = "";
  for (let category of linkCategories) {
    let categoryMarkup = `<span class="category">${category}</span>`;
    addedCategories.innerHTML += categoryMarkup;
  }
}

cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  hideAddLinkPanel();
});

function displayLinks() {
  linkList.innerHTML = "";
  let index = 0;
  for (let link of links) {
    let markup = `
      <div class="panel link">
        <div class="link-options">
          <button class="btn-sm" onclick=editLink(${index})>Edit</button>
          <button class="btn-sm" id="cancelButton" onclick=deleteLink(${index})>Delete</button>
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
    index++;
  }
}

function deleteLink(index) {
  links.splice(index, 1);
  displayLinks();
}

function editLink(index) {
  editIndex = index;
  linkTitle.value = links[index].title;
  linkUrl.value = links[index].url;
  linkCategories = links[index].categories;
  showAddLinkPanel();
}
