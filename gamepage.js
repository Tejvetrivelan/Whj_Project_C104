// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
if(x == y)
{
    alert("CONGRATULATION"+playername+" YOU GUESSED IT RIGHT IN "
    + guess + " GUESS ");
guess= 1;

}
else if(x > y)

{
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
// function for number guessed by user     
var x = document.getElementById("guessField").value;

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
