
const userInputs = document.querySelectorAll("#userInput input");
const myList = document.getElementById("myList");
let myPTexts = document.querySelectorAll("#myList p");

function display(){

    const myDt = document.createElement("h1").textContent = userInputs[0].value;
    const myDd = document.createElement("h2").textContent = userInputs[1].value;
    const myP = document.createElement("p");
    myP.textContent = `${myDt}: ${myDd}`;
    myList.append(myP);
    myPTexts = document.querySelectorAll("#myList p");


    userInputs.forEach(item => {
        item.value = "";
    });


    myPTexts.forEach(element => {
        element.addEventListener("click", event=>{
            event.target.textContent = "";
        });
    });



}


