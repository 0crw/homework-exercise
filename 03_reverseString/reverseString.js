const reverseString = function(string) {
    let nuovoArray = string.split('');
    let reverseNuovoArray = nuovoArray.reverse();
    let nuovoArrayJoinString = reverseNuovoArray.join('');
        return nuovoArrayJoinString;
}; 

// Do not edit below this line
module.exports = reverseString;
