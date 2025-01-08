let itemsArray = [];
let doneShow = [];
let doneNotShow = [];

let itemRecord = '';

const input = document.getElementById('inpt');
const button = document.getElementById('btn');

const showAllButton = document.querySelector('.show-all');
let showAllContent = document.querySelector('.all-content');
let todoList = document.getElementById('todo-list');

const showDoneButton = document.querySelector('.show-done');
let doneContent = document.querySelector('.done-content');
let doneList = document.getElementById('done-list');

const showDoneNotButton = document.querySelector('.show-not-done');
let doneNotContent = document.querySelector('.done-not-content');
let doneNotList = document.getElementById('done-not-list');

let arrToDo = [
  {
    name: 'Проснуться',
    completed: false
  },
  {
    name: 'Потянуться',
    completed: false
  },
  {
    name: 'Встать',
    completed: false
  },
  {
    name: 'Умыться',
    completed: false
  },
  {
    name: 'Накормить кошку Марусю',
    completed: false
  },
  {
    name: 'Погулять с собакой Люсей',
    completed: false
  }
];

itemsArray = arrToDo;

function createTodoItem(obj) {
  let item = document.createElement('li');
  const buttonGroup = document.createElement('div');
  const doneButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  itemRecord = obj.name;

  item.classList.add('list-item');
  buttonGroup.classList.add('btn-group');
  doneButton.classList.add('btn-done');
  doneButton.textContent = 'Готово';
  deleteButton.classList.add('btn-delete');
  deleteButton.textContent = 'Удалить';

  buttonGroup.append(doneButton);
  buttonGroup.append(deleteButton);
  item.append(itemRecord, buttonGroup);
  todoList.append(item);

  if (obj.name === '') {
    alert('Пуcтая строка. Поле обязательно к заполнению!');
    item.remove();
  }

  doneNotShow = itemsArray;

  doneButton.addEventListener('click', function() {
    item.classList.toggle('list-item-success');
    obj.completed = true;
    itemRecord =' - выполнено';
    item.append(itemRecord, buttonGroup);
    doneShow.push(obj); 
    
    doneNotShow = itemsArray.filter(obj => obj.completed !== true);
    
    doneButton.disabled = true;
  });

  deleteButton.addEventListener('click', function() {
    if (confirm('Вы уверены?')) {
      item.remove();
    }
  });

  return {
    item,
    doneButton,
    deleteButton,
    doneShow,
    doneNotShow
  };
}

function appListToDo(arr) {
  input.addEventListener('input', function() {
    arr.name = input.value;
  });
  
  button.addEventListener('click', function(e) {
    e.preventDefault();
    todoItem = createTodoItem(arr);
    itemsArray.push(arr);          

    input.value = '';
  });
}

//---------------------------main-------------------------------------

let itemObject = {
  name: input.value,
  completed: false
  };

appListToDo(itemObject);

//------------------------Список запланированных дел---------------


showAllButton.addEventListener('click', function() {
  
  if (doneContent.classList.contains('active')) {
    doneContent.classList.remove('active');
    doneShow = [];
  }

  if (doneNotContent.classList.contains('active')) {
    doneNotContent.classList.remove('active');
    doneNotShow = [];
  }

  showAllContent.classList.add('active');

  for (const items of itemsArray) {            
    let todoItem = createTodoItem(items);
    todoList.append(todoItem.item);
    showAllContent.append(todoList);
  }
});

//--------------------Список выполненных дел------------------------

showDoneButton.addEventListener('click', function() { 

  if (showAllContent.classList.contains('active')) {
    showAllContent.classList.remove('active');
    itemsArray = [];
  }

  if (doneNotContent.classList.contains('active')) {
    doneNotContent.classList.remove('active');
    doneNotShow = [];
  }

  doneContent.classList.add('active');

  for (const items of doneShow) {            
    let doneItem = document.createElement('li');
    doneItem.classList.add('list-item');
    doneItem.append(items.name);
    doneList.append(doneItem);
    doneContent.append(doneList);
  }
});

//---------------------Список невыполненных дел-------------------------

showDoneNotButton.addEventListener('click', function() {

  if (showAllContent.classList.contains('active')) {
    showAllContent.classList.remove('active');
    itemsArray = [];
  }

  if (doneContent.classList.contains('active')) {
    doneContent.classList.remove('active');
    doneShow = [];
  }

  doneNotContent.classList.add('active');

  for (const items of doneNotShow) {            
    let doneNotItem = document.createElement('li');
    doneNotItem.classList.add('list-item');
    doneNotItem.append(items.name);
    doneNotList.append(doneNotItem);
    doneNotContent.append(doneNotList);
  }
});
