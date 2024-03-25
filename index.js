let gameNum = Math.floor(Math.random() * 30) + 1;

attempt = 0;


let userInput = prompt(" Guess The Game Number From 1 To 30 " + ( 10 - attempt)  + " Guesses Left "  );

while (userInput !== gameNum) {
    if(userInput === null || userInput.toLowerCase() === 'exit' || userInput.toUpperCase() === 'exit'){
        alert("(You Exit The Game ) The Game Number Is " + gameNum  + ".");
        break}
        
        userInput = parseInt(userInput);
        if (userInput === gameNum) {
            //  alert("Correct! You win a watch that you will never get.");
              
            break;
        }
        if(isNaN(userInput)){
            alert("You Entered An Invalid Number");
        }else if (Math.abs(userInput - gameNum ) <= 1 ){
            alert("You are Too Close To The Number");
        }else if (Math.abs(userInput - gameNum ) <= 5){
            alert("You Are somewhat Far Off To Guess The Number");
        }else{
            alert("You are too Far Off To Guess The Number");
        }
        attempt++;
        
        if (attempt === 9) {
            alert("This Is Last Chance To Guess A Number");
        }
        if (attempt === 10) {
            alert("You've used all your attempts. The correct number was " + gameNum + ".");
            break;
        }
        
        userInput = prompt("You Entered Wrong Number Keep Trying And Enter Exit Or Click Cancel To Quit " + ( 10 - attempt ) + " Guesses Left " );  
    }
    

    if (gameNum === userInput){
        alert("Correct! You win a watch that you will never get.");
    }