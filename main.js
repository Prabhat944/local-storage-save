const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const lastInput = document.querySelector('#last');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value == '' || lastInput.value == ''){
        msg.innerHTML='Please fill all';
        msg.classList.add('error');
        
    }else{
     const li=document.createElement('li');
     li.appendChild(document.createTextNode(`${nameInput.value} ${lastInput.value}`));
     userList.appendChild(li);
     localStorage.setItem(nameInput.value,lastInput.value);
     nameInput.value='';
     lastInput.value='';
    }
}
