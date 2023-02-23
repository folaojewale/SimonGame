

function buttonNumberPressed(){
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


function game(){
    var size =1;
    var gameSequence =[];
    var p=0;

    let green = document.querySelector('.green');   
    let blue = document.querySelector('.blue');
    let red = document.querySelector('.red');
    let yellow = document.querySelector('.yellow');
   
    for(var i=0;i<size;i++){
        gameSequence[p]= Math.floor(Math.random() * 4);
        var show = gameSequence[i];
        
        if(show==0){
            document.getElementById("greenButton").style.backgroundColor="red";
            setTimeout(time(),3000);
            document.getElementById("greenButton").style.backgroundColor="rgb(0, 117, 35)";
            console.log("0");
            //green.querySelector(".green:active")
        }
        if(show==1){
            console.log("1");
            document.querySelector(".red:active")}
        if(show==2){
            console.log("2");
            document.querySelector(".yellow:active")}
        if(show==3){
            console.log("3");
            document.querySelector(".blue:active")}
        // if(!playerAnswer(gameSequence)){
        //     gameOver();
        //     break;
        // }
        //     if(playerAnswer(gameSequence)){}
        // size++;
        //p++;
    } 
}
function playerAnswer(gameSequence){
    var testSequence = gameSequence;

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

function gameOver(){
    if(document.getElementById("currentScore") > document.getElementById("highscore")){
        const value = document.getElementById("currentScore");
        document.getElementById('highscore').innerHTML = value;
    }
    document.getElementById("onOff").style.backgroundColor = "red";

}

function start() {
    document.getElementById("onOff").style.backgroundColor = "green";
    console.log("game has started");
    game();

    //setTimeout(time(),3000);
  }

  function time(){
    //test pass
    //document.getElementById("onOff").style.backgroundColor = "red";
  }

  function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}