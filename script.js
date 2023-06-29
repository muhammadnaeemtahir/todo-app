const form = document.getElementById("inputForm");
const userInput = document.getElementById("userInput");
const listGroup = document.querySelector(".list-group");

// function checks if the list is empty
function updateEmptyListMessage() {
  if (listGroup.childNodes.length === 0) {
    let emptyLi = document.createElement("p");
    emptyLi.className =
      "text-center text-secondary pb-2 border-bottom border-secondary";
    emptyLi.setAttribute("id", "empty-list");
    emptyLi.innerHTML = `No items found.`;
    listGroup.appendChild(emptyLi);
  } else {
    let emptyLi = document.querySelector("#empty-list");
    if (emptyLi) {
      emptyLi.remove();
    }
  }
}

// When the form is submitted, it appends the new item in the list group
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userInput.value) {
    let listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `<p class="text-start">${userInput.value}</p> <button class="btn btn-danger" onclick="deleteLi(this)"><i class="fa-solid fa-trash"></i></button>`;

    listGroup.appendChild(listItem);

    userInput.value = userInput.value;
    updateEmptyListMessage();
  }
});

function deleteLi(currentElement) {
  currentElement.parentNode.remove();
  updateEmptyListMessage();
}

updateEmptyListMessage();
