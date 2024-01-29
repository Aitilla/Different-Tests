//Løsning 1
function countPositivesSumNegatives(input) {
  
    var pos = 0;
    var neg = 0;
    if(input == null){
      return [];
    } else{
      for (var i = 0; i < input.length; i++) {
        if (input[i] > 0){
          pos++;
        } else if (input[i] < 0) {
          neg += input[i];
        };
      };
      if (pos == 0 && neg == 0) {
        return [];
      };
      return [pos, neg];
    };
  };
