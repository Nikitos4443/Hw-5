const req = require('prompt-sync')();
let Numofdisks = req("Enter the number of disks: ");
let moves = 0;
Numofdisks = parseInt(Numofdisks);
if (Numofdisks === 0){
    console.log(moves);
    return 0;
} else if(Numofdisks === 1){
    console.log(1)
    return 0;
} else
moves = Numofdisks**2 - 1;
console.log(moves)