todo_section = document.querySelector(".todo_section");
todo_input = document.querySelector("#todo_input");
addBtn = document.querySelector("#addBtn");

function creatTodo() {
  let todoDiv = document.createElement("div");
  let todotext = document.createElement("p");
  todotext.textContent = todo_input.value;
  todoDiv.appendChild(todotext);
  todo_section.appendChild(todoDiv);
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancel the native event
  e.stopPropagation(); // Don't bubble/capture the event any further
  creatTodo();
});
