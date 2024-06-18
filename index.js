const todoSection = document.querySelector(".todo_section");
const todoInput = document.querySelector("#todo_input");
const addBtn = document.querySelector("#addBtn");
const nbrOfTodoDone = document.querySelector(".nbrOfTodoDone");
let allMyTodos = [];
let todoDone = 0;

addGlobalEventListener("click", ".deleteBtn", (e) => {
    removeTodo(e);
    updateTodoCounter();
});

addGlobalEventListener("click", ".completedBtn", (e) => {
    toggleComplete(e);
    updateTodoCounter();
});

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    });
}

function removeTodo(e) {
    const todoElement = e.target.parentElement;
    const todoId = todoElement.id;

    const todoIndex = allMyTodos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
        allMyTodos.splice(todoIndex, 1);
    }

    todoElement.remove();

    if (todoElement.classList.contains("completed") && todoDone > 0) {
        todoDone--;
    }

    console.log(allMyTodos);
}

function toggleComplete(e) {
    const todoElement = e.target.parentElement;

    if (todoElement.classList.contains("completed")) {
        todoElement.classList.remove("completed");
        if (todoDone > 0) todoDone--;
    } else {
        todoElement.classList.add("completed");
        if (todoDone < allMyTodos.length) todoDone++;
    }
}

function createTodo() {
    const uniqueId = Math.random().toString(36).substring(2, 9);

    const todoDiv = document.createElement("div");
    const completedBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const todoText = document.createElement("p");

    todoDiv.classList.add("todoDiv");
    todoDiv.setAttribute("id", uniqueId);
    completedBtn.classList.add("completedBtn");
    deleteBtn.classList.add("deleteBtn");
    todoText.classList.add("todoText");

    completedBtn.textContent = "Completed";
    deleteBtn.textContent = "Delete Todo";
    todoText.textContent = todoInput.value;

    todoDiv.append(todoText, completedBtn, deleteBtn);
    todoSection.appendChild(todoDiv);

    allMyTodos.push({ id: uniqueId, element: todoDiv });

    updateTodoCounter();
}

function updateTodoCounter() {
    nbrOfTodoDone.textContent = ` ${todoDone} / ${allMyTodos.length}`;
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTodo();
    console.log(allMyTodos);
});
