const countSheep = (number) => {
    let str = "";
    for (let i = 1; i <= number; i++) {
      str += `${i} sheep...`;
    }
    return str;
  };
  
  console.log(countSheep(3));