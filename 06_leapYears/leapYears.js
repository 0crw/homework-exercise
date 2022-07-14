const leapYears = function(years) {
    if (years % 400 === 0)
    return true;

    else if (years % 100 === 0)
    return false;

    return years % 4 === 0;
};

//return years % 4 === 0 && (years % 400 === 0 || years % 100 !== 0);



// Do not edit below this line
module.exports = leapYears;
