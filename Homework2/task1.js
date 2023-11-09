const prompt = require('prompt-sync')();
let d = Number(prompt("Enter a positive integer: "));
let honorsofpeople = [1, 5, 6, 3, 4, 2];
let sumOfHonors = [];
let n = honorsofpeople.length;
if (n % d !== 0 || d > 31 || d < 1 || n <= 0) {
    console.log("Invalid")
    return 0;
} else {

    for (let k = 0; k < (n / d); k++) {
        let sumhonor = 0;
        for (let i = 0; i < n; i += (n / d)) {
            sumhonor += honorsofpeople[i+k];
        }
        sumOfHonors = sumOfHonors.concat(sumhonor);
    }
    //console.log(sumOfHonors);
}
let maxhonor = sumOfHonors[0];
for (let j = 0; j < sumOfHonors.length; j++) {
    if (maxhonor < sumOfHonors[j+1]) {
        maxhonor = sumOfHonors[j+1];
    }
}
console.log(maxhonor);