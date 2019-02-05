
function palindrome(kata) {
  // you can only write your code here!
  var balikKata = ""
  for (var x = (kata.length-1) ; x >= 0 ; x--){
    balikKata = balikKata + kata[x]
  }
    if (balikKata == kata){
      return true;
    }else{
      return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
