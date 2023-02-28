const greenbutton = document.getElementById("greenButton")
const redbutton = document.getElementById("redButton")
const yellowbutton = document.getElementById("yellowButton")
const bluebutton = document.getElementById("blueButton")
function getPromiseFromEvent(item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);
      resolve();
    }
    item.addEventListener(event, listener);
  })
}
async function game(){
  var size =1;
  var gameSequence =[];
  var p=0;
 
const playSequcence = async (callback) => {
  for(var i=0;i<size;i++){
    gameSequence[p]= Math.floor(Math.random() * 0);
    var show = gameSequence[i];
    await sleep(1000)
    lightButton(show);
    p++;
  } 
  callback;   
}
await playSequcence();
playerAnswer(gameSequence)

}

async function playerAnswer(gameSequence){
  
  var testSequence = gameSequence;
//takes in gameSequence array and loops throw it using buttonNumberPressed to check it's correct.
  for(var i=0;i<testSequence.length;i++)
  {
    var ans =await waitButtonNumberPressed()
    if(testSequence[i]!=ans){
      //incorrect answer
      gameOver();
      console.log("false");
      flashAmount(3);
      return false;
    }
 }
 //correct game continues  
 flashAmount(2);
 console.log("end");
 document.getElementById("currentScore").innerHTML++;
 return true;
}

function lightButton(show){
  if(show==0){
    setTimeout(() => {
    //document.getElementById("greenButton").style.backgroundColor="rgb(0, 117, 35)";
    document.querySelector(".green").style.backgroundColor= "rgb(0, 117, 35)";
    }, 700);
    //document.getElementById("greenButton").style.backgroundColor="rgb(2, 255, 78)";
    document.querySelector(".green").style.backgroundColor= "rgb(2, 255, 78)";
    console.log("0");
}
  if(show==1){
  setTimeout(() => {
    document.querySelector(".red").style.backgroundColor="rgb(85, 2, 2)";
  }, 700);
    document.querySelector(".red").style.backgroundColor="rgb(226, 12, 12)";
    console.log("1");
    }
 if(show==2){
  setTimeout(() => {
    document.querySelector(".yellow").style.backgroundColor="rgb(110, 110, 1)";
  }, 700);
  document.querySelector(".yellow").style.backgroundColor="rgb(248, 248, 8)";
    console.log("2");
   }
 if(show==3){
  setTimeout(() => {
    document.querySelector(".blue").style.backgroundColor="rgb(23, 25, 126)";
  }, 700);
  document.querySelector(".blue").style.backgroundColor="rgb(97, 99, 231)";
    console.log("3");
    }   
}











async function waitButtonNumberPressed(){
 
  //checks what button has been pressed by returning a number based on the button read from left to right
     (await getPromiseFromEvent(greenbutton, "click"))
  {
    console.log(0 +" pressed");
    return 0;
  }
   (await getPromiseFromEvent(redbutton, "click"))
  {
    console.log(1 +" pressed");
    return 1;
  }
   (await getPromiseFromEvent(yellowbutton, "click"))
  {
    console.log(2 +" pressed");
    return 2;
  }
  (await getPromiseFromEvent(bluebutton, "click"))
  {
    console.log(3 +" pressed");
    return 3;
  }
}


//code that works 
function gameOver(){
  //checks if the current score is greater than the highscore after failure and changes the highscore if so.
    if(document.getElementById("currentScore").innerHTML > document.getElementById("highscore").innerHTML){
      document.getElementById('highscore').innerHTML = document.getElementById("currentScore").innerHTML;
      document.getElementById("currentScore").innerHTML ="00";
  }
  // changes the button back to red.
  document.getElementById("onOff").style.backgroundColor = "red";
}

function buttonNumberPressed(X){
  //checks what button has been pressed by returning a number based on the button read from left to right
  console.log(X);
  return X;
}

const lightOn= async()=>{
  //turns the button green
  document.getElementById("onOff").style.backgroundColor = "green";
  //** 3 SECOND DELAY**/
  //excutes game function or starts the game
  setTimeout(game,3100)
}

const flashAmount = async (X) => {
  //function that turns on and off all the buttons based on X amount and is async.
  for(var i=0;i<X;i++){
    await sleep(1000)
    setTimeout(() => {
      document.getElementById("greenButton").style.backgroundColor="rgb(0, 117, 35)";
      document.getElementById("redButton").style.backgroundColor="rgb(85, 2, 2)";
      document.getElementById("yellowButton").style.backgroundColor="rgb(110, 110, 1)";
      document.getElementById("blueButton").style.backgroundColor="rgb(23, 25, 126)";
    }, 700);
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