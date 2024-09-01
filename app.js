let useScore =0;
let compScore =0;

const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScoreswin=document.querySelector("#user-score");
const compScoreswin=document.querySelector("#Comp-score");

const genCompterChoice = ()=>{
    let options =["rock","paper","scissor"];
    const randIdx =  Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame =()=>{
    msg.innerText="Game was Draw,Play again";
    msg.style.backgroundColor ="#081b31";
}
const shoWinner=(userwin ,userChoice, compChoice)=>{
    if(userwin)
    {
        useScore++;
        userScoreswin.innerText = useScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
    }
    else
    {
        compScore++;
        compScoreswin.innerText = compScore;
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="Red";
    }
}
const playGame = (userChoice)=>{
    const compChoice = genCompterChoice();
  if (userChoice === compChoice)
  {
    drawGame();
  }else{
    let userwin =true;
    if(userChoice === "rock"){
       userwin= compChoice === "paper"? false:true;
    }else if(userChoice === "paper"){
      userwin=  compChoice === "scissor"? false:true;
  }else {
    userwin=compChoice ==="rock"? false:true;
  }
  shoWinner(userwin ,userChoice,compChoice)
  
  }
}
choices.forEach((choices)=>{
    const userChoice = choices.getAttribute("id");
    choices.addEventListener("click",()=>{
        playGame(userChoice);
    });
});
