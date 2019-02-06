function angkaTerbesar(arr){
  var urutanPemenang =[];
  for (var i = 0; i < arr.length;i++){
      //console.log(arr[i]);
      var pemenang = arr[i][0] ;
    for(var j =0; j< arr[i].length;j++){
      var penantang = arr[i][j];
      if(penantang >= pemenang){
        pemenang = penantang;
      }
    }
    //console.log(pemenang)
    urutanPemenang.push(pemenang);
  }
  //console.log(urutanPemenang);
  return urutanPemenang;
}

console.log(angkaTerbesar([[4,5,3,1],[66,34,23,88],[4,9,65,23]]));