const input = document.querySelector("#txt");
const submitbutton=document.querySelector(".submit_btn");
const inputform=document.querySelector(".input_form");
const todolist=document.querySelector(".todo_list");
const todolistul=document.querySelectorAll(".todo_list ul")
const clearbtn=document.querySelector(".clearall");
const inputsubmit=document.querySelector(".Submit");
const inputclear=document.querySelector(".clear");
console.log(todolistul)
inputform.addEventListener("submit",(e)=>
{
  e.preventDefault();
  const inputval=input.value;
  console.log(inputval);
  input.value="";
  const newul=document.createElement("ul");
  const insidenewul=`<li>${inputval}</li>
  <div class="controls">
    <button class="Submit">Submit</button>
    <button class="clear">Clear</button>
  </div>`;
  newul.innerHTML=insidenewul;
  todolist.append(newul);
  })
todolist.addEventListener("click",(e)=>
{
  if(e.target.classList.contains("Submit"))
  {
    const todocontent=e.target.parentNode.previousElementSibling;
    todocontent.style.textDecoration="line-through";
  }
  if (e.target.classList.contains("clear")) {
    const todocontent=e.target.parentNode.parentNode;
    todocontent.style.display="none";
  }
})
clearbtn.addEventListener("click",()=>
{
  let todoul=todolist.children
  console.log(todoul);
  Array.from(todoul).forEach(element => {
    element.style.display="none";
  });
})
