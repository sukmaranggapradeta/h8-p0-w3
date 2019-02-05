//[Exercises 4] Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)

//contoh output
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
function dataHandling2(){
    input.splice(1 , 1 , "Roman Alamsyah Elsharawy")
    input.splice(2 , 1 , "Provinsi Bandar Lampung")
    input.splice(4,1 , "Pria" , "SMA Internasional Metro")
    console.log(input)
//==============================Mei=======================
    var bulan = input[3]
    var pisahBulan = bulan.split("/")
    var bulanText = ""
    switch (pisahBulan[1]){
      case "01":
        bulanText = "Januari";
        break;
      case "02":
        bulanText = "Februari";
        break;
      case "03":
        bulanText = "Maret";
        break;
      case "04":
        bulanText = "April";
        break;
      case "05":
        bulanText = "Mei";
        break;
      case "06":
        bulanText = "Juni";
        break;
      case "07":
        bulanText = "Juli";
        break;
      case "08":
        bulanText = "Agustus";
        break;
      case "09":
        bulanText = "September";
        break;
      case "10":
        bulanText = "Oktober";
        break;
      case "11":
        bulanText = "November";
        break;
      case "12":
        bulanText = "Desember";
        break;
      default:
        bulanText ="Invalid Month"
        break;
    }
    console.log(bulanText)
//====================["1989", "21", "05"===================
var sortingDescending = pisahBulan.sort(
  function(a,b){
    return (b-a)
  })
console.log(sortingDescending)

//=======================21-05-1989=========================
var pisahBulan2 = bulan.split("/")
var joinText = pisahBulan2.join("-")
console.log(joinText)

//=====================Roman Alamsyah=======================
var maksNama = input[1].slice(0,15)
console.log(maksNama)
//console.log(typeof maksNama)
}

dataHandling2()