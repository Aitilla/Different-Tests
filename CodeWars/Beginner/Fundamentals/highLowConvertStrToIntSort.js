function highAndLow(numbers){
    const num = numbers.split(' ').map((num) => {return parseInt(num);}).sort((numIn1, numIn2) => {return numIn1 - numIn2;});
    return num[num.length-1] + " " + num[0];
  }
  