const todo_section = document.querySelector(".todo_section");
const todo_input = document.querySelector("#todo_input");
const addBtn = document.querySelector("#addBtn");
const nbrOfTodoDone = document.querySelector(".nbrOfTodoDone");
allMyTodos = [];
// genere un ID unique  pour les todoDiv( ne pas depasser 10000 risque de collission)
const uniqueId = Math.random().toString(36).substring(2, 9);

// init html variables
let todoDiv;
let completedBtn;
let deleteBtn;
let todoText;
addGlobalEventListener("click", ".deleteBtn", (e) => {
  removeTodo(e);
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    e.preventDefault();

    if (e.target.matches(selector)) callback(e);
  });
}

function removeTodo(e) {
  e.target.parentElement.remove();
}
function creatTodo() {
  // init html structure
  todoDiv = document.createElement("div");
  completedBtn = document.createElement("button");
  deleteBtn = document.createElement("button");
  todoText = document.createElement("p");
  // add class to all html elements
  todoDiv.classList.add("todoDiv");
  todoDiv.setAttribute("id", uniqueId);
  completedBtn.classList.add("completedBtn");
  deleteBtn.classList.add("deleteBtn");
  todoText.classList.add("todoText");
  // add text value on some html structure
  completedBtn.textContent = "Completed";
  deleteBtn.textContent = "delete Todo";
  todoText.textContent = todo_input.value;
  nbrOfTodoDone.textContent = allMyTodos.length + 1;
  // append all html elements
  todoDiv.appendChild(todoText);
  todoDiv.appendChild(completedBtn);
  todoDiv.appendChild(deleteBtn);
  // append todoDiv   this contain all todo element  1 todo = 1 div
  todo_section.appendChild(todoDiv);
  // add created todo to my table
  allMyTodos.push(todoDiv);
}

// btn to creat todo
addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancel the native event
  e.stopPropagation(); // Don't bubble/capture the event any further

  creatTodo();

  console.log(allMyTodos);
});
