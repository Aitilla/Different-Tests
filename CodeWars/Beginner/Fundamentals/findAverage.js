function findAverage(array) {
    let sum = 0;
    if (array.length === 0) return sum;
    
    for (var i = 0; i < array.length; i++){
      sum += array[i];
    } 
    return sum / array.length;
  }
    