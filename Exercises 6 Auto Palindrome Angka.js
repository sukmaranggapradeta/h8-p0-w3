function angkaPalindrome(num) {
  // you can only write your code here!
  num++ //num+1 agar mencari angka selanjutnya yang palindrome.
    while(!palindromeCocok(num)){ //jika tidak palindrome nilai num +1
      num++;
    };
  return num;
};

function palindromeCocok(num){
  num = String(num); //ubah num jadi string
  var angkaDibalik ="";
  for(var i = (num.length -1) ; i >= 0; i--){
    angkaDibalik += num[i] //membalik nilai num awal
  };
  //console.log(angkaDibalik + " " + num)
  if ( angkaDibalik === num ){ //jika angka awal dan angka dibalik sama
    return true; 
  };
};

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001