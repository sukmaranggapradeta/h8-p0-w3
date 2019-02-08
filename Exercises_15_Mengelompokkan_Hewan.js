/* 
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
*/
 
function groupAnimals(animals) {
  // you can only write your code here!
  var deretanHuruf = "abcdefghijklmnopqrstuvwxyz"
  var urutanBinatang = [];
  var grubBinatang = [];
  var indeks = 0;
 
  for (var x = 0 ; x < deretanHuruf.length ; x++){
      for (var i = 0 ;i<animals.length ;i++){
        var hurufDepan = animals[i].substr(0,1)
        if (deretanHuruf[x] == hurufDepan){
          urutanBinatang.push(animals[i])
          //console.log(animals[i])    
        }
      }
    }
  //return urutanBinatang 

 for (var i = 0; i < urutanBinatang.length; i++) {
   if (grubBinatang.length === 0) {
     grubBinatang.push([urutanBinatang[i]]);
   } else if (grubBinatang[indeks][0][0] === urutanBinatang[i][0]) {
     grubBinatang[indeks].push(urutanBinatang[i]);
   } else {
     grubBinatang.push([urutanBinatang[i]]);
     indeks++;
   }
  } return grubBinatang;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
