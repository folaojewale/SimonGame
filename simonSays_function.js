function game(){
    var size =10;
    var gameSequence =[];
    var p=0;
    const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  
  const doSomething = async () => {
    for(var i=0;i<10;i++){
      gameSequence[p]= Math.floor(Math.random() * 4);
      var show = gameSequence[i];
      await sleep(1000)
      
        lightButton(show);
      
    //   if(!playerAnswer(gameSequence)){
    //       gameOver();
    //       break;
    //   }
    //     if(playerAnswer(gameSequence)){}
      size++;
       p++;
  } 
  }
  doSomething();
    
  }
  function playerAnswer(gameSequence){
    var testSequence = gameSequence;
  //takes in gameSequence array and loops throw it using buttonNumberPressed to check it's correct.
    for(var i=0;i<testSequence.length;i++)
    {
        if(testSequence[i]!=buttonNumberPressed()){
            //3 flashes
            return false;
        }
    }
    //2 flashes
    return true;
  }
  
  function start() {
    console.log("game has started");
    game();
    console.log("game has started2");
  
  }
  const lightOn= async()=>{
    document.getElementById("onOff").style.backgroundColor = "green";
    game();
  }
  
  
  
  
  
  
  
  
  
  function lightButton(show){
    if(show==0){
      setTimeout(() => {
        document.getElementById("greenButton").style.backgroundColor="rgb(0, 117, 35)";
      }, 700);
      document.getElementById("greenButton").style.backgroundColor="rgb(2, 255, 78)";
      document.getElementById("greenButton").className= document.getElementById("greenButton").className.replace(".green",".green");
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
    }
    // changes the button back to red.
    document.getElementById("onOff").style.backgroundColor = "red";
  }
  
  function buttonNumberPressed(){
    //checks what button has been pressed by returning a number based on the button from left to right
    document.getElementById("greenButton").onclick = function()
    {
        return 0;
    }
    document.getElementById("redButton").onclick = function()
    {
        return 1;
    }
  
    document.getElementById("yellowButton").onclick = function()
    {
        return 2;
    }
    document.getElementById("blueButton").onclick = function()
    {
        return 3;
    }
  }
  