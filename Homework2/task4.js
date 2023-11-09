function sausages(products){
    let saus = []
    for (let i = 0; i < products.length; i++){
        for(let k = 0; k < products[i].length; k++){
            if(products[i][k] === "[IIII]"){
                saus = saus.concat("IIII");
            }
            if(products[i][k] === "[))))]"){
                saus = saus.concat('))))');
            }
            if(products[i][k] === "[@@@@]"){
                saus = saus.concat('@@@@');
            }
            if(products[i][k] === "[llll]"){
                saus = saus.concat('llll');
            }
        }
    }
    for (let s = 4; s < saus.length; s += 5) {
        delete saus[s];
    }
    let ryadok = "";
    for (let j = 0; j < saus.length; j++) {
        ryadok = ryadok.concat(saus[j] + ' ');
    }
    for (let k = 0; k < saus.length; k++) {
        ryadok = ryadok.replace(undefined, '')
    }
    for (let t = 0; t < saus.length; t++) {
        ryadok = ryadok.replace('  ',  ' ')
    }

    console.log(ryadok);

}

const input = [
    [ "(-)", "[IIII]", "[))))]" ],
    [ "IuI", "[llll]" ],
    [ "[@@@@]", "UwU", "[IlII]" ],
    [ "IuI", "[))))]", "x", "[IIII]" ],
    ["[llll]", "[IIII]", "[@@@@]", "[IIII]", "[llll]"],
    ["[@@@@]"]
];

sausages(input);

