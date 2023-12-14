//Begge fungerer likt og poster f.eks av Joachim Hertaas poster den J.H

function abbrevName(name){
  
    var initials = name.split(' ')
    initials[0] = initials[0][0]
    initials[1] = initials[1][0]
    
    return initials[0]+'.'+initials[1].toUpperCase();
     
}


function abbrevName(name){
  
    var initials = name.split(' ').map((initial)=>initial[0]).join('.');
    
    return initials.toUpperCase();
     
}