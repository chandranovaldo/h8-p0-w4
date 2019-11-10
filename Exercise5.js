function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var kataBaru = ''    
    for (var i = 0; i < kata.length; i++) {   
        var abjadBaru = []     
        var isSame = false
        var index = 0
        for (var j = 0; j < alphabet.length; j++) {
            if (kata[i] === alphabet[j]) {
                isSame = true
                index = j+1
                break
            }
        }
        if (isSame === true) {
            abjadBaru[i] = alphabet[index]
        }
        kataBaru = kataBaru + abjadBaru[i]
    }
    return kataBaru
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu