//input "hello world!"
//output
//"!dlrow olleh"

function balikString(kalimat){
    var susunUlang = "";
    //ulangDari = kalimat[kalimat.length -1] //kalimat[5-1]
    for (var i = 1 ; i <= kalimat.length ; i++){ //1 <= 5
        susunUlang = susunUlang + kalimat[kalimat.length-i] //0 + kalimat[5-1]
    }
return susunUlang
}

console.log(balikString("hello kebalik"));
console.log(balikString("hello world"));