
// Dropdown Menu
const dropDownBtn = document.querySelector('#dropdown-btn');
const dropDownMenu = document.querySelector('.dropdown-menu');
const hidden =document.querySelector('.hidden')

dropDownBtn.addEventListener('click', function(){
    dropDownMenu.classList.toggle('hidden');
    console.log('clicked')
});