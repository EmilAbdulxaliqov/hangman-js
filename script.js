//https://www.uxmetric.com/wp-content/uploads/2018/05/quickwin-uxmetric.png

let randomWord=[
    'hello',
    'golang',
    'world',
    'python',
    'ide',
    'java',
    'javascript',
    'typescript',
    'dart'
];
let compChoice=randomWord[Math.round(Math.random()*(randomWord.length-1))];

let compArr=compChoice.split('');

let answer=[];

for(let i=0;i<compChoice.length;i++){
    answer.push("_");
}

let compWord=document.querySelector('.comp-word');




console.log(compChoice);

var user=[];

window.onkeypress=(e)=>{
    let key=e.key;
    addKeyPress(key);
    return;
}

let addKeyPress=(char)=>{
    let repeat=user.indexOf(char);
    if(repeat!==-1){
        alert("This key used.Try again 🥲🥲🥲");
    }else{
        user.push(char);
        showLetter();
        guessMatch(char);
    }
}

let guessMatch=(key)=>{
    let index=compChoice.indexOf(key);
    let lastIndex=compChoice.lastIndexOf(key);
    let check;
    if (index!==-1) {
        answer[index]=key;
        answer[lastIndex]=key;
        console.log(answer[index],key);
        compWord.innerHTML=answer.join(" ");
    }
    if (answer.indexOf("_")===-1) {
        document.querySelector("img").src="https://www.fazemag.de/wp-content/uploads/2019/04/acid-smiley.png";
        let snd1 = new Audio("./game-win.wav"); 
        snd1.play();
    }
    if (user.length===10) {
        document.querySelector("img").src="https://hotemoji.com/images/dl/9/white-frowning-face-emoji-by-twitter.png"
        let snd2=new Audio("./game-over.wav");
        snd2.play();
    }

}

let showLetter=()=>{
    let userGuess=document.querySelector(".hello");
    userGuess.innerHTML=user.join(" - ");
}



compWord.innerHTML=answer.join(" ");

showLetter();


