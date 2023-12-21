function countSheeps(sheep) {
  
    var num = 0;
    
    for(let i = 0; i <= sheep.length; i++){
      if (sheep[i] === true){
        num++;
      };
    };
    return(num);
  };