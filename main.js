const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value == '' || emailInput.value == ''){
        msg.innerHTML='Please fill all';
        msg.classList.add('error');
        setTimeout(() => msg.remove(),3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        userList.appendChild(li);
      window.localStorage.setItem(nameInput.value,emailInput.value);

      let user ={
        name : nameInput.value,
        email : emailInput.value
    }
    

    var user_serialize = JSON.stringify(user);
    localStorage.setItem('user',user_serialize);
    console.log(user_serialize);
        nameInput.value='';
        emailInput.value='';
        
    }
    
}

var result = JSON.parse(localStorage.getItem('user'));
console.log('retrieved data Object: ',result );

