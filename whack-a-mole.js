const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;


function randomTime(min, max){
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}


function peep(){
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}


function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000);
    // setInterval(peep, 1000);
}

function whack(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", whack));



// grabbing the time left from html document
let timeLeft = 30;
let currentScore = 0;
let downloadTimer = setInterval(function(){
    if(timeLeft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("time-left").innerHTML = "Finished: Your Score is " + score;
    } else {
        document.getElementById("time-left").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
}, 1000);





// refreshing the page to start game over
document.querySelector('.restart'
    ).addEventListener('click', function()
    {
        window.location.reload();
        return false;
    });






































/*
const startGameButton = document.getElementsByClassName("btn-start");

const moles = document.querySelectorAll(".box");

const progress = () => {
    moles[0].src="mole.png";
}

moles.forEach(box => {
    box.addEventListener("click", progress)
});
*/



// start game button //
/*
const startGame = document.getElementById("btn-start");
const mole = document.getElementsByClassName("mole-pic");

function popupMole() {
    
}


function start(){
    
    console.log("Game Started");
    startGame.removeEventListener("click", start).innerHTML = "Game Started!";
    startGame.addEventListener("click", stop).innerHTML = "Game Stopped!";
    startGame.value = "stop";
}

function stop() {
    
    console.log("Game Stopped")
    startGame.removeEventListener("click", stop);
    startGame.addEventListener("click", start);
    startGame.value = "start";
}





// grabbing the time left from html document
let timeLeft = 30;
let currentScore = 0;
let downloadTimer = setInterval(function(){
    if(timeLeft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("time-left").innerHTML = "Finished: " + currentScore;
    } else {
        document.getElementById("time-left").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
}, 1000);


*/

// score incrementation //
/*
let currentScore = 0;

score.getElementsByClassName("score-out");

function score() {

}

*/



/*
function startGame(){
    startGameButton.destroy();
    moles.set(150, -150);
    playing = true;
}
*/




























