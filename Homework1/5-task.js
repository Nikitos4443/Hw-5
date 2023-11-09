function highAndLow(numb){
    let i = 0;
    let max = 0;
    let min = 0;
    const numArray = numb.split(" ").map(Number);
    for(i; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
        if (numArray[i] < min) {
            min = numArray[i];
        }

    }
    console.log(max, min)
}
highAndLow("3 -20 20 30 100 -50")