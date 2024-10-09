const todoList = [{
  name :'make dinner',
  dueDate : '2024-10-23'},
  {name: 'wash dishes',
  dueDate : '2024-10-23'}];

renderTodoList()

function renderTodoList(){
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList [i];
  
    const{name,dueDate}= todoObject;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
     ";>Delete</button>
     ` /* generating HTML */
    todoListHTML+= html;
      };

    console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;};


function addTodo(){
const inputElement = document.querySelector(".js-name-input");
const name = inputElement.value; /* the value is the text in the text box */
const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

todoList.push({name,dueDate});



inputElement.value = '';/* to clear the input field after adding a new to-do item */
renderTodoList()
};
