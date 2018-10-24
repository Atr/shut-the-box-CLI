console.log('Wecome to Shut The Box!');

const printBoard = (optionsArr, die1, die2) => {
  if (!optionsArr) {
    optionsArr = [1,2,3,4,5,6,7,8,9,10,11,12];
  }
  const a = optionsArr;

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
// console.log(`
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||                        Shut The Box                         ||
// ||-------------------------------------------------------------||
// || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12 ||
// ||-------------------------------------------------------------||
// ||                                                             ||
// ||                   |---|           |---|                     ||
// ||                   | 1 |           | 1 |                     ||
// ||                   |---|           |---|                     ||
// ||                                                             ||
// ||                                                             ||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// `);

// |---|
// | 1 |
// |---|

// |---|
// | 2 |
// |---|

// |---|
// | 3 |
// |---|

// |---|
// | 4 |
// |---|

// |---|
// | 5 |
// |---|

// |---|
// | 6 |
// |---| 


const prompt = (question, callback) => {
    const stdin = process.stdin;
    const stdout = process.stdout;

    stdin.resume(); // Begin reading from stdin so process doesn't exit
    stdout.write(question); // Write the question to the console.

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

// Come back to this, MVP first
// Maybe use promises and accept a callback?
// const printEllipsisThenCallFunc = (numTimes, intervalInMsk) => {  
//   for (let i = 0; i < numTimes; i++) {
//     setTimeout(() => {console.log('...');}, intervalInMs * i);
//   }
// }

const diceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
}

const askForRoll = () => {
  prompt('Roll? (y/n)', input => {
    if (input === 'y' || input === 'yes') {
      console.log('Rolling..!');
      printBoard(null, diceRoll(),diceRoll());
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

// const askForNumberChoice = () => {
//   prompt('Which number(s) would you like to flip up?', input => {
    
//   }); 
// }

askForRoll();