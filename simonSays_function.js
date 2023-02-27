const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
  }
function game(){
  var size =7;
  var gameSequence =[];
  var p=0;
 
const playSequcence = async () => {
  for(var i=0;i<size;i++){
    gameSequence[p]= Math.floor(Math.random() * 4);
    var show = gameSequence[i];
    await sleep(1000)
    lightButton(show);
    p++;
  } 
}
playSequcence();

}



function playerAnswer(gameSequence){
  var testSequence = gameSequence;
  var amount;
  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  const flashAmount = async () => {
    for(var i=0;i<amount;i++){
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
//takes in gameSequence array and loops throw it using buttonNumberPressed to check it's correct.
  for(var i=0;i<testSequence.length;i++)
  {
    if(testSequence[i]!=buttonNumberPressed()){
      //3 flashes
      amount = 3;
      flashAmount();
      gameOver();
      return false;
    }
  }
  //2 flashes game continues 
  amount = 2;
  flashAmount();
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
else if(show==1){
  setTimeout(() => {
    document.getElementById("redButton").style.backgroundColor="rgb(85, 2, 2)";
  }, 700);
    document.getElementById("redButton").style.backgroundColor="rgb(226, 12, 12)";
    console.log("1");
    }
else if(show==2){
  setTimeout(() => {
    document.getElementById("yellowButton").style.backgroundColor="rgb(110, 110, 1)";
  }, 700);
  document.getElementById("yellowButton").style.backgroundColor="rgb(248, 248, 8)";
    console.log("2");
   }
else if(show==3){
  setTimeout(() => {
    document.getElementById("blueButton").style.backgroundColor="rgb(23, 25, 126)";
  }, 700);
  document.getElementById("blueButton").style.backgroundColor="rgb(97, 99, 231)";
    console.log("3");
    }
    
}












//code that works 





function gameOver(){
  //checks if the current score is greater than the highscore after failure and changes the highscore if so.
    if(document.getElementById("currentScore").innerHTML > document.getElementById("highscore").innerHTML){
      document.getElementById('highscore').innerHTML = document.getElementById("currentScore").innerHTML;
      document.getElementById("currentScore").innerHTML =0;
  }
  // changes the button back to red.
  document.getElementById("onOff").style.backgroundColor = "red";
}

function buttonNumberPressed(){
  //checks what button has been pressed by returning a number based on the button from left to right
  document.getElementById("greenButton").onclick = function()
  {
    console.log(0);
    return 0;
  }
  document.getElementById("redButton").onclick = function()
  {
    console.log(1);
    return 1;
  }

  document.getElementById("yellowButton").onclick = function()
  {
    console.log(2);
    return 2;
  }
  document.getElementById("blueButton").onclick = function()
  {
    console.log(3);
    return 3;
  }
}

const lightOn= async()=>{
  //turns the button green
  
  document.getElementById("onOff").style.backgroundColor = "green";
  //** MUST ADD 3 SECOND DELAY**/
  setTimeout(game,3100)
  //excutes game function or starts the game
  
}