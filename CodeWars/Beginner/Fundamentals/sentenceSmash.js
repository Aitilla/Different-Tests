function smash (words) {
    words = words.toString()
    
    if (words.length == 0){
      return '';
    } else{
    for (let i = 0; i < words.length; i++){
      words = words.replace(',', ' ')
    } return words
    }
    
  };


  //other better method
   function smash (words) {
    return words.join(" ");
  };