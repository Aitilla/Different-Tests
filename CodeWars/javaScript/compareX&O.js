function XO(str) {
    const newArr = str.toLowerCase().split('');
    console.log(newArr);
    var amountX = 0;
    var amountO = 0;
    for (let i = 0; i < newArr.length; i++){
      if (newArr[i] === 'x'){
        amountX += 1;
      } else if (newArr[i] === 'o'){
        amountO += 1;
      }
    } return amountX === amountO
  }