function highAndLow(numbers){
  const num = numbers.split(' ').map((num) => {return parseInt(num);}).sort((numIn1, numIn2) => {return numIn1 - numIn2;});
  return num[num.length-1] + " " + num[0];
}

// Martin
function highAndLow(numbers) {
    const arr = numbers.split(' ').map(parseInt).sort((a, b) => a-b);
    return `${arr[arr.length-1]} ${arr[0]}`;
}
