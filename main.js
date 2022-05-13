var form =document.getElementById('user-form');
var button = document.getElementById('input[type="submit"]');

//get previous local storage after refresh page
      var  keys = Object.keys(localStorage),
        i = keys.length;

      while ( i-- ) {
        var list = document.createElement('li');
        var refreshValue = JSON.parse(localStorage.getItem(keys[i])); 
        var itemshow1 = document.getElementById('userLists');
        itemshow1.appendChild(list);  
        list.innerHTML='name:'+refreshValue.name+', age:'+refreshValue.age+', email:'+refreshValue.email;
       
        //Add edit button
        var edit=document.createElement('button');
        edit.appendChild(document.createTextNode('Edit'));
        edit.className='email';
        edit.id=refreshValue.email;
        list.appendChild(edit);

        //Add Delete button
        var deletebtn = document.createElement('button');
        deletebtn.appendChild(document.createTextNode('Delete'));
        deletebtn.className='delete';
        deletebtn.id=refreshValue.email;
        list.appendChild(deletebtn);
        console.log(list);
    }

//add new user to local storage 
  
form.addEventListener('submit',addUser);

function addUser(e){
    e.preventDefault();
    var name = document.getElementById('input1').value;
    var age = document.getElementById('input2').value;
    var email = document.getElementById('input3').value;
    
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('Name: '+name+', Age: '+age+', Email: '+email));

    //Edit button
    var edit=document.createElement('button');
    edit.appendChild(document.createTextNode('Edit'));
    edit.className='email';
    edit.id=email;
    li.appendChild(edit);

    //Delete button
    var deletebtn = document.createElement('button');
    deletebtn.appendChild(document.createTextNode('Delete'));
    deletebtn.className='delete';
    deletebtn.id=email;
    li.appendChild(deletebtn);

    var itemshow = document.getElementById('userLists');
    itemshow.appendChild(li);

    //check if same user is exist
    if(localStorage.getItem(email)){
        alert('User already exist');
        window.location.reload();
    }
    //save to local storage
    var object =JSON.stringify({name,age,email});
    localStorage.setItem(email,object);
   
    document.getElementById('input1').value='';
    document.getElementById('input2').value='';
    document.getElementById('input3').value='';
    window.location.reload();

}
//Delete
var itemLister = document.getElementById('userLists');
itemLister.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
    var li=e.target.parentElement;
    itemLister.removeChild(li);
    localStorage.removeItem(e.target.id);
    }
}
//Edit
itemLister.addEventListener('click',editItem);

function editItem(e){
   if(e.target.classList.contains('email')){
       var editvalue=JSON.parse(localStorage.getItem(e.target.id));
       document.getElementById('input1').value=editvalue.name;
       document.getElementById('input2').value=editvalue.age;
       document.getElementById('input3').value=editvalue.email;
       localStorage.removeItem(editvalue.email);
    }
}