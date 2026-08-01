const todo = [];

function app() {
    const inputButton = document.querySelector(".addbox");
    const add = inputButton.value;

    todo.push(add);

    inputButton.value = "";

    displayTodos();
}

function displayTodos() {
    let html = "";

    for (let i = 0; i < todo.length; i++) {
        html += `<p>${todo[i]}</p>`;
    }

    document.querySelector(".result").innerHTML =html;
}