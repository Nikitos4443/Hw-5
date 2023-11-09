const prompt = require("prompt-sync")();
let startn = prompt("Input: ");
let array = [];
let Arrstartn = ("" + startn).split("").map(Number);
while (Arrstartn.length > 0) {
    let max = Math.max.apply(null, Arrstartn);
    Arrstartn = Arrstartn.filter(item => {
        if (item === max) {
            array.push(item);
            return false;
        }
        return true;
    });
}
let result = parseInt(array.join(''));
console.log("The biggest number is " + result)

