const searchToDos = document.querySelector('.search-todos');
const toDoList = document.querySelector('.todo-list');
const addToDos = document.querySelector('.add-todo');
const items = document.querySelectorAll('toDoList[li]');
const error = document.querySelector('.error');


// FUNCTIONS

// create a todo item
const createToDoItem = (text) => {
  const html = `
      <li class="list-group-item mb-1 rounded d-flex justify-content-between align-items-center">
      <span>${text}</span>
      <select class="choose-priority rounded">
          <option class="low" value="low">LOW</option>
          <option class="medium" value="medium">MEDIUM</option>
          <option class="high" value="high">HIGH</option>
      </select>
      <i class="far fa-trash-alt delete"></i>
      </li>    
  `;
  toDoList.innerHTML += html;
};


// EVENT LISTENERS

// filter todo items based on search query
searchToDos.addEventListener('input', (e) => {
  let query = e.target.value.toLowerCase();

  let items = Array.from(toDoList.children);

  items.forEach((item) => {
    let itemText = item.textContent.trim().toLowerCase();

    if (!itemText.includes(query)) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
});


// add a todo item
addToDos.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = addToDos.search.value;
  if (text) {
    createToDoItem(text);
  }
  addToDos.reset();
});


// listen for length of add item input field
addToDos.addEventListener('input', (e) => {
  const inputLength = e.target.value.length;
  console.log(inputLength);
  inputLength > 39
    ? error.classList.remove('hidden')
    : error.classList.add('hidden');
});


// delete a todo item
toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const parent = e.target.parentElement;
    parent.remove();
  }
});
