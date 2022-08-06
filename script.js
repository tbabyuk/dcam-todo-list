
const addToDoForm = document.querySelector(".add-todo");
const toDoList = document.querySelector(".todo-list");


const createToDoItem = (text) => {
    const html = `
    <li class="list-group-item">${text}</li>
    `;
    toDoList.innerHTML += html;
}



addToDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = addToDoForm.search.value;
    createToDoItem(text);
    addToDoForm.reset();
})