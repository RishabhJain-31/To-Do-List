const inputBox =document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todolist=document.getElementById('todolist');

const addTask = () => {
  const inputText= inputBox.value.trim();
  if(inputText.length<=0){
    alert("You Must Write Something To Add");
    return false; 
  }
//creating p tag DOM MANIPULATION
const li=document.createElement("li");
const p=document.createElement("p");
p.innerHTML=inputText;
li.appendChild(p);
todolist.appendChild(li);

const editBtn=document.createElement("button");
editBtn.innerText="Edit";
li.appendChild(editBtn);

//craeting deletebtn by dom mani
const deleteBtn=document.createElement("button");
deleteBtn.innerText="Remove";
li.appendChild(deleteBtn);

todolist.appendChild(li);
inputBox.value="";
}
const updateTodo=(e)=>{
  if(e.target.innerHTML==='Remove'){
    todolist.removeChild(e.target.parentElement);
  }

  if(e.target.innerHTML==='Edit'){
    inputBox.value=e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    todolist.removeChild(e.target.parentElement);
  }
}
addBtn.addEventListener('click',addTask);
todolist.addEventListener('click',updateTodo);
inputBox.addEventListener('keydown',function(e){
  if(e.key==='Enter'){
    addTask();
  }
})