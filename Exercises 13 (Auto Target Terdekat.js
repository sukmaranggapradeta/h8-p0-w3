/* 
Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

Code */
function targetTerdekat(arr) {
    // you can only write your code here!
    var panjangKarakter = arr.length
    var jarak = 0;
    var posisiO = 0;
    var posisiX = 0;
  
    for (var i = 0 ; i < panjangKarakter ; i++){
      if(arr[i] === "x"){
        //console.log("nilai x ada di " + i)
        posisiX = i
      }
      if(arr[i] === "o"){
       //console.log("nilai o ada di "+ i)
        posisiO = i
        i = panjangKarakter 
        for (var y = posisiO ; y<panjangKarakter ; y++){
          if (arr[y] === "x"){
       // console.log("nilai x ada di " +x)
          posisiX = y;
          y = panjangKarakter;
          }
        }
      }
    }
    //jarak = posisiX-posisiO;
    //console.log(posisiX + " " + posisiO)
    if (posisiX == 0){
      jarak = 0
    }else if (posisiX > posisiO){
      jarak = posisiX - posisiO
    }else if(posisiO > posisiX){
      jarak = posisiO - posisiX
    }
  return jarak
  }

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2