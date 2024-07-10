function createAnElement(element) {
  return document.createElement(element);
}
function addText(element, text) {
  return (element.innerText = text);
}
function appendChild(child, parent) {
  return parent.appendChild(child);
}

function select(selector) {
  return document.querySelector(selector);
}

function listen(element, event, callback) {
  return element.addEventListener(event, callback);
}

function addAttribute(element, attribute, content) {
  return element.setAttribute(attribute, content);
}
function toggleChecked(element, classes) {
  return element.classList.toggle(classes);
}

const shoppingList = [];

const ol = select("ol");

listen(document, "DOMContentLoaded", displayItems);

function displayItems() {
  ol.innerHTML = "";
  shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
  const li = createAnElement("li");
  addText(li, item);
  appendChild(li, ol);
  listen(li, "click", toggleChecked);
  function toggleChecked() {
    {
      li.classList.toggle("checked");
    }
  }
  listen(li, "dblclick", editItem);
  function editItem() {
    addAttribute(li, "contenteditable", true);
  }
}
const form = select("form");
listen(form, "submit", addItem);
function addItem(event) {
  event.preventDefault();
  shoppingList.push(event.target[0].value);
  displayItems();
  event.target.reset();
}
const deleteButton = select(".delete");
listen(deleteButton, "click", clearList);

function clearList() {
  shoppingList.length = 0;
  displayItems();
}
