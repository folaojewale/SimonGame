// code reference https://www.youtube.com/watch?v=W0MxUHlZo6U
// add 5 second timer 
const greenbutton = document.querySelector(".green")
const redbutton = document.querySelector(".red")
const yellowbutton = document.querySelector(".yellow")
const bluebutton = document.querySelector(".blue")
//created to allow the interval time to changed
let time = 1000;
//added to control wether or not the user and start clicking buttons
let proceed =false;
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
  const ans = playerOrder.shift();
  //continuosuly compares the the current position in sequnce to the parameter 
  if(ans===circle){
    //checks if the player has answered all the sequences 
    if(playerOrder.length===0){
      //progress if the correct button is clicked
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
  proceed = false;
  if(order.length>1){
    await flashAmount(2);
     document.getElementById("currentScore").innerHTML++;
  }
  await sleep(1500)
  for(const colours of order){
    await flash(colours);
  }
  proceed = true;
}

const gameOver = async() =>{
  await flashAmount(5);
  await sleep(700)
  //checks if the current score is greater than the highscore after failure and changes the highscore if so.
    if(document.getElementById("currentScore").innerHTML > document.getElementById("highscore").innerHTML){
      document.getElementById('highscore').innerHTML = document.getElementById("currentScore").innerHTML;
      document.getElementById("currentScore").innerHTML ="00";
  }
  // changes the button back to red.
  document.getElementById("onOff").style.backgroundColor = "red";
}

const lightOn= async()=>{
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