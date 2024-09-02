
const myPTexts = document.querySelectorAll("#myDisplay p");
const myList = ["rock", "paper", "scissors"];
let comp = 0;
let user = 0;
let userMessage = "";
let comMessage = "";

function random(){
    return Math.floor(Math.random() * 3);
}

function display(item){
    const computer = myList[random()];

    if((comp+user) >= 100){
        comp = 0;
        user = 0;
        if(user > 50){
            myPTexts[0].textContent = "You have won the Game";
            myPTexts[0].style.color = "blue";
        }
        else if(comp > 50){
            myPTexts[0].textContent = "You have Lost the Game";
            myPTexts[0].style.color = "red";
        }
        else if(comp === user){
            myPTexts[0].textContent = "No winner It'S a TIE";
            myPTexts[0].style.color = "yellow";
        }
    }


    else if(item === computer){
        myPTexts[0].textContent = "IT'S A TIE";
        myPTexts[0].style.color = "green";
        console.log(`Computer: ${computer} : User: ${item}`);
    }
    else if(item !== computer){
        switch(computer){
            case "rock":
                if(item === "paper"){
                    user ++;
                    myPTexts[0].textContent = "You Won";
                    myPTexts[0].style.color = "blue";
                }
                else{
                    comp ++;
                    myPTexts[0].textContent = "You Lost";
                    myPTexts[0].style.color = "red";
                }
                break;
            case "paper":
                if(item === "scissors"){
                    user ++;
                    myPTexts[0].textContent = "You Won";
                    myPTexts[0].style.color = "blue";
                }
                else{
                    comp ++;
                    myPTexts[0].textContent = "You Lost";
                    myPTexts[0].style.color = "red";
                }
                break;
            case "scissors":
                if(item === "paper"){
                    comp ++;
                    myPTexts[0].textContent = "You Lost";
                    myPTexts[0].style.color = "red";
                }
                else{
                    user ++;
                    myPTexts[0].textContent = "You Won";
                    myPTexts[0].style.color = "blue";
                }
                break;
        }
        myPTexts[1].textContent = `User: Total Wins ${user} times ${userMessage}`;
        myPTexts[2].textContent = `Computer: Total Wins ${comp} times ${comMessage}`;
    }


}



