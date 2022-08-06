
const addToDoForm = document.querySelector(".add-todo");
const toDoList = document.querySelector(".todo-list");
const searchToDos = document.querySelector(".search-todos");
const items = document.querySelectorAll("toDoList[li]")


// filtering todo items based on search
searchToDos.addEventListener('input', (e) => {
    let query = e.target.value.toLowerCase();

    let items = Array.from(toDoList.children);

    items.forEach(item => {
        let itemText = item.textContent.trim().toLowerCase();

        if(!itemText.includes(query)) {
            item.classList.add('hidden')
        } else {
            item.classList.remove('hidden')
        }
    })
})

// creating template for todo item
const createToDoItem = (text) => {
    const html = `
    <li class="list-group-item mb-1 rounded d-flex justify-content-between align-items-center">
    <span>${text}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>    
`;
    toDoList.innerHTML += html;
}


// creating a todo item
addToDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = addToDoForm.search.value;
    if(text) {
        createToDoItem(text);
    }
    addToDoForm.reset();
});


// deleting a todo item
toDoList.addEventListener('click', (e) => {
    if(e.target.classList.contains("delete")) {
        const parent = e.target.parentElement;
        parent.remove();
    }
})