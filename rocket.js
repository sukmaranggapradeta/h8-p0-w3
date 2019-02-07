/*
============
Hapus Simbol
============

Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.

RULES:
- DILARANG menambahkan parameter baru
- DILARANG menggunakan built in function .indexOf atau .include
- DILARANG menggunakan REGEX
*/
 

function hapusSimbol(str) {
  // your code here
  var huruf = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var hasil = ""
//cara 1
/* for (var i = 0 ; i<str.length ; i++){
    if((str[i] === "a") || (str[i] === "b") || (str[i] === "c")|| (str[i] === "d")|| (str[i] === "e")|| (str[i] === "f")|| (str[i] === "g")|| (str[i] === "h")|| (str[i] === "i")|| (str[i] === "j")|| (str[i] === "k")|| (str[i] === "l")|| (str[i] === "m")|| (str[i] === "n")|| (str[i] === "o")|| (str[i] === "p")|| (str[i] === "q")|| (str[i] === "r")|| (str[i] === "s")|| (str[i] === "t")|| (str[i] === "u")|| (str[i] === "v")|| (str[i] === "w")|| (str[i] === "x")|| (str[i] === "y")|| (str[i] === "z") || (str[i] === "1")|| (str[i] === "2")|| (str[i] === "3")|| (str[i] === "4")|| (str[i] === "5")|| (str[i] === "6")|| (str[i] === "7")|| (str[i] === "8")|| (str[i] === "9")|| (str[i] === "0") )
        hasil = hasil + str[i] 
}
 */
//cara 2
  for (var i = 0 ; i < str.length ; i++){
    for (var j = 0; j < huruf.length ; j++){
      if ( str[i] == huruf[j] ){
      hasil = hasil + str[i]
      }
    }
  }
//show
  return hasil
}

console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

