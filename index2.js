


 const inputBox=document.getElementById("inputbox"); //accessing the "input" element.
const listContainer=document.getElementById("listcontainer") //accessing the "ul" list container.

function addTask(){
    if(inputBox.value===''){
        alert('enter any word');// when "Enter or Add" is pressed without typing any text in the input. 
    }
    else{

        let li=document.createElement("li");//"creating" a new li element
        li.innerHTML=inputBox.value;//"assigning" the input value into the li.
        listContainer.appendChild(li);//add this newly created li element to the ul as child.


        let span=document.createElement("span");
        span.innerHTML="O";//assigning "X" to the li.
        li.appendChild(span);//add this "span" to the li as child

        let Label=document.createElement("label");
        Label.innerHTML="\u00d7";//assigning "X" to the li.
        li.appendChild(Label);

        
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.style.color="orange";//if we click on "O" button then li element is color change and task is finished.
    }  

    if(e.target.tagName==="LABEL"){
        e.target.parentElement.remove();//if we click on "X" button then li element is removed.
    }
},false);
 
