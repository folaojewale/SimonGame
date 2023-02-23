

function buttonNumberPressed(){
    let green = document.querySelector('.green');
    let blue = document.querySelector('.blue');
    let red = document.querySelector('.red');
    let yellow = document.querySelector('.yellow');
    if(green.addEventListener('click')){
        return 0;
    }
    else if(red.addEventListener('click')){
        return 1;
    }
    else if(yellow.addEventListener('click')){
        return 2;
    }
    else
    return 3;
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
        
        if(show==0){green.}
        if(show==1){document.getElementById("red")}
        if(show==2){document.getElementById("yellow")}
        if(show==3){document.getElementById("blue")}
        if(!playerAnswer(gameSequence)){
            gameOver();
            break;
        }
        else if(playerAnswer(gameSequence)){}
        size++;
        p++;
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

    setTimeout(time(),3000);
  }

  function time(){
    //test pass
    //document.getElementById("onOff").style.backgroundColor = "red";
  }

  function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}
