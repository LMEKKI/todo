const todo_section = document.querySelector(".todo_section");
const todo_input = document.querySelector("#todo_input");
const addBtn = document.querySelector("#addBtn");
const numOfTodoText = document.querySelector(".num_of_todo");
allMyTodos = [];

// init html variables
let todoDiv;
let completedBtn;
let deleteBtn;
let todoText;

// function deletCurrentTodo(currentTarget) {
//   Event.preventDefault(); // Cancel the native event
//   Event.stopPropagation();
//   numOfTodominus();
//   p.remove();
//   numOfTodoText.textContent = `${numOfTodoCompleted} sur ${numOfTodo}`;
// }
function creatTodo() {
  // init html structure
  todoDiv = document.createElement("div");
  completedBtn = document.createElement("button");
  deleteBtn = document.createElement("button");
  todoText = document.createElement("p");
  // add class to all html elements
  todoDiv.classList.add("todoDiv");
  completedBtn.classList.add("completedBtn");
  deleteBtn.classList.add("deleteBtn");
  todoText.classList.add("todoText");
  // add text value on some html structure
  completedBtn.textContent = "Completed";
  deleteBtn.textContent = "delete Todo";
  todoText.textContent = todo_input.value;
  // append all html elements
  todoDiv.appendChild(todoText);
  todoDiv.appendChild(completedBtn);
  todoDiv.appendChild(deleteBtn);

  // adding EventListener on All todo Buttons
  completedBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Cancel the native event
    e.stopPropagation(); // Don't bubble/capture the event any further
    if (todoText.classList.contains("completed") && numOfTodoCompleted > 0) {
    } else {
    }
    todoText.classList.toggle("completed");
  });

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
