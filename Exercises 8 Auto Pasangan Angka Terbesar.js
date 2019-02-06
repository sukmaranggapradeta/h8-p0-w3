function pasanganTerbesar(num) {
  // you can only write your code here!
  var numJadiString = String(num)
  var pisahHuruf = numJadiString.split('')
  var pemenangPertama = pisahHuruf[0] + pisahHuruf[1]
  var penantang = "";
  var pemenang = pemenangPertama;
  var x ;
    for (var x = 0 ; x < (numJadiString.length-2) ; x++){
      penantang = pisahHuruf[(1+x)] + pisahHuruf[(2+x)]
      if (pemenang > penantang){
        pemenang = pemenang;
      }else{
        pemenang = penantang;
      } 
    }   
  return pemenang
}
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99