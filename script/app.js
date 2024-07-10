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

const shoppingList = ["milk", "tea"];

const ol = select("ol");

listen(document, "DOMContentLoaded", displayItems);

function displayItems() {
  shoppingList.forEach(createAListItem);
}

function createAListItem(item) {
  const li = createAnElement("li");
  addText(li, item);
  appendChild(li, ol);
}
const form = select("form");
listen(form, "submit", addItem);
function addItem(event) {
  event.preventDefault();
  console.log("Hello");
}
