const removeFromArray = function(myArray,...args) {
    const finalArray = myArray.filter(diocan => !args.includes(diocan));
    console.log(myArray);
    console.log(args);
    return finalArray;  
};

/* 
We have two solution here, an easier one and a more advanced one.
The easiest way to get an array of all of the arguments that are passed to a function is using the rest operator.

const removeFromArray = function(...args){
                                                    the very first item in our list of argument is the array, we pull it with args[0]
    const array = args [0];
                                                    create a new empty array
    const newArray = [];
                                                    use forEach to go through the array
    array.forEach(diocan) =>{
        if(!args.includes(diocan)){                 push every element into the new array
            newArray.push(diocan);                    unless it is included in the function arguments
        }                                           so we create a new array with every item, except those should be
    });
    return newArray;                                return that array
}   
 
*/

// Do not edit below this line
module.exports = removeFromArray;
