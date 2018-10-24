// Note: console.log is just process.stdout.write with a newline!

const prompt = (question, callback) => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.resume(); // Begin reading from stdin so process doesn't exit
  stdout.write(question); // Write the question to the console.

  stdin.once('data', data => {
      callback(data.toString().trim());
  });
}

const diceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
}

////////////////////////
////////////////////////
////////////////////////

class shutTheBox {
  constructor(props) {
    this.board = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.die1 = 1;
    this.die2 = 1;
  }

  welcome () {
    console.log('Wecome to Shut The Box!');
    this.printBoard();
  }

  rollBoxDice() {
    this.die1 = diceRoll();
    this.die2 = diceRoll();
  }

  printBoard () {
    const a = this.board;
    const die1 = this.die1;
    const die2 = this.die2;
    console.log(`
    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    ||                        Shut The Box                         ||
    ||-------------------------------------------------------------||
    || ${a[0]} || ${a[1]} || ${a[2]} || ${a[3]} || ${a[4]} || ${a[5]} || ${a[6]} || ${a[7]} || ${a[8]} || ${a[9]} || ${a[10]} || ${a[11]} ||
    ||-------------------------------------------------------------||
    ||                                                             ||
    ||                   |---|           |---|                     ||
    ||                   | ${die1} |           | ${die2} |                     ||
    ||                   |---|           |---|                     ||
    ||                                                             ||
    ||                                                             ||
    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
    `);
  }

  askForRoll () {
    prompt('Roll? (y/n) ', input => {
      if (input === 'y' || input === 'yes') {
        console.log('Rolling..!');
        this.rollBoxDice();
        this.printBoard();
        process.exit();
      } else if (input === 'n' || input == 'no') {
        console.log('OK, thank you for playing!');
        process.exit();
      } else {
        console.log('Expected inputs are yes (y) or no (n).');
        askForRoll();
      }
    });  
  }


  askForNumberChoice () {
    // Unfinished
    prompt('Which number(s) would you like to flip up?', input => {
      console.log(input);
    }); 
  }

}


let game = new shutTheBox;

game.welcome();
game.askForRoll();

// Come back to this, MVP first
// Maybe use promises and accept a callback?
// const printEllipsisThenCallFunc = (numTimes, intervalInMsk) => {  
//   for (let i = 0; i < numTimes; i++) {
//     setTimeout(() => {console.log('...');}, intervalInMs * i);
//   }
// }




