// 1. Deposit Some Money.
// 2. Determine number of lines to bet on.
// 3. Collect a bet amount.
// 4. Spin the slot machine.
// 5. Check if the user won.
// 6. Give user their winnings.
// 7. Play again.



const readlineSync = require("readline-sync");

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
   A: 5,
   B: 4,
   C: 3,
   D: 2
}







const deposit = () => {
   while (true) {                 // While is a loop that will repeat until conditions for bet amount are met.
   const depositAmount = readlineSync.question("Enter Deposit Amounnt: "); // Readline syntax to prompt a question
   const numberDepositAmount = parseFloat(depositAmount); // will parse numbers in a string as integers

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {  //conditions deposit to be a number and to be above zero
       console.log("Invalid Deposit Amount. Try Again"); // message if entered deposit does not meet conditions
    } else {
      return numberDepositAmount;
    }
   }
};




const getNumberOfLines = () => {   //function to gather user input for number of lines to bet
  while (true) {
      const lines = readlineSync.question("Enter Number Of Bet Lines (1-3): "); //prompt for user
      const numberOfLines = parseFloat(lines);
   
       if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) { //condtions to be met for bet lines
          console.log("Invalid NUmber Of Lines. Try Again");
       } else {
        return numberOfLines;
     }
     }
  };
  
  
  
   const getBet = (balance, lines) => {
  while (true) {
     const bet = readlineSync.question("Enter Total Bet per line: "); //prompt for user
     const numberBet = parseFloat(bet);
   
      if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) { //determines bet amount based on users input
         console.log("Invalid Bet. Try Again");
  } else { 
        return numberBet;
      }
   
   }
   };




const spin = () => {
   const symbols = [];
   for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
      for (let i = 0; i <count; i++) {
         symbols.push(symbol);
      }
}

const reels = []; //reels of the slot machine in the array
for (let i = 0; i < COLS; i++) { // loop for all columns
   reels.push ([]);
   const reelSymbols = [...symbols];
   for (let j = 0; j < ROWS; j++) { // loop for all rows
      const randomIndex = Math.floor(Math.random() * reelSymbols.length); // makes random selections from array of options
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol); // pushed into current reel 
      reelSymbols.splice(randomIndex, 1); // values that are randomly selcted are then removed so that it cannot be selected again.
   }
}

 return reels;
};

const transpose = (reels) => { // transposing recontructs the diplay of the reels
   const rows = [];

   for (let i= 0; i < ROWS; i++) {
      rows.push([]);
      for (let j = 0; j < COLS; j++) {
         rows[i].push(reels[j][i]);
      }
   }
   return rows
};

 const printRows = (rows) => {
   for (const row of rows){
       let rowString = "";
       for (const [i, symbol] of row.entries()){
           rowString += symbol
           if (i != row.length - 1) {
               rowString += " | "
}
} 
 console.log(rowString);
}
 }




let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);




//}