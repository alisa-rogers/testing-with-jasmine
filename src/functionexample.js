var getHint = function(secret, guess) {
    let arrayS = secret.split ("");
    let arrayG = guess.split ("");
    let bulls = 0;
    let cows = 0;
    let length = arrayS.length; 
    for (let i = 0; i < length; i++) {
        if (arrayS[i] === arrayG[i]) {
            bulls++;
            cows--;
        };
    }; 

        for (let n = 0; n < length; n++) {
            if (arrayS.includes (arrayG[n])) {
                cows++;
                arrayS.splice (arrayS.indexOf(arrayG[n]), 1);
                };
        };
        
    let string = bulls + "A" + cows + "B";
    return string;
};