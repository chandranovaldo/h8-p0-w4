function checkAB(num) {
    // you can only write your code here!
    var selisih = 0
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {            
            for (var j = i; j < num.length; j++) {
                if (num[j] === 'b') {
                    selisih = j - i
                }
            }
        } else if (num[i] === 'b'){
            for (var j = i; j < num.length; j++) {
                if (num[j] === 'a') {
                    selisih = j - i
                }
            }
        }      
    }
    if (selisih === 4) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false