/*-------------------------------- Constants --------------------------------*/
const gameTheme =[]


const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H','J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'enter'];
let childEl = []; // Hold current tile elements of selected row
let currentRow = 0; // Current row selected
let currentColumn = 0; //Current column selected

console.log(keys);

const row1El = document.getElementById('row1');

// Listen for key event to know what the user is entering
window.addEventListener('keydown', keyEvt => {
  //Check if have all 5 tile elements in row and if currentColumn is not more than allowed
  if(childEl.length === 5 && currentColumn <=4)
  {
    // Check if user is backspace and column has value to remove
    if(currentColumn >=0 && keyEvt.key === 'Backspace')
    {
      if(currentColumn !==0)
      {currentColumn--;}
      childEl[currentColumn].innerText = '';
    }
    else
    {
      // save key entered by user.  Need to check for chars not part of alphabet still.
      childEl[currentColumn].innerText = keyEvt.key;
      currentColumn++;
    }
    console.log(keyEvt);
  }
});


//)    Define the required variables used to track the state of the game 


/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

//Add click event to all row elelments
const rowElNodes = document.querySelectorAll('.row').forEach((row) => {
  row.addEventListener('click', handleRowClick);
});


/*-------------------------------- Functions --------------------------------*/

//Function when row is clicked
function handleRowClick(evt){
  console.log("Row clicked: " + evt.currentTarget.id);

  // Check that row does not have any filled columns
  if(currentColumn ===0 || currentColumn === 5)
  {
    // might use later
    currentRow = evt.currentTarget.id.replace('row', '') - 1;
    console.log(currentRow);

    // Clear tile array to add new children
    if(childEl.length > 0)
    {
      childEl = [];
    }

    //Add tile to array
    for(const child of evt.currentTarget.querySelectorAll('.tile'))
    {
      childEl.push(child);
    }

    //Reset current column to 0;
    currentColumn = 0;
  }
}

function init() {
}

function playerGuess (){
  
}

//Board variable that is an array to keep track of words entered and rows still available to player. 

//Keyboard array variable to keep track of letters and set state based on not used yet (white), correct place in word (Green), part of word but wrong place (Orange), not correct (Dark grey) 

//Theme variable to hold the selected theme. 
//Word to guess variable to hold the random word that the user needs to find. 



//Store cached element references 

//Variable to store game messages, keyboard keys, board (rows and columns), reset button, theme selection elements. 


//Upon loading, the game state should be initialized, and a function should be  

//called to render this game state 

//Init function to setup the game 

//Generate Theme selection 

//render board and visual keyboard 

//Select random word from word bank 

//Render message to user that they can begin the game. 

//Define the required constants 

//Array of available themes 
//The messages that can be displayed to the user 

//Handle a player clicking a tile with a `handleClick` function 

//Move focus to the row of the tile the user selects.   
//Allow user to enter word starting at beginning of the row selected if word does not already exist. 
//Add event listener to each key, button 

//Function to lock rows with words already entered 


//Keyboard ‘handleClick’ function 

//Change color of the keyboard letter tiles based on words being entered 

//Function to return list of themes to display to player 


//Function to check if word entered by user is correct 

//Identify if whole word is correct 
//If not determine if letter exist that is in correct position 
//Else determine if letter exist in word but in wrong position 
//Else letter is wrong. 

//Render a message based on the current game state 

//render a message that the player has won or loss 
//render a message showing the number of tries the user has left 

//Create Reset functionality 

//Call init to reset the board when reset button is clicked 

//Add a responsive design 

//Add a favicon 

//Add google fonts 

