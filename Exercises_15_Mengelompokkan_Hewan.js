function groupAnimals(animals) {
  var zoo = [];

  for (var x = 0 ; x < animals.length ; x++){ 
  var flag = false
    //console.log(animals.length + " animals ==== zoo " + zoo.length)
    var cage = []
    for (var y = 0 ; y < zoo.length; y++){
      //console.log(animals[x][0] + " === " + console.log(zoo[y][0][0])+"====")
      //kalo di zoo ada binatang yg huruf depannya sama, maka dimasukin ke kandang yg sama
      if (animals[x][0] === zoo[y][0][0]){
        //console.log(animals[x] + " animals " + x)
        zoo[y].push(animals[x])
        flag = true
      }
    }
    //kalo di zoo blum ada animals yg huruf depannya sama, maka bikin kandang baru
    if (flag === false){
      //console.log(animals[x] + " +++++ animals " + x )
      cage.push(animals[x])
      zoo.push(cage)
      flag = false;
      //console.log(cage + " CAGE")
      //console.log(zoo + " ZOO")
    }
  }
  //return zoo
  //mengurutkan nama binatang di zoo
  for (var i = 0 ; i < zoo.length ; i++){
  var kecil = []  
    for (var j = 0 ; j < zoo.length; j++){    
      if ((zoo[i][0][0] < zoo[j][0][0]) === true){
      //console.log(zoo[i][0][0] + " < " + zoo[j][0][0] + " didalm if")
        kecil = zoo[i]
        zoo[i] = zoo[j]
        zoo[j] = kecil
      }
    }  
  }
  return zoo
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
