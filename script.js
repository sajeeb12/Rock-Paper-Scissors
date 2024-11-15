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

function getHumanChoice(){
    let humanChoice = (Number)(prompt("Please Provide a Number Between 0,1,2: "));
    if(humanChoice === 0){
        return 'Rock'
    }
    else if(humanChoice === 1){
        return 'Paper'
    }
    else if(humanChoice === 2){
        return 'Scissors'
    }
    else{
        return 'Scissors'
    }
}

humanScore = 0;
computerScore = 0;



 function playRound(humanSelection,computerSelection){
    if(humanSelection == 'Rock' && computerSelection =='Scissors'){
        humanScore +=1;
    }
    else if(humanSelection == 'Rock' && computerSelection =='Paper'){
        computerScore+=1;
    }
    else if(humanSelection == 'Scissors' && computerSelection =='Paper'){
        humanScore+=1;
    }
    else if(computerSelection == 'Rock' && humanSelection =='Scissors'){
        computerScore +=1;
    }
    else if(computerSelection == 'Rock' && humanSelection =='Paper'){
        humanScore +=1;
    }
    else if(computerSelection == 'Scissors' && humanSelection =='Paper'){
        computerScore +=1;
    }
 }


 for(let i = 0; i<5; i++){
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    console.log(`humanSelection: ${humanSelection}, computerSelection: ${computerSelection}`)
    playRound(humanSelection,computerSelection);
 }

 if(humanScore > computerScore){
    console.log(`Human Won with : ${humanScore} points`);
 }
 else if(humanScore < computerScore){
    console.log(`Computer Won with : ${computerScore} points`);
 }
 else{
    console.log(`Match is draw with because both computer and human  have ${humanScore} points`)
 }


