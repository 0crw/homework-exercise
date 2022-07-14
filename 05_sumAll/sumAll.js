const sumAll = function(n1,n2) {
    
    if (!Number.isInteger(n1) || !Number.isInteger(n2))
        return 'ERROR';
    if (n1 < 0 || n2 <0) 
        return 'ERROR';
    if(isNaN(n1) || isNaN(n2)){
        return 'ERROR';
    }

    let somma = 0;
    if (n1 < n2){
    for(let i = n1; i <= n2; i++){
        somma += i;   
    }
    return somma;
    }
    else if(n1 > n2){
        let bigN = n1;
        let litN = n2;
        for (let j = litN; j <= bigN; j++){
            somma += j;
        }
    return somma;
    }

    



};

// Do not edit below this line
module.exports = sumAll;
