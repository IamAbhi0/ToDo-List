let input_task=document.getElementById(`typetask`)
    
let firsttask_complete=document.querySelector(".firsttask").innerText
//  console.log(`${inputTask.value}`);

 
// document.getElementById(`click_add`).addEventListener("click", function(e){
//    console.log("clicked");
//     document.querySelector(".firsttask").innerText=`${input_task.value}`
    
//     // (input_task.value).append(".firsttask")
//     input_task.value=""


// if (firsttask_complete==="."){

// document.getElementById(`click_add`).addEventListener("click", function(e){
    
//     // console.log(inputTask.value);
//     console.log("clicked");
//     document.querySelector(".secondtask").innerText=`${input_task.value}`
    


   
   

// document.getElementById(`click_add`).addEventListener("click", function(e){
    
//     // console.log(inputTask.value);
//     console.log("clicked");
//     document.querySelector(".thirdtask").innerText=`${input_task.value}`
    
// })
// document.getElementById(`click_add`).addEventListener("click", function(e){
    
//     // console.log(inputTask.value);
//     console.log("clicked");
//     document.querySelector(".fourthtask").innerText=`${input_task.value}`
let taskcontainer=document.querySelector(".firsttask")  

document.getElementById(`click_add`).addEventListener("click", function(e){
let task=document.createElement("div")
task.classList.add(`task`);

let li=document.createElement(`li`)
li.innerText=`${input_task.value}`
task.appendChild(li)




let checkbox=document.createElement(`button`)
// checkbox.innerHTML=`<i class="fa-solid fa-check"> </i>`
checkbox.classList.add(`checktask`)
// document.querySelector(".task button").type=`checkbox`
task.appendChild(checkbox)


let deletebox=document.createElement(`button`)
// deletebox.innerHTML=`<i class="fa-solid fa-trash-can"> </i>`
deletebox.classList.add(`deletetask`)
task.appendChild(deletebox)

  




// let newdiv=document.createElement(`div`)
// newdiv.classList.add(`newdiv_buttons`)
// newdiv_buttons.append(deletebox)
// newdiv_buttons.append(checkbox) 


checkbox.classList.add(`button_position`)
deletebox.classList.add(`button_position`)


if (input_task.value==""){
    alert("Type task")
}

else{
    taskcontainer.append(task)
    input_task.value=""

    // document.getElementsByClassName("checktask")[0].addEventListener("click", function(){
    //             console.log("!111111111111111111111111111111!");
    //  document.getElementsByClassName("checktask")[0].parentElement.style.textDecoration="line-through";

    // let firstcheckbox=document.getElementsByClassName("checktask")[0]
    // firstcheckbox.classList.toggle("firstboxdone")
    checkbox.addEventListener("click", function(){

     checkbox.parentElement.style.textDecoration="line-through";
     checkbox.style.backgroundColor=`#76ff7a` 
    })
     
     


    deletebox.addEventListener("click",function (e){
        console.log("text delete");
        
        let text_delete= e.target ;
        text_delete.parentElement.remove();
    })
        
        
        
        // text_delete.parentElement.parentElement.remove();
    }
})
    // let firstcheckbox=document.getElementsByClassName("checktask")
    // firstcheckbox.classList.toggle("firstboxdone")


    let date = new Date().toLocaleDateString();
console.log(date)



    // document.getElementsByClassName("checktask")[1].addEventListener("click", function(){
    // console.log("!22222222222222222222222222!");
    // document.getElementsByClassName("checktask")[1].parentElement.style.textDecoration="line-through";       
                
    //     let secondcheckbox=document.getElementsByClassName("checktask")[1]
    //     secondcheckbox.classList.toggle("color_task02")
    


    // })
    