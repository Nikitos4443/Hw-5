function is_prime(a){
    if (a <= 1){
        return false;
    } else {
        if (a === 2 || a === 3 || a === 5 || a === 7) {
            return true;
        } else {
            if (a % 2 === 0 || a % 3 === 0 || a % 4 === 0 || a % 5 === 0 || a % 6 === 0 || a % 7 === 0 || a % 8 === 0 || a % 9 === 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}
let req = require('prompt-sync')();
let number = req("Enter the number to know is it prime: ");
number = parseInt(number);
is_prime(number);
const result = is_prime(number);
console.log(result);


