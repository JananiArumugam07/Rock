/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const symboloptions={
    "paper":"assets/icon-paper.png",
    "rock":"assets/icon-rock.png",
    "scissors":"assets/icon-scissors.png",
    "lizard":"assets/icon-lizard.png",
    "spock":"assets/icon-spock.png"
};
let SCORE=0;
const picksymbol=(symbol)=>{
    let symbols=document.querySelector(".symbols");
    symbols.style.display="none";
    let contest=document.querySelector(".contest");
    contest.style.display="flex";   
    document.getElementById("userpickimage").src=symboloptions[symbol]; 
    let cpsymbol=pickcomputersymbol();
    document.getElementById("computerpickimage").src=symboloptions[cpsymbol];
    result(symbol,cpsymbol);
};

const pickcomputersymbol=()=>{
    let symbols=["Scissors","paper","rock","lizard","spock"];
    let cpsymbol=symbols[Math.floor(Math.random()*5)];
    return cpsymbol;

};
const result = (symbol, cpsymbol) => {
  if (symbol == "paper" && cpsymbol== "scissors") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "paper" && cpsymbol== "lizard") {
    setDecision("YOU LOSE!");
  }
  if ( symbol== "paper" &&cpsymbol== "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
   if ( symbol== "paper" &&cpsymbol== "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "paper" && cpsymbol == "paper") {
    setDecision("It's a tie!");
  }
  if (symbol == "rock" && cpsymbol== "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "rock" && cpsymbol== "lizard") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "rock" && cpsymbol == "paper") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "rock" && cpsymbol == "spock") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "rock" &&cpsymbol== "rock") {
    setDecision("It's a tie!");
  }
  if (symbol == "scissors" &&cpsymbol== "scissors") {
    setDecision("It's a tie!");
  }
  if (symbol== "scissors" &&cpsymbol== "rock") {
    setDecision("YOU LOSE!");
  }
  if (symbol== "scissors" &&cpsymbol== "spock") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "scissors" &&cpsymbol == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "scissors" &&cpsymbol== "lizard") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "lizard" &&cpsymbol == "lizard") {
    setDecision("It's a tie!");
  }
  if (symbol == "lizard" &&cpsymbol == "spock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "lizard" && cpsymbol == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "lizard" && cpsymbol == "rock") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "lizard" && cpsymbol == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "spock" && cpsymbol == "spock") {
    setDecision("It's a tie!");
  }
  if (symbol == "spock" && cpsymbol == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "spock" && cpsymbol == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (symbol == "spock" && cpsymbol == "lizards") {
    setDecision("YOU LOSE!");
  }
  if (symbol == "spock" && cpsymbol == "paper") {
    setDecision("YOU LOSE!");
  }
};
const setDecision=(decision)=>{
    document.querySelector(".decision h1").innerText=decision;
};
const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".Score h1").innerText = newScore;
};
const restartgame=()=>{
    let symbols=document.querySelector(".symbols");
    symbols.style.display="flex";
    let contest=document.querySelector(".contest");
    contest.style.display="none";   
}

