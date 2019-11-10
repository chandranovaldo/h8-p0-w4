function angkaPrima(angka) {
    // you can only write your code here!

//bilangan prima mulai dari angka 2 
//prima: bilangan habis dibagi bilangan itu sendiri
//bilangan ganjil 

    for (var i = 2; i < angka; i++)  
    {
        var cekPrima = true;
        if (angka % i ===0) {
          return cekPrima = false
        } else
            break
    } 

    if (cekPrima === true ) {
        return true
    } else return false;

  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

  console.log(angkaPrima(73));