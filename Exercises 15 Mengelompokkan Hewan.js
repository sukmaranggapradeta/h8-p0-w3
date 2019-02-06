/* 
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
*/
 
function groupAnimals(animals) {
  // you can only write your code here!
  var deretanHuruf = "abcdefghijklmnopqrstuvwxyz"
  var urutanBinatang = [];

  for (var x = 0 ; x < deretanHuruf.length ; x++){
      for (var i = 0 ;i<animals.length ;i++){
        var hurufDepan = animals[i].substr(0,1)
        if (deretanHuruf[x] == hurufDepan){
          urutanBinatang.push(animals[i])
          //console.log(animals[i])    
        }
      }
    }
  return urutanBinatang 
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]