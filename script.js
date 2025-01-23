alert("Welcome to the game: Dicee!!🎲🎲 \nHave Fun✨✨");
let player1 = prompt("Please Enter Player1 name:");
let player2 = prompt("Please Enter Player2 name:");

document.querySelectorAll("div .playerName")[0].textContent = player1;
document.querySelectorAll("div .playerName")[1].textContent = player2;

let count1 = 0;
let count2 = 0;

function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImage1 = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".dice .img1").setAttribute("src",randomImage1);

    let randomImage2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".dice .img2").setAttribute("src",randomImage2);

    // 👇here below the winner is acc to the larger no on dice on that turn
    // if(randomNumber1 > randomNumber2){
    //     document.querySelector(".container h1").textContent = player1 + " Wins!🚩";
    // } else if(randomNumber1 < randomNumber2){
    //     document.querySelector(".container h1").textContent = player2 + " Wins!🚩";
    // } else {
    //     document.querySelector(".container h1").textContent = "Draw!🤝";
    // }

    // 🔴If you want the score to reset to 0 every time the web page is refreshed, you can simply 
    // initialize the count1 and count2 variables to 0 without retrieving them from localStorage.

    // let count1 = localStorage.getItem("count1") ? parseInt(localStorage.getItem("count1")) : 0;
    // let count2 = localStorage.getItem("count2") ? parseInt(localStorage.getItem("count2")) : 0;

    if(randomNumber1 > randomNumber2){
        count1++;
        //localStorage.setItem("count1", count1);
        document.querySelectorAll(".dice .scoreClass")[0].textContent = "Score: " + count1;
        document.querySelectorAll(".dice .scoreClass")[1].textContent = "Score: " + count2;
    }  else {
        count2++;
        //localStorage.setItem("count2",count2);
        document.querySelectorAll(".dice .scoreClass")[1].textContent = "Score: " + count2;
        document.querySelectorAll(".dice .scoreClass")[0].textContent = "Score: " + count1;
    }

    // 👇here the winner is according to total score i.e. in total 4 dice roll, who is 
    // winner overall !!
    if(count1 > count2){
        document.querySelector(".container h1").textContent = player1 + " Wins!🚩";
    } else if(count1 < count2){
        document.querySelector(".container h1").textContent = player2 + " Wins!🚩";
    } else {
        document.querySelector(".container h1").textContent = "Draw!🤝";
    }
}