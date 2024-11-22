let humanScore = document.querySelector("#human-score")
let computerScore = document.querySelector("#comp-score")
humanPoints = (Number)(humanScore.textContent)
computerPoints = (Number)(computerScore.textContent)

const btnGroup = document.getElementById('btn-group')
const human = document.getElementById("human")
const comp = document.getElementById("comp")

const won = document.getElementById("wons");




function getComputerChoice(){
    let computerChoice =  Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return 'Rock';
    }
    else if(computerChoice === 1){
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}


const btn = document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click",function(e){
        const humanSelection = e.target.value
        console.log(humanSelection)
        const computerChoice = getComputerChoice()
        document.getElementById('comp-choice').textContent = `Computer chooses ${computerChoice}`
        playRound(humanSelection,computerChoice);

    });
});








function playRound(humanSelection,computerSelection){
        if (humanSelection === 'Rock' && computerSelection ==='Scissors' || 
            humanSelection === 'Scissors' && computerSelection === 'Paper' ||
            humanSelection === 'Paper' && computerSelection === 'Rock'
        ) {

            humanPoints += 1;
            humanScore.textContent = humanPoints;
            console.log('Human wins this round!',humanPoints);
            won.textContent = "You win this round!"

        }
        else if (computerSelection === 'Rock' && humanSelection === 'Scissors' ||
            computerSelection === 'Scissors' && humanSelection === 'Paper' ||
            computerSelection === 'Paper' && humanSelection === 'Rock') {

            computerPoints += 1;
            computerScore.textContent = computerPoints
            console.log('Computer wins this round!',computerPoints);
            won.textContent = "Computer wins this round!"

    } else {
        console.log('This round is a draw!');
        won.textContent = "This round is a draw!"
        
    }

    if (humanPoints === 3 || computerPoints === 3) { 
        if (humanPoints > computerPoints) {
            console.log(`You won the game with ${humanPoints} points!`);
            
            human.style.display = 'block'
        } else {
            console.log(`Computer won the game with ${computerPoints} points!`);
            
            comp.style.display = 'block';
        }

        endGame();
        
        
    }

 }


 function endGame(){
    humanPoints = 0;
    computerPoints = 0;
    console.log("Game is End")
    btnGroup.style.display = 'none'
 }

 function resetGame(){
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    won.textContent = '';
    document.getElementById('comp-choice').textContent = '';
    btnGroup.style.display = 'block'
    comp.style.display = 'none';
    human.style.display = 'none';
    console.log("Game is Resetted")
 }













