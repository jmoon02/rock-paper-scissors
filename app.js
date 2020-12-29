let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('com_score'); 
const user_r = document.getElementById("r");
const user_p = document.getElementById('p');
const user_s = document.getElementById('s');
const result = document.querySelector(".result > p");

function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
}


function getComputerChoice(){
    const comChoice = ['r', 'p', 's'];
    return comChoice[Math.floor(Math.random() * 3)];
}

function startGame(){
    user_r.addEventListener('click', function(){
        compareChoice('r');
    });

    user_p.addEventListener('click', function(){
        compareChoice('p');        
    });

    user_s.addEventListener('click', function(){
        compareChoice('s');
        
    });
}

function compareChoice(choice){
    const win = ['rs', 'pr', 'sp'];
    const lose = ['rp', 'ps', 'sr'];
    const tie = ['rr', 'pp', 'ss']

    let result = choice + getComputerChoice();

    if(win.includes(result)){
        winner(result);
    } else if(lose.includes(result)){
        loser(result);
    }else{
        draw(result);
    }
}


function winner(){
    userScore++;
    if(userScore >= 5){
         result.innerHTML = 'You Won the round! Click to restart!';
         reset();
    }else{
        userScore_span.textContent = userScore;
        result.innerHTML = "Good!";
    }
}

function loser(){
    computerScore++;
    if(computerScore >= 5){
         result.innerHTML = 'Computer Won.. :(  Click to restart!';
         reset();
    }else{
        computerScore_span.textContent = computerScore;
        result.innerHTML = "Uh-oh..";
    }
}

function draw(){
    result.innerHTML = "It's a tie!";
}

startGame();

