function kelompokkanAngka(arr){
    var habisDibagi3 = [];
    var genap = [];
    var ganjil = [];
  
    for (var i = 0 ;i<arr.length ;i++){
      if (arr[i] % 3 == 0){
        habisDibagi3.push(arr[i])
      }
      if (arr[i] % 2 == 0){
        genap.push(arr[i])
      }
      if (arr[i] % 2 == 1){
          ganjil.push(arr[i])
      }
    }
    console.log(habisDibagi3)
  }
  
  console.log(kelompokkanAngka([1,2,3,4,5,6,7,8,9,10]))
  //[[angkagenap],[angkaganjil],[angka habis dibagi 3]]