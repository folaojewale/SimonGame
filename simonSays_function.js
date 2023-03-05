// code reference https://www.youtube.com/watch?v=W0MxUHlZo6U           by the way my brother got 24 :) and i got 12 :C          |EASY TO READ IN DARK MODE|
/* CODE FINDER INDEX student - 21390003
1. Start after 3 seconds LINE 132 - 140
2. Flash signal LINE 39 - 66, LINE 109 - 111. Player repeat signal LINE 68 - 96.
3. Add on an extra sequence LINE 79 - 86. Player repeat signal LINE 68 - 96.
4. Add on an extra sequence LINE 79.
5. If everything is correct LINE 77. Speed up intervals LINE 81 - 83.
6. If you fail a sequence LINE 88 - 96. If you take more than 5 seconds LINE 115(countdown timer called), LINE 166 - 171(countdown function), LINE 119(flash function called), LINE 142 - 159(flash function), LINE 118 - 130(gameOver function).
7. LINE 118 - 130(highscore) LINE 102 - 105 (current score).
*/ 
const greenbutton = document.querySelector(".green")
const redbutton = document.querySelector(".red")
const yellowbutton = document.querySelector(".yellow")
const bluebutton = document.querySelector(".blue")
//created to allow the interval time to changed
let time = 1000;
//added to control wether or not the user and start clicking buttons
var proceed = false;
//5 second timer
var countDown;
// score tracker
let score =1;

const buttons = () =>{
  const colours =[
    greenbutton,
    redbutton,
    yellowbutton,
    bluebutton
  ]
  //returns random number between 0 and 3
  return colours[parseInt(Math.random() * colours.length)];
}

let order = [buttons()];
let playerOrder = [...order]; 

//flash takes in a parameter from the colours array and turn is on and off based on the class name
const flash = circle =>{
  //adds the _Active classes
  return new Promise((resolve, reject) => {
    if(circle.className==='circle red'){
      circle.className += ' redActive';
    }
    if(circle.className==='circle blue'){
      circle.className += ' blueActive';
    }
    if(circle.className==='circle yellow'){
      circle.className += ' yellowActive';
    }
    if(circle.className==='circle green'){
      circle.className += ' greenActive';
    }
    //removes the _Active classes
    setTimeout(() => {
      circle.className = circle.className.replace(" redActive",'')
      circle.className = circle.className.replace(" yellowActive",'')
      circle.className = circle.className.replace(" greenActive",'')
      circle.className = circle.className.replace(" blueActive",'')
     
      setTimeout(() => {
        resolve();
      }, 250);
    }, time);
  })
}

const game = circle => {
  if(!proceed)return;
  //stores first element in the array and removes it from the original array
  const ans = playerOrder.shift();
  //continuosuly compares the the current position in sequnce to the parameter 
  if(ans===circle){
    //clears timeout if answer 
    clearTimeout(countDown);
    //checks if the player has answered all the sequences 
    if(playerOrder.length===0){
      //progress if the correct button is clicked, pushes new random button to the games order and NOT the players order
      order.push(buttons())
      //time increses based on the length of the sequence 
      if(order.length>4){time = 800}
      if(order.length>8){time = 600}
      if(order.length>12){time = 400}
      playerOrder = [...order]
      onButton();
    }
  }
  else{
    //failed
    //generates a new order of sequences and copys it to the the new order the player must replay if the player want to play again
    proceed = false;
    order = [buttons()];
    playerOrder = [...order]; 
    gameOver();
  }
}

const onButton = async () => {
  //disables clicking
  proceed = false;
  if(order.length>1){
  //adds to score once game function has been called as the player has guessed correctly, ternary operator is used here before score++;
  (order.length<10)?document.getElementById("currentScore").innerHTML='0'+score.toString():
  document.getElementById("currentScore").innerHTML=score.toString();
  score++;
  }
  await sleep(1500)
  //calls sequence 
  for(const colours of order){
    await flash(colours);
  }
  //enables clicking
  proceed = true;
  //5 second timer for player to guess
  countDown = setTimeout(countDown_5,5000);
}

const gameOver = async() =>{
  await flashAmount(5);
  await sleep(700)
  //checks if the current score is greater than the highscore after failure and changes the highscore if so.
  if(document.getElementById("currentScore").innerHTML > document.getElementById("highscore").innerHTML){
    document.getElementById('highscore').innerHTML = document.getElementById("currentScore").innerHTML
  }
  //resets score
  score=1;
  document.getElementById("currentScore").innerHTML ="00";
  // changes the button back to red.
  document.getElementById("onOff").style.backgroundColor = "red";
}

const lightOn= async()=>{
  //checks if the button is already green
  if(document.getElementById("onOff").style.backgroundColor === "green"){return;}
  //turns the button green
  document.getElementById("onOff").style.backgroundColor = "green";
  //** 3 SECOND DELAY**/
  //excutes game function or starts the game
  setTimeout(onButton,3100)
}

const flashAmount = async (X) => {
  //function that turns on and off all the buttons based on X amount and is async.
  for(var i=0;i<X;i++){
    await sleep(1000)
    setTimeout(() => {
      //turns button to an off colour 
      document.getElementById("greenButton").style.backgroundColor="";
      document.getElementById("redButton").style.backgroundColor="";
      document.getElementById("yellowButton").style.backgroundColor="";
      document.getElementById("blueButton").style.backgroundColor="";
    }, 700);
    //turns button to an on colour
    document.getElementById("greenButton").style.backgroundColor="rgb(2, 255, 78)";
    document.getElementById("redButton").style.backgroundColor="rgb(226, 12, 12)";
    document.getElementById("yellowButton").style.backgroundColor="rgb(248, 248, 8)";
    document.getElementById("blueButton").style.backgroundColor="rgb(97, 99, 231)";
  }
}

const sleep = (time) => {
  //helps set time delay
  return new Promise((resolve) => setTimeout(resolve, time))
  }

const countDown_5 = () =>{
  proceed = false;
  order = [buttons()];
  playerOrder = [...order]; 
  gameOver();
}