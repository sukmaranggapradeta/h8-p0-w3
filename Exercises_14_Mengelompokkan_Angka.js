/* Problem
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
 */

function mengelompokkanAngka(arr) {
  // you can only write your code here!
  //var genap = [];
  //var ganjil =[];
  //var kelipatanTiga = [];
  var hasil =[[],[],[]];

  for (var x = 0 ; x < arr.length ; x++){
    //console.log(arr[x])
    if(arr[x] % 2 == 0 && arr[x] % 3 !== 0){
      hasil[0].push(arr[x])
    }
    if (arr[x] % 2 == 1 && arr[x] %3 !== 0){
      hasil[1].push(arr[x])
    }
    if (arr[x] % 3 == 0){
      hasil[2].push(arr[x])
    }
  }
  //hasil = [ganjil] , [genap] , [kelipatanTiga]
  return hasil
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]