const userName = document.querySelector('.name-btn');
let inputName = document.querySelector('.name-inpt');
let saveName = document.querySelector('.save-text');

if (localStorage.getItem('name') === null) {
  alert(`Cохраненное имя отсутствует`);
} else {
  alert(`Cохраненное имя: ${localStorage.getItem('name')}`);
}

userName.addEventListener('click', function() {
 
  localStorage.setItem('name', inputName.value);
  saveName.innerHTML = `Cохраненное имя: ${localStorage.getItem('name')}`; 

  inputName.value = ' ';
});

