const todo_section = document.querySelector(".todo_section");
const todo_input = document.querySelector("#todo_input");
const addBtn = document.querySelector("#addBtn");

function creatTodo() {
  let todoDiv = document.createElement("div");
  let completedTodo = document.createElement("button");
  let deleteTodo = document.createElement("button");
  let todoText = document.createElement("p");

  todoDiv.classList.add("todoDiv");
  completedTodo.classList.add("completedTodo");
  deleteTodo.classList.add("deleteTodo");
  completedTodo.textContent = "Completed";
  deleteTodo.textContent = "delete Todo";

  todoText.classList.add("todoText");
  todoText.textContent = todo_input.value;
  todoDiv.appendChild(todoText);
  todoDiv.appendChild(completedTodo);
  todoDiv.appendChild(deleteTodo);
  todo_section.appendChild(todoDiv);
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancel the native event
  e.stopPropagation(); // Don't bubble/capture the event any further
  creatTodo();
});

document.addEventListener("click", function (e) {
  let t = e.target.querySelector("todoDiv");
  const todo = e.target.closets("completedTodo");
  e.preventDefault(); // Cancel the native event
  e.stopPropagation(); // Don't bubble/capture the event any further
  if (todo) {
    todo.removeChild(t);
  }
});
