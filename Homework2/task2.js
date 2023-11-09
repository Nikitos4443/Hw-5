function equalSum(array) {
    for (let i = 0; i < array.length; i++) {
        let suml = 0;
        let sumr = 0;

        // Цикл для сумування елементів зліва від поточного індексу
        for (let j = 0; j < i; j++) {
            suml += array[j];
        }

        // Цикл для сумування елементів справа від поточного індексу
        for (let k = array.length - 1; k > i; k--) {
            sumr += array[k];
        }

        if (suml === sumr) {
            console.log("Index is " + i);
            return 0;
        }
    }
    console.log(-1)

}
equalSum([20,10,-80,10,10,15,35]);