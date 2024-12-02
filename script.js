
let add=document.getElementById("button1");
let inputfield=document.getElementById("input1");
let space=document.getElementById("list1");
let filter=document.getElementById("select");


add.addEventListener("click",()=>{
    let newtask=document.createElement("newtask");
    newtask.innerText=inputfield.value;
    space.appendChild(newtask);
    inputfield.value="";
    newtask.addEventListener("click",()=>{
        newtask.classList.toggle("complete");  
        newtask.classList.toggle("incomplete");
       
        
        if (newtask.classList.contains("complete")) {
          newtask.style.textDecoration = "line-through";
          newtask.style.color = "gray";}

       
          else if (newtask.classList.contains("incomplete")) {
            newtask.style.textDecoration = "none";
            newtask.style.color = "black";
            
          }
      
          
     else  {
          newtask.style.textDecoration = "none";
          newtask.style.color = "black";
        }



       
       
       
       
    })



});

filter.addEventListener("change", () => {
    const filterValue = filter.value;  
    const tasks = space.children;

    Array.from(tasks).forEach((task) => {
        if (filterValue === "all") {
            task.style.display = "block"; // Show all tasks
        } else if (filterValue === "complete") {
            task.style.display = task.classList.contains("complete") ? "block" : "none";
        } else if (filterValue === "incomplete") {
            task.style.display = task.classList.contains("incomplete") ? "block" : "none";
        }
      
            
        
    });
});