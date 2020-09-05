
var userScore=0;
var computerScore=0;
const userScore_span=document.getElementById('user_score');
const computerScore_span=document.getElementById('comp_score');
const scoreBoard_div=document.querySelector(".score_board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissor_div=document.getElementById('s');
//const lizard_div=document.getElementByTagId('l');
//const spoc_div=document.getElementByTagId('sp'); 

function computerChoices(){
	const choices =['r','p','s'];
	//const choices =['r','p','s','l','sp'];
	const randomNumber=Math.floor(Math.random()*3);
	//const randomNumber=Math.floor(Math.random()*5);
	return choices[randomNumber];
}

function convert(letter){
	if(letter ==="r") return "Rock";
	if(letter ==="p") return "Paper";
	if(letter ==="s") return "Scissors";
}


function won(computerchoice,user_choice){
	userScore++;
	//console.log("Victory");
	//console.log(userScore);
	//console.log(computerScore);
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML="You Won! 😃 <br> Computer's "+convert(computerchoice)+" lost to your "+convert(user_choice)+"...";

}
function lost(computerchoice,user_choice){
	computerScore++;
	console.log("Defeat");
	//console.log(userScore);
	//console.log(computerScore);
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML="You lost!😟 <br> Computer's "+convert(computerchoice)+" defeated your "+convert(user_choice)+"...";


}
function tie(computerchoice,user_choice){
	console.log("Draw");
	//console.log(userScore);
	//console.log(computerScore);
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	result_p.innerHTML="Its a tie! 😶 <br>Computer too chose "+convert(computerchoice)+"...";

}

function game(user_choice){
   const computerchoice=computerChoices();
   //console.log("cc-" + computerchoice);
   //console.log("uc-" + user_choice);
   switch(computerchoice+user_choice){
   	case "rp":
   	case "ps":
   	case "sr":
   	      won(computerchoice,user_choice);
   	      break;
   	case "rs":
   	case "pr":
   	case "sp":
   	      lost(computerchoice,user_choice);
   	      break;
   	case "rr":
   	case "pp":
   	case "ss":
   	      tie(computerchoice,user_choice);
   	      break;      

   }

}

function main(){

	rock_div.addEventListener('click', function(){
	game("r");
	//console.log("r");
    })

    paper_div.addEventListener('click', function(){
	game("p"); 
	//console.log("p");
    })

    scissor_div.addEventListener('click', function(){
	game("s");
	//console.log("s");
    })

    //lizard_div.addEventListener('click', function(){
	//game("l");
    //})

    //spoc_div.addEventListener('click', function(){
	//game("sp");
    //})
}
 main();