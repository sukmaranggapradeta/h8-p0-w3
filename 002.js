/*
=====================
Word Spread Reduction
=====================

[INSTRUCTION]
buatlah program yang dapat melakukan penyebaran (spread) dimulai dari 1 char dalam suatu kata, lalu dapat menyusut lagi
menjadi 1 char, hingga membentuk seperti segitiga.

[EXAMPLE]
var name = "Dimas"

output: 
D
Di
Dim
Dima
Dimas
Dima
Dim
Di
D
*/

function segitigaNama(nama){
    var susunNama = "";
    for(var x = 0; x < nama.length ; x++){
      susunNama += nama[x]
      console.log(susunNama)
    }
    for (var z = 1 ; z < (nama.length) ; z++){
      susunNama = susunNama.substr(0,(nama.length-z))
      console.log(susunNama)
    }
  }
  //segitigaNama("Pradeta")
  console.log(segitigaNama("Dimas"))