function hurufTerakhir(kalimat, target){
    console.log(kalimat.slice(-target.length))
    console.log(kalimat.substr(-target.length))
    console.log(kalimat + " " + target)
    if (kalimat.substr(-target.length) == target){
        console.log(true)
    }else{
        console.log(false)
    }
}
hurufTerakhir("Pradeta", "a");