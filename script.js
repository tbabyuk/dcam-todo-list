
const addToDoForm = document.querySelector(".add-todo");
const toDoList = document.querySelector(".todo-list");


const createToDoItem = (text) => {
    const html = `
    <li class="list-group-item mb-1 rounded d-flex justify-content-between align-items-center">
    <span>${text}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>    
`;
    toDoList.innerHTML += html;
}


addToDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = addToDoForm.search.value;
    if(text) {
        createToDoItem(text);
    }
    addToDoForm.reset();
});


toDoList.addEventListener('click', (e) => {
    if(e.target.classList.contains("delete")) {
        const parent = e.target.parentElement;
        parent.remove();
    }
})