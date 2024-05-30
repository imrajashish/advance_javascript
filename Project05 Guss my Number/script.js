'use strict';
let score = 20;
let highscore = 0;
let randomVal = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent; 
        
document.querySelector('.check').addEventListener("click", function(){
            let guess = Number(document.querySelector(".guess").value)
            
           if(!guess){
            document.querySelector('.message').textContent = '⛔ No Number is There';
           }
           else if(guess === randomVal ){
            document.querySelector('.message').textContent='🎉 correct Answer';
             document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';

            if(score>highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
            }else if(guess > randomVal ) {
                if (score > 1){
                    document.querySelector('.message').textContent = '⚡ To High!';
                    score--;
                    document.querySelector('.score').textContent = score;
                }else{
                    document.querySelector('.message').textContent = 'Loosing the Game!';
                    document.querySelector('.score').textContent = 0;
                }
            }
            else if(randomVal > guess){
                if (score > 1){
                document.querySelector('.message').textContent = '🪫 Too Less Number ';
                score--;
                document.querySelector('.score').textContent = score;
                }else{
                    document.querySelector('.message').textContent = 'Loosing the Game!';
                    document.querySelector('.score').textContent = 0;
                }
            }
  })


  document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    randomVal = Math.trunc(Math.random()*20) + 1
    let again = Boolean(document.querySelector('.again').value)

    if(!again == true){
        document.querySelector('.message').textContent = '⚡ Restart';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor= '#222';

    }

  })