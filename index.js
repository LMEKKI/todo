const todo_section = document.querySelector(".todo_section");
const todo_input = document.querySelector("#todo_input");
const addBtn = document.querySelector("#addBtn");
const numOfTodoText = document.querySelector(".num_of_todo");
let numOfTodo = 0;
let numOfTodoCompleted = 0;
function numOfTodoCompletedminus() {
  numOfTodoCompleted--;
}

function numOfTodoCompletedPlus(p) {
  numOfTodoCompleted++;
}

function numOfTodominus() {
  numOfTodo -= 1;
}

function numOfTodoPlus(p) {
  numOfTodo++;
}
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
  numOfTodoText.textContent = `${numOfTodoCompleted} sur ${numOfTodo}`;

  deleteTodo.addEventListener("click", (e) => {
    e.preventDefault(); // Cancel the native event
    e.stopPropagation(); // Don't bubble/capture the event any further
    numOfTodominus();
    todoDiv.remove();
    numOfTodoText.textContent = `${numOfTodoCompleted} sur ${numOfTodo}`;
  });

  completedTodo.addEventListener("click", (e) => {
    e.preventDefault(); // Cancel the native event
    e.stopPropagation(); // Don't bubble/capture the event any further
    if (todoText.classList.contains("completed") && numOfTodoCompleted > 0) {
      numOfTodoCompletedminus();
    } else {
      numOfTodoCompletedPlus();
    }
    todoText.classList.toggle("completed");
    numOfTodoText.textContent = `${numOfTodoCompleted} sur ${numOfTodo}`;
  });

  todo_section.appendChild(todoDiv);
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Cancel the native event
  e.stopPropagation(); // Don't bubble/capture the event any further
  numOfTodoPlus();

  creatTodo();
});
