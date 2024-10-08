let div_to_add_task=document.getElementById(`List_of_task_todo`)


document.addEventListener('DOMContentLoaded', ()=>{



let task_to_do=JSON.parse(localStorage.getItem(`task_to_do`))  || []

task_to_do.forEach(task=> renderTask(task)) // Rendering data from local storage...........

function renderTask(task){
    // console.log(task);

    
    console.log(task.task);
    let list_of_task=task.task
    
   const div_tasks=document.createElement(`li`)
   div_tasks.textContent=list_of_task
div_tasks.classList.add(`tasks_of_the_day`)

// const checkbox_oftask=div_tasks.appendChild(`#checkbox_of_task`)

   div_tasks.innerHTML=`
     
   <span id="check_task">
   
   ${task.task}</span>

   <div id="buttons">
 
   </div> `

//  
// <img src="icons/icons8-dot-30.png" alt="" srcset="">
// <span id="check_task">${task.task}</span>

    // <button id="delete_button" >Delete</button>
    // <button id="complete_button" type="checkbox"></button> 

   div_to_add_task.appendChild(div_tasks)
     let checkbox=document.createElement(`button`)
     checkbox.classList.add(`checkbox_of_task`)
     let deletebox=document.createElement(`button`)
     deletebox.classList.add(`deletebox_of_task`)
     deletebox.innerText="Delete"

     document.querySelector(`#buttons`).appendChild(checkbox)

     checkbox.classList.add(`checkboxes`)
     deletebox.classList.add(`checkboxes`)
     
     div_tasks.appendChild(checkbox)
     div_tasks.appendChild(deletebox)



    
    

    
 

checkbox.addEventListener(`click`, ()=>{

    div_tasks.style.textDecoration="line-through"
    checkbox.classList.add(`task_completed`)

    // data.complete= "true"
    // savetasks()  })  
})

checkbox.addEventListener(`dblclick`,()=>{
  div_tasks.style.textDecoration=""
checkbox.classList.remove(`task_completed`)
})
   




deletebox.addEventListener(`click`,()=>{

   div_tasks.remove()
})
//    div_to_add_task.appendChild(checkbox)
}
    


document.getElementById("click_add").addEventListener("click",function(){
let todotask=document.getElementById("typetask")

let value=todotask.value

let list_of_todo=document.createElement(`li`)
list_of_todo.textContent=value


if(value==""){
return alert("Type something..")
}

else{
 todotask.value=""
}
// else{
// todotask.value="";

// }


const data={
    id:Date.now(),
    task:value,
    complete:false

}

task_to_do.push(data)
savetasks();
renderTask(data)

// let main_div=document.querySelectorAll(".tasks_of_the_day")

// main_div.addEventListener(`click`, () =>{
//    data.complete = !data.complete })   







//   savetasks()
})


function savetasks(){

    localStorage.setItem(`task_to_do`,JSON.stringify(task_to_do));
}


  })







//   div_tasks.addEventListener(`click`, (e)=>{

//     if (e.target.tagName===`BUTTON`) return;
//       data.complete= ! data.complete
//       console.log(e);
      
  
// })   
//      console.log(e.target);
     

// if (data.complete=="true"){

//  document.getElementById(`check_task`).style.textDecoration="line-through"
// }

 


// let checkboxoftask




// let divof_task=document.getElementsByClassName("todono")

// let newdiv=document.createElement(`div`)
// newdiv.appendChild(list_of_todo)
// console.log(newdiv);

// let task_in_local=JSON.parse(``)













 


//  let checkbox=document.createElement(`button`)

//    checkbox.classList.add(`checkbox`)

//    let divofbuttons=document.querySelector("#buttons")

//    divofbuttons.appendChild(checkbox)




// let button_of_completed=document.querySelector("#complete_button")
// button_of_completed.addEventListener("click", ()=>{

//      document.getElementById(`check_task`).style.textDecoration="line-through"  
     
//      document.getElementById(`complete_button`).style.backgroundColor="#73EC8B"
     
     
//    })
// document.getElementById(`delete_button`).addEventListener("click", ()=>{

//     console.log("kr delete bc...");
    
     
//    })



